import Note from "../models/note.model.js";
import { getUsersFromAuth } from "../cnx/auth.cnx.js"

export async function getNotes(req, res) {
  try {
    const notes = await Note.find();

    const uniqueUserIds = new Set(notes.map((note) => note.userId));
    const userIds = Array.from(uniqueUserIds);
    const users = await getUsersFromAuth(userIds);

    const notesMap = notes.map((n) => {
      const user = users.find((u) => n.userId === u.id);
      return {
        id: n.id,
        title: n.title,
        content: n.content,
        user: user,
      };
    });

    res.json(notesMap);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const getMyNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    res.json(notes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function getNote(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    const users = await getUsersFromAuth([req.user.id]);

    console.log(note)

    res.json({
      id: note.id,
      title: note.title,
      content: note.content,
      user: users[0]
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({
      title,
      content,
      userId: req.user.id,
    });
    await newNote.save();
    res.json(newNote);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const noteUpdated = await Note.findOneAndUpdate(
      { _id: req.params.id },
      { title, content },
      { new: true }
    );
    return res.json(noteUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteNote(req, res) {
  try {
    const noteDeleted = await Note.findByIdAndDelete(req.params.id);
    if (!noteDeleted)
      return res.status(404).json({ message: "Note not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
