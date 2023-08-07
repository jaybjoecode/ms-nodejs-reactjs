import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createNote, getNote, updateNote } from '../../services/NoteService'
import './Note.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { deleteNote } from '../../services/NoteService'
import TextField from '@mui/material/TextField';
import { Box, Button, FormControlLabel, Grid } from '@mui/material'

export default function NoteForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm()

    const navigate = useNavigate()
    const params = useParams()
    const editing = params?.id ? true : false
    const textButton = editing ? 'Edit' : 'Save'

    useEffect(() => {
        const loadData = async () => {
            if (editing) {
                const { data } = await getNote(params.id)
                setValue('title', data.title)
                setValue('content', data.content)
            }
        }
        loadData()
    }, [])

    const onSubmit = handleSubmit(async data => {
        // console.log(data)
        if (editing) {
            await updateNote(params.id, data)
            toast.success('Edited!')
        } else {
            await createNote(data)
            toast.success('Created!')
        }
        navigate("/home")
    })

    const deleteItem = async () => {
        await deleteNote(params.id)
        toast.success('Deleted!')
        navigate("/home")
    }

    const cancel = () => {
        navigate("/home")
    }

    return (
        <>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box component="form" onSubmit={onSubmit} noValidate sx={{ p: 5 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        name="title"
                        autoComplete="title"
                        autoFocus
                        error={errors.title}
                        {...register("title",
                            {
                                required: "Title is required"
                            }
                        )}
                        helperText={errors.title?.message ? errors.title.message : ''}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="content"
                        label="Content"
                        type="content"
                        id="content"
                        multiline
                        rows={4}
                        error={errors.content}
                        {...register("content",
                            {
                                required: "Content is required",
                            }
                        )}
                        helperText={errors.content?.message ? errors.content.message : ''}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>
                        {textButton}
                    </Button>
                    {editing &&
                        <Button onClick={deleteItem}
                            fullWidth
                            color="error"
                            variant="contained"
                            sx={{ mb: 2 }}>
                            Delete
                        </Button>
                    }
                    <Button onClick={cancel}
                        fullWidth
                        color="info"
                        variant="outlined">
                        Cancel
                    </Button>
                </Box>
            </Box >

        </>
    )
}
