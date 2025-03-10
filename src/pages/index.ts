import { Landing } from "./main";

import NotFound from "./NotFound";

const routes = [
    {
        route: '/',
        title: ':website_name | :website_landing_title',
        description: ':website_landing_description',
        component: Landing
    },
    {
        route: '*',
        title: ':website_name | :website_not_found_title',
        description: ':website_not_found_description',
        component: NotFound
    }
]

export default routes;