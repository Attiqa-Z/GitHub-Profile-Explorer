import {Link} from "react-router-dom";
import Navbar from "./Navbar";
export default function NotFoundPage(){
    return (
        <div>
            <Navbar onSearch={() => {}} />
            404 Page not found Go to the 👉
    <Link to="/"> Home Page</Link>
    </div>
    )
}