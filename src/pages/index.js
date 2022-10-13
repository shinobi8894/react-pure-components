import { Switch, Route } from 'react-router-dom';
import { LANDING_URI } from 'configs/app.config';
import LandingPage from './landing';

export default function Pages () {
    return(
        <Switch>
            <Route path={LANDING_URI} component={LandingPage} />
        </Switch>
    )
}