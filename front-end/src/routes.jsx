import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function Routes() {
    return (
        <BrowserRouter>        
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;