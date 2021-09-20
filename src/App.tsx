import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeBackup from './pages/HomeBackup';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Agenda from './pages/Agenda';
import Test from './pages/Test';
import Materi from './pages/Materi';
import Home from './pages/Home';
import Dokumentasi from './pages/Dokumentasi';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    textTransform: 'none',
    fontSize: '15px',
  },
  footer: {
    //backgroundColor: theme.palette.background.paper,
    backgroundColor: //'#1565c0',
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    marginTop: 'auto',
    padding: theme.spacing(6),
},
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static"
        //</div>style={{ background: 'white', color: '#5F6368' }}
        >
          <Container maxWidth="lg">
            <Toolbar>
              {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
              <Typography variant="h6" className={classes.title}>
                Bimtek Database 2021
              </Typography>
              <Button
                component={Link}
                to={'/'}
                color="inherit"
              >
                Beranda
              </Button>
              <Button
                component={Link}
                to={'/agenda'}
                color="inherit"
              >
                Agenda
              </Button>
              <Button
                component={Link}
                to={'/materi'}
                color="inherit"
              >
                Materi
              </Button>
              <Button
                component={Link}
                to={'/dokumentasi'}
                color="inherit"
              >
                Dokumentasi
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <Switch>
          <Route path="/agenda">
            <Agenda />
          </Route>
          <Route path="/materi">
            <Materi />
          </Route>
          <Route path="/dokumentasi">
            <Dokumentasi />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

const Footer = () => {
  const classes = useStyles();
  return (
      <footer className={classes.footer}>
          <Typography variant="body1" align="center" gutterBottom>
              Bimtek Pengelola Database 2021
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary" component="p">
              Developed by: <a href='https://github.com/mahisaajy' target={"_blank"}>@mahisaajy</a>
          </Typography>
          {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
            </Typography> */}
          {/* <Copyright /> */}
      </footer>
  )
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
