

import Homepage from "../../Home/Homepage";
import Registation from "../../Home/Registation";

import Team from "../../Home/Team";
import Root from "../../Root";
import {
    createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            },
            {
                path: "/team",
                element: <Team></Team>
            },
            {
                path: "/signup",
                element: <Registation></Registation>
            }
        ]
    },
]);

export default router