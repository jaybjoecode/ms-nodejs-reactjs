import * as React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SimpleDialog from './SimpleDialog'

export default function NavBar() {
    const actions = ['LOGIN', 'REGISTER', 'LOGOUT'];
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        console.log('SELECTED', value)
    };



    const navItems = [
        { name: 'Home', link: '/home' },
        { name: 'Create Note', link: '/create-note' },
        { name: 'Admin', link: '/admin' },
        { name: 'Login', link: '/login' },
        { name: 'Register', link: '/register' }
    ];

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Link to="/home">
                                <HomeIcon style={{ color: "white" }} />
                            </Link>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {/* App */}
                        </Typography>

                        <Divider />
                        <List>
                            {navItems.map((item, index) => (
                                <Link key={index} to={item.link}>
                                    <Button style={{ color: "white" }}>{item.name}</Button>
                                </Link>
                            ))}

                        </List>
                        <Badge badgeContent={10} color="error" style={{marginRight: "16px"}}>
                            <CircleNotificationsIcon color="white" />
                        </Badge>
                        <Avatar>
                            <PersonIcon />
                        </Avatar>
                        <Avatar onClick={handleClickOpen}>U</Avatar>
                        <SimpleDialog
                            open={open}
                            onClose={handleClose}
                            actions={actions}
                        />

                    </Toolbar>
                </AppBar>
            </Box>
        </>

    )
}
