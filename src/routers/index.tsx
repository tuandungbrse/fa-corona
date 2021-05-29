import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
  Switch
} from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

interface IRoute extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

function PrivateRoute(props: IRoute): JSX.Element {
  const { component: Component, ...rest } = props;
  const isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

function SignRoute(props: IRoute): JSX.Element {
  const { component: Component, ...rest } = props;
  const isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to="/admin" /> : <Component {...props} />
      }
    />
  );
}

function Routers(): JSX.Element {
  return (
    <Switch>
      <PrivateRoute exact path="/admin" component={Dashboard} />
      <SignRoute exact path="/login" component={Login} />
      <Redirect to="login" />
    </Switch>
  );
}

export default Routers;
