import { Route, Switch } from 'react-router'
import Board from '../pages/Board'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/board' exact component={Board} />
      </Switch>
    </>
  )
}

export default Routes
