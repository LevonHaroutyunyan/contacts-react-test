import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import withAsync from 'shared/hoc/withAsync';
import { authChecker } from 'utils/authChecker';

const Homepage = withAsync(() => import('app/Homepage'));
const Profile = withAsync(() => import('app/Profile'));
const Contact = withAsync(() => import('app/Contact'));

// Public routes
const PUBLIC_ROUTES = [
    {
        id: 1,
        path: '/',
        exact: true,
        component: Homepage,
    }
]

// Private routes
const basePath = '/profile'
const PRIVATE_ROUTES = [
    {
        id: 2,
        path: basePath,
        exact: true,
        component: Profile,
    },
    {
        id: 3,
        path: `${basePath}/contacts`,
        exact: false,
        component: Contact,
    }
]

export const RootRouter = () => (
    <>
    <Switch>
      { authChecker()
        ? [...PUBLIC_ROUTES, ...PRIVATE_ROUTES].map((route) => (
            <Route key={route.id} exact={route.exact} path={route.path} render={() => <route.component />} />
         ))
        : PUBLIC_ROUTES.map((route) => (
            <Route key={route.id} exact={route.exact} path={route.path} render={() => <route.component />} />
        ))
        }
    </Switch>
    <Switch>
        { window.location.path !== '/' && !authChecker() && <Redirect to="/"/>}
    </Switch>
    </>
  );