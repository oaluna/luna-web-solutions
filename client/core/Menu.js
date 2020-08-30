import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import { Link, withRouter } from 'react-router-dom'
import theme from '../theme'

const isActive = (history, path) => {
  if (history.location.pathname == path) return { color: '#3f88c5' }
  else return { color: '#ffffff' }
}
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return { color: theme.palette.primary.light }
  else return { color: '#ffffff' }
}
const Menu = withRouter(({ history }) => (
  <AppBar
    position='static'
    style={{
      background:
        'linear-gradient(45deg, #140f2d 0%, #001b2e 50%, #1a00a1 100%)'
    }}>
    <Toolbar>
      <Typography variant='h2' color='inherit'>
        Oscar Luna
      </Typography>
      <div>
        <Link to='/'>
          <IconButton aria-label='Home' style={isActive(history, '/')}>
            <HomeIcon />
          </IconButton>
        </Link>
        <Link to='/projects'>
          <Button style={isActive(history, '/projects')}>Projects</Button>
        </Link>
        <Link to='/about'>
          <Button style={isActive(history, '/about')}>About</Button>
        </Link>
        <Link to='/contact'>
          <Button style={isActive(history, '/contact')}>Contact</Button>
        </Link>
      </div>
      <div style={{ position: 'absolute', right: '10px' }}>
        <span style={{ float: 'right' }}></span>
      </div>
    </Toolbar>
  </AppBar>
))

export default Menu
