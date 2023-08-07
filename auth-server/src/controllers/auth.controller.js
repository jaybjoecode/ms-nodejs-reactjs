import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken, verifyToken } from "../utils/jwt.utils.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json({
        message: ["The email is already in use"],
      });

    // hashing the password
    const passwordHash = await bcrypt.hash(password, 10);

    // creating the user
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    // saving the user in the database
    const userSaved = await newUser.save();

    // create access token
    const token = await generateToken({
      id: userSaved._id,
    });

    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    res.json({
      user: {
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
      },
      token: token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    console.log(userFound)

    if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }

    const token = await generateToken({
      id: userFound._id,
      username: userFound.username,
    });

    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    res.json({      
      user: {
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
      },
      token: token
    });

    // res.json({ token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function verifyUser(req, res) {
  const token = req.header('Authorization').split(' ')[1];

  try {
    const decodedToken = await verifyToken(token);
    res.json({ valid: true, user: decodedToken });
  } catch (error) {
    res.json({ valid: false, msg: error.message });
  }
}

export async function getUsers(req, res) {
  try {
    const users = await User.find({ '_id': { $in: req.body.ids } }, '_id username email');

    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
