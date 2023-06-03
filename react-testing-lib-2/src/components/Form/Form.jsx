import React, {useEffect, useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";

const Form = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 100)
    }, [])

    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('');

    const onClick = () => setToggle(prev => !prev);


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            gap: 1,
            p: 1,
            backgroundColor: 'whitesmoke'
        }}>
            <Typography variant='h5'>Hello world</Typography>
            <Typography variant='h3' data-testid="value-elem">{value}</Typography>
            {toggle === true && <Box sx={{ p: 2, bgcolor: 'primary.main', borderRadius: 1, color: 'white' }} data-testid="toggle-item">toggle</Box>}

            {data && <div style={{color: 'red'}}>data</div>}

            <Button variant="contained" data-testid="toggle-btn" onClick={onClick}>Click me</Button>
            <TextField
                onChange={e => setValue(e.target.value)}
                type="text" placeholder="Input value edited....."
                variant="standard"
            />


        </Box>
    )
};

export default Form;
