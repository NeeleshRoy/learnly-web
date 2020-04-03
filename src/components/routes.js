import { Home } from './Home'
import { Problems } from './Problems'

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/problems',
        name: 'problems',
        component: Problems
    }
];
