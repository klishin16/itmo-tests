import React from 'react';
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { Box, styled } from "@mui/material";

const AppPagesContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: 20,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }))

const App = () => {
    return (
        <div className="App">
      <header className="App-header">
      </header>
      <main className='main_container'>
        <AppPagesContainer sx={ {
          width: {
            xs: 1,
            sm: 500
          },
          height: {
            xs: '90vh',
            sm: 450
          },
          boxShadow: 0,
          backgroundColor: 'primary.light',
          borderRadius: {
            xs: 0,
            sm: 3
          },
          p: 2,
          display: 'flex',
          flexDirection: 'column'
        } }>
          <Navbar />
          <AppRouter />
        </AppPagesContainer>
      </main>
    </div>
    );
};

export default App;
