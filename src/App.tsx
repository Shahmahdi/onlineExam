import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignupPage';
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { ExamPage } from './pages/ExamPage';

// const PrivateRoute = (props: {
// 	component: any;
// 	path: string;
// 	exact: boolean;
// }) => {
// 	return (
// 		<Route
// 			path={props.path}
// 			exact={props.exact}
// 			render={r =>
// 				isAuthenticate() ?
// 					<Layout Component={props.component} />
// 					: <Redirect to="/signin" />
// 			}
// 		/>
// 	);
// };

// const Demo = () => (<div></div>)

const NoMatch = () => (<div>This page is not available</div>)

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/signin"
          // render={r =>
          //   isAuthenticate() ? <Redirect to="/" /> : <SignInPage />
          // }
          render={r =><SignInPage />}
        />
        <Route
          exact
          path="/signup"
          render={r =><SignUpPage />}
        />
        <Route
          exact
          path="/"
          render={r =><LandingPage />}
        />
        <Route
          exact
          path="/about"
          render={r =><AboutPage />}
        />
        <Route
          exact
          path="/exam"
          render={r =><ExamPage />}
        />
        {/* <PrivateRoute
          path="/landing"
          exact={true}
          component={LandingPage}
        />
        <PrivateRoute
          exact={true}
          path="/exam"
          component={ExamPage}
        />
        <PrivateRoute
          path="/about"
          exact={true}
          component={AboutPage}
        /> */}
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
