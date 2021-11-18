import { Route, Switch } from 'react-router'
import App from '../App'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact component={App} />
      </Switch>
    </>
  )
}

export default Routes
