import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography
} from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import MuiLink from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import HelpIcon from '@material-ui/icons/Help'
import HomeIcon from '@material-ui/icons/Home'
import PropTypes from 'prop-types'
import React from 'react'
//import { Router, Route } from 'react-router';
import {
    BrowserRouter as Router,
    Link as RouterLink,
    Route
} from 'react-router-dom'

function ListItemLink(props) {
  const { icon, primary, to } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

const useStyles = makeStyles({
  root: {
    width: 360
  }
})

export default function ListRouter() {
  const classes = useStyles()

  return (
    <Router initialEntries={['/']} initialIndex={0}>
      <div className={classes.root}>
        <Route>
          {({ location }) => (
            <Typography gutterBottom>
              Current route: {location.pathname}
            </Typography>
          )}
        </Route>
        <Paper elevation={0}>
          <List aria-label="main page folders">
            <ListItemLink to="/" primary="Index" icon={<HomeIcon />} />
            <ListItemLink to="/about" primary="About" icon={<HelpIcon />} />
          </List>
          <Divider />
          <List aria-label="secondary User folders">
            <ListItemLink to="/home" primary="Home" />
            <ListItemLink to="/login" primary="Login" />
          </List>
          <List className="menulist">
            <ListItem button>
              <ListItemIcon>
                <Icon>g_translate</Icon>
              </ListItemIcon>
              <MuiLink
                color="textPrimary"
                href="https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN"
                target="_blank"
                rel="noopener"
                component="button"
              >
                <ListItemText primary="Google翻譯" />
              </MuiLink>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Icon>today</Icon>
              </ListItemIcon>
              <MuiLink
                color="textPrimary"
                href="https://docs.google.com/spreadsheets/d/1ugnB8DEgdhT5E8YbIidNcF4AI4rObaMCdSjT4qG9lp0/edit#gid=2106039647"
                target="_blank"
                rel="noopener"
                component="button"
              >
                <ListItemText primary="日報" />
              </MuiLink>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Icon>history_edu</Icon>
              </ListItemIcon>
              <MuiLink
                color="textPrimary"
                href="https://docs.google.com/document/d/1v-Ttj7IFEgzA0Bo_WclSQp1nc-Ek7GPQrHZCerHK8hM/edit#heading=h.d23ii4u9uy4r"
                target="_blank"
                rel="noopener"
                component="button"
              >
                <ListItemText primary="批注詞" />
              </MuiLink>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Icon>calculate</Icon>
              </ListItemIcon>
              <MuiLink
                color="textPrimary"
                href="https://docs.google.com/spreadsheets/d/1cCY030BQSbDku2rkaoIjxMFN3U3ePLJSsnWG6qNHR8w/edit#gid=0"
                target="_blank"
                rel="noopener"
                component="button"
              >
                <ListItemText primary="數據計算" />
              </MuiLink>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Icon>filter_alt</Icon>
              </ListItemIcon>
              <MuiLink
                color="textPrimary"
                href="https://docs.google.com/spreadsheets/d/1rcSdSl6M-ruV4bHOlzOmHvYEJFsbOxRjqVr0KXcQdCc/edit#gid=184557706"
                target="_blank"
                rel="noopener"
                component="button"
              >
                <ListItemText primary="篩選總表" />
              </MuiLink>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Icon>source</Icon>
              </ListItemIcon>
              <MuiLink
                color="textPrimary"
                href="https://docs.google.com/spreadsheets/d/1_uNZrvOgcgTYnTA97Ygv3jJEAMCkjmTlCd4KWaeb2V8/edit#gid=0"
                target="_blank"
                rel="noopener"
                component="button"
              >
                <ListItemText primary="匯入處理" />
              </MuiLink>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Icon>folder_shared</Icon>
              </ListItemIcon>

              <MuiLink
                color="textPrimary"
                href="https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws"
                target="_blank"
                rel="noopener"
                component="button"
              >
                <ListItemText primary="採購部共用" />
              </MuiLink>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Icon>folder_shared </Icon>
              </ListItemIcon>

              <MuiLink
                color="textPrimary"
                href="https://docs.google.com/spreadsheets/d/1gqruDNC_8Dp3r5BEuD-lDiL8jlvb4rZMfvXWk1hrYHA"
                target="_blank"
                rel="noopener"
                component="button"
              >
                <ListItemText primary="Jayden共用" />
              </MuiLink>
            </ListItem>
          </List>
          <Divider />
        </Paper>
      </div>
    </Router>
  )
}
