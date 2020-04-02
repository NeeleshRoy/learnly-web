import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from 'react-router-dom';

export const Nav = (routes) => {
    return (
        <Router>
            <nav>
                <ul>
                    {
                        routes.map(route => {
                            return (
                                <li>
                                    <Link to={`/${route.path}`}>{route.name}</Link>
                                </li>
                            )
                        }) 
                    }
                </ul>
            </nav>
            <Switch>
                {
                    routes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            type={route.type}
                            component={route.component}
                        />
                    ))
                }
            </Switch>
        </Router>
    )
}