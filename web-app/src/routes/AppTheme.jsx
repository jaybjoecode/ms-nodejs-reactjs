import { CssBaseline, ScopedCssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useGlobalContext } from '../context/GlobalContext';

export default function AppTheme({ children }) {

    const { theme } = useGlobalContext()

    const darkTheme = createTheme(theme);

    return (
        <>
            <ThemeProvider theme={(darkTheme)}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </>
    )
}