import { Outlet, Link } from "react-router-dom";

function Start() {

    return(
        <div>

        <Outlet />
        </div>
    );
}

export default Start;

/*
    <Link to="/">link to Start</Link> || <Link to="/Qone">link to Qone</Link> || <Link to="/Qtwo">link to Qtwo</Link> || <Link to="/Qthree">link to Qthree</Link> || <Link to="/Result">link to Result</Link>

*/