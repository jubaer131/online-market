

import Homepage from "../../Home/Homepage";
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
            }
        ]
    },
]);

export default router