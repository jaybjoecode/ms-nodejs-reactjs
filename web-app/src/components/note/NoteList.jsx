import { useState, useEffect } from 'react'
import { getAllNotes } from '../../services/NoteService'
import Note from './Note'
import { useGlobalContext } from '../../context/GlobalContext';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import BasicSpeedDial from '../BasicSpeedDial';
import { Stack } from '@mui/material';

export default function NoteList() {
  const [notes, setNotes] = useState([]);

  const { tasks } = useGlobalContext();

  useEffect(() => {
    async function loadNotes() {
      const res = await getAllNotes();
      setNotes(res?.data)
    }
    loadNotes();
    console.log('GlobalContext', tasks)
  }, [])

  return (
    <>
      <h2>Notes</h2>
      {/* <Fab
        color="primary"
        sx={{
          position: 'absolute',
          bottom: (theme) => theme.spacing(2),
          right: (theme) => theme.spacing(2),
        }}
      >
        <AddIcon />
      </Fab> */}
      <BasicSpeedDial />

      {/* {count} */}

      {notes.length > 0 &&
        <Stack direction="row" spacing={2} style={{ justifyContent: 'space-around' }}>
          {
            notes.map((n) => {
              return (<Note key={n.id} note={n} />)
            })
          }
        </Stack>
      }

    </>
  );
};