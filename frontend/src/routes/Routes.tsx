import { Route, Switch } from 'react-router'
import Board from '../pages/Board'
import Workspace from '../pages/Workspace'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/board' exact component={Board} />
        <Route path='/:id/workspace' exact component={Workspace} />
      </Switch>
    </>
  )
}

export default Routes
