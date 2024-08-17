
import { Outlet } from "react-router-dom";
import Navbar from "./Home/Navbar";
import Footer from "./Home/footer";

const Root = () => {
    return (
        <div className="max-w-[1370px] mx-auto">
            <div className="mb-8">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;