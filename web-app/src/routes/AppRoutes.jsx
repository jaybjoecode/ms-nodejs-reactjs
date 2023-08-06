import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Logout from '../components/Logout';
import HomePage from '../components/HomePage';
import AdminPage from '../components/admin/AdminPage';
import NoteForm from '../components/note/NoteForm';
import { AdminProtectedRoutes } from './AdminProtectedRoutes';
import AdminPage2 from '../components/admin/AdminPage2';
import NoteList from '../components/note/NoteList';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Dashboard from '../components/dashboard/Dashboard';

// Lazy
// https://react.dev/reference/react/lazy

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route element={<HomePage />} >
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/' element={<Navigate to="/home" />} />
                    <Route path="/home/*" element={<NoteList />} />
                    <Route path="/create-note" element={<NoteForm />} />
                    <Route path="/edit-note/:id" element={<NoteForm />} />
                    <Route element={<AdminProtectedRoutes />} >
                        <Route path="/admin/*" element={<AdminPage />} >
                            <Route path="2" element={<AdminPage2 />} />
                        </Route>
                    </Route>
                </Route>
                <Route path="/home/*" element={<HomePage />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/create-note" element={<NoteForm />} />
                <Route path="/edit-note/:id" element={<NoteForm />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </>
    )
}