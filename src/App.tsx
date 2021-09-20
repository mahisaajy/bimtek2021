import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeBackup from './pages/HomeBackup';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Container, Hidden, SwipeableDrawer, List, Box, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
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

type Anchor = 'top' | 'left' | 'bottom' | 'right';

function App() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const direction = 'left';

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };


  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={'beranda'} component={Link} to={'/'}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={'Beranda'} />
        </ListItem>
        <ListItem button key={'agenda'} component={Link} to={'/agenda'}>
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary={'Agenda'} />
        </ListItem>
        <ListItem button key={'materi'} component={Link} to={'/materi'}>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary={'Materi'} />
        </ListItem>
        <ListItem button key={'dokumentasi'} component={Link} to={'/dokumentasi'}>
          <ListItemIcon>
            <PhotoLibraryIcon />
          </ListItemIcon>
          <ListItemText primary={'Dokumentasi'} />
        </ListItem>        
      </List>      
    </Box>
  );


  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="sticky"
        //</div>style={{ background: 'white', color: '#5F6368' }}
        >
          <Container maxWidth="lg">
            <Toolbar>
              <Hidden smUp>
                {/* {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => ( */}
                <React.Fragment key={direction}>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon onClick={toggleDrawer(direction, true)} />
                  </IconButton>
                  {/* <Button onClick={toggleDrawer(direction, true)}>{direction}</Button> */}
                  <SwipeableDrawer
                    anchor={direction}
                    open={state[direction]}
                    onClose={toggleDrawer(direction, false)}
                    onOpen={toggleDrawer(direction, true)}
                  >
                    {list(direction)}
                  </SwipeableDrawer>
                </React.Fragment>
                {/* ))} */}
              </Hidden>
              <Typography variant="h6" className={classes.title}>
                Bimtek Database 2021
              </Typography>
              <Hidden only="xs">
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
              </Hidden>

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
