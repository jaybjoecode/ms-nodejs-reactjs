import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createNote, getNote, updateNote } from '../../services/NoteService'
import './Note.css'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { deleteNote } from '../../services/NoteService'
import TextField from '@mui/material/TextField';

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
        <div className="NoteForm">
            <form onSubmit={onSubmit}>
                <TextField
                    style={{ margin: "5px" }}
                    error={errors.title}
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    {...register("title", { required: true })}
                    helperText={!errors.title ? '' : "required ..."}
                />

                <TextField
                    style={{ margin: "5px" }}
                    error={errors.content}
                    id="outlined-basic"
                    label="Content"
                    variant="outlined"
                    multiline
                    rows={4}
                    {...register("content", { required: true })}
                    helperText={!errors.content ? '' : "required ..."}
                />

                <button>{textButton}</button>
            </form>
            <button onClick={cancel} >Cancel</button>
            {editing &&
                <button onClick={deleteItem}>Delete</button>
            }
        </div>
    )
}
