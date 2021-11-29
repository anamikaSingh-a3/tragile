import { Route, Switch } from 'react-router'
import Board from '../pages/Board'
import BoardPage from '../pages/BoardPage'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/workspaceBoards' exact component={Board} />
        <Route path='/board/:id' exact component={BoardPage} />
      </Switch>
    </>
  )
}

export default Routes
