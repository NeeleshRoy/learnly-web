import { Home } from '../Home'
import { Problems } from '../Problems'

export const routes = [
    {
        path: '/',
        type: 'exact',
        name: 'Home',
        component: Home
    },
    {
        path: '/problems',
        type: 'exact',
        name: 'problems',
        component: Problems
    }
]