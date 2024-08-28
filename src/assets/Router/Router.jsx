

import Homepage from "../../Home/Homepage";
import Login from "../../Home/Login";
import Registration from "../../Home/Registration";
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
                path: "/registation",
                element: <Registration></Registration>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
]);

export default router