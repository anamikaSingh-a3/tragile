import { Link, Typography } from '@material-ui/core'
import React from 'react'

const Copyright: React.FC = () => {
  return (
    <>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href=''>
          Tragile
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  )
}
export default Copyright
