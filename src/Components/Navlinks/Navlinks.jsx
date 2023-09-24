import {Link} from "react-router-dom";


function Navlinks() {



    return (
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/BlogDetail">BlogDetail</Link></li>
                <li><Link to="/BlogPage">BlogPage</Link> </li>
                <li><Link to="/Summary">Summary</Link></li>
            </ul>
        </nav>
    )
}

export default Navlinks