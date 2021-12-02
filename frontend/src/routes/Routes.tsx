import { Route, Switch } from 'react-router'
import Board from '../pages/Board'
import BoardPage from '../pages/BoardPage'
import CardPage from '../pages/CardPage'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/workspaceBoards' exact component={Board} />
        <Route path='/board/:id' exact component={BoardPage} />
        <Route path='/card/:id' exact component={CardPage} />
      </Switch>
    </>
  )
}

export default Routes