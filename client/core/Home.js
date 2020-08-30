import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 30
  }
}))

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4}>
          <h1>The Home Component is working</h1>
        </Grid>
      </Grid>
    </div>
  )
}
