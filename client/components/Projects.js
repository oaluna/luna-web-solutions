import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import theme from '../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 30
  }
}))

const Projects = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4}>
          <h1>The Projects Component is working</h1>
        </Grid>
      </Grid>
    </div>
  )
}

export default Projects
