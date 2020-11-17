import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/Inbox';
import PropTypes from 'prop-types';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Link as RouterLink, Switch } from 'react-router-dom';
import About from './about';
import Color from './Color';
import Home from './home';
//import Login from './login';
import theme from './theme';

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </ButtonGroup>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
});

export default function ListRouter() {
  const classes = useStyles();

  return (
    <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
      <div className={classes.root}>
        <Route>
          {({ location }) => (
            <Typography gutterBottom>Current route: {location.pathname}</Typography>
          )}
        </Route>
        
      
        <Paper elevation={0}>
          <List aria-label="main mailbox folders">
            <ListItemLink to="/" primary="Home" icon={<InboxIcon />} />
            <ListItemLink to="/about" primary="About" icon={<DraftsIcon />} />
          </List>
          <Divider />
          <List aria-label="secondary mailbox folders">
            <ListItemLink to="/color" primary="Color" />
            <ListItemLink to="/spam" primary="Spam" />
          </List>
        </Paper>
        <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/color">
          <Color />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    </MemoryRouter>
  );
}
