import React from 'react'
import { Link } from 'react-router-dom';

export const Nav = (props) => {
    const { routes } = props;
    return (
        <nav>
            <ul>
                {
                    routes.map(route => {
                        return (
                            <li key={route.path}>
                                <Link to={`${route.path}`}>{route.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}