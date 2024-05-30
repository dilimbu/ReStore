import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">RE-STORE</Typography>
                </Toolbar>
            </AppBar>
            <Switch checked={darkMode} onChange={handleThemeChange}></Switch>
        </div>

    )
} 