import { Route, Switch } from 'react-router'
import Board from '../pages/Board'
import BoardPage from '../pages/BoardPage'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/workspaceBoards' exact component={Board} />
        <Route path='/board/:id' exact component={BoardPage} />
        <Route path='/signIn' exact component={SignIn} />
        <Route path='/signUp' exact component={SignUp} />
      </Switch>
    </>
  )
}

export default Routes