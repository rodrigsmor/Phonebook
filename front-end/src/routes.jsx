import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';

function Routes() {
    return (
        <BrowserRouter>        
            <Switch>
                <Route path='/home' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;