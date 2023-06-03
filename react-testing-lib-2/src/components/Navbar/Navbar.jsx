import React from 'react';
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

const Navbar = () => {
    return (
        <ButtonGroup sx={{ width: 1 }} variant="contained" aria-label="outlined primary button group">
            <Button sx={{ width: 1 }} to="/" component={Link}>Main</Button>
            <Button sx={{ width: 1 }} to="/about" component={Link}>About</Button>
            <Button sx={{ width: 1 }} to="/users" component={Link}>Users</Button>
        </ButtonGroup>
    );
};

export default Navbar;
