import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
//import Divider from '@material-ui/core/Divider';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
//import ListItemText from '@material-ui/core/ListItemText';
//import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
//import DraftsIcon from '@material-ui/icons/Drafts';
//import InboxIcon from '@material-ui/icons/Inbox';
import PropTypes from 'prop-types'
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { MemoryRouter, Route } from 'react-router'
import { Link as RouterLink, Switch } from 'react-router-dom'
import About from './about'
import Color from './Color'
import Home from './home'
import Info from './info'
//import Login from './login';
import theme from './theme'

function ButtonRouteLink(props) {
  const { text, to } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return <Button component={renderLink}>{text}</Button>
}

ButtonRouteLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  }
})

export default function ButtonRouter() {
  const classes = useStyles()

  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Nav>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Nav.Item>
            <ButtonRouteLink to="/" text="Home" />
          </Nav.Item>
          <Nav.Item>
            <ButtonRouteLink to="/about" text="About" />
          </Nav.Item>
          <Nav.Item>
            <ButtonRouteLink to="/color" text="Color" />
          </Nav.Item>
          <Nav.Item>
            <ButtonRouteLink to="/info" text="Info" />
          </Nav.Item>
        </ButtonGroup>
      </Nav>
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
        <Route path="/info">
          <Info />
        </Route>
      </Switch>
    </MemoryRouter>
  )
}
