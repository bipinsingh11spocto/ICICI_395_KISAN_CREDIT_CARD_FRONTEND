import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { browserRouterPath } from '../constants/variableConst';
import TryFolder from '../pages/tryfolder';


const App = () => {
    return (
        <div>
        <Switch>
            <Route exact path={browserRouterPath.LANDING_PAGE} component={lazy(() => import('../pages/step-one'))} />
            <Route exact path={browserRouterPath.THANKYOU_PAGE} component={lazy(() => import('../pages/thankyou'))} />
            <Route exact path={browserRouterPath.TRY_FOLDER} component={TryFolder} />
            {/* <Redirect to={browserRouterPath.LANDING_PAGE} /> */}
        </Switch>
        </div>
    );
};
export default App;