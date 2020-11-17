import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <main className={styles.main}>
    <div className="About">
      <Typography variant="h3">About page</Typography>

      <Link to="/">
        <Button variant="outlined">Go to Home page</Button>
      </Link>
    </div>
    </main>
  )
}
