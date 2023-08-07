import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useAuthContext } from '../../context/AuthContext';

export default function Note({ note }) {

    const navigate = useNavigate()
    const { isAuthenticated } = useAuthContext();

    const editItem = () => {
        navigate("/edit-note/" + note.id)
    }

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card
                    sx={{ margin: '8px', width: '275px', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <CardMedia
                        component="div"
                        sx={{
                            // 16:9
                            pt: '56.25%',
                        }}
                        image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {note.title}
                        </Typography>
                        <Typography>
                            {note.content}
                        </Typography>
                    </CardContent>
                    {isAuthenticated &&
                        <CardActions>
                            {/* <Button color='secondary' fullWidth size="small">View</Button> */}
                            <Button onClick={editItem}
                                color='secondary'
                                fullWidth size="small">
                                Edit
                            </Button>
                        </CardActions>
                    }
                </Card>
            </Grid>
        </>
    )
}
