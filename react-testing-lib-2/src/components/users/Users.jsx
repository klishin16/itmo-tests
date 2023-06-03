import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const Users = () => {
    const [users, setUsers] = useState([]);
    // const navigate = useNavigate();

    const loadUsers = async () => {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(resp.data);
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <Box sx={{ height: '80%' }} data-testid="users-page">
            <List sx={{ height: 1, overflowY: 'scroll' }}>
                {users.map(user => <ListItem disablePadding key={user.id} data-testid="user-item">
                    <ListItemButton>
                        <ListItemText primary={user.name} />
                    </ListItemButton>
                </ListItem>)}
            </List>
        </Box>
    );
};

export default Users;
