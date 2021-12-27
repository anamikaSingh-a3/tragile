import { Route, Switch } from 'react-router';
import ModalContainer from '../components/common/Modal';

import Board from '../pages/Board';
import BoardPage from '../pages/BoardPage';
import EmailVerification from '../pages/EmailVerification'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Verify from '../pages/Verify'


const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/workspaceBoards' exact component={Board} />
        <Route path='/board/:id' exact component={BoardPage} />
        <Route path='/signIn' exact component={SignIn} />
        <Route path='/signUp/:email/:name' exact component={SignUp} />
        {/* <Route path='/modal' exact component={ModalContainer} /> */}
        <Route path='/sign' exact component={EmailVerification} />
        <Route path='/verify/:userToken' exact component={Verify} />
      </Switch>
    </>
  )
}

export default Routes