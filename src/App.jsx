import './App.css'
import logo from './assets/logo-white.png'
import {Routes, Route} from "react-router-dom";
import BlogPage from "./Pages/Blogpage/Blogpage.jsx";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Navlinks from "./Components/Navlinks/Navlinks.jsx";
import BlogDetail from "./Pages/BlogDetail/BlogDetail.jsx";
import Summary from "./Pages/Summary/Summary.jsx";
import "./Pages/BlogDetail/BlogDetail.css"
import "./Components/Navlinks/Navlinks.css"
import "./Pages/Summary/Summary.css"



function App() {

    const handleSave = (values) => {
        console.log({values});
    }

    return (
            <>
                <Navlinks/>
                <div className="page-container">
                    <img src={logo} alt="Company logo"/>

                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/Blogpage" element={<BlogPage
                            onSave={handleSave}
                        />}/>
                        <Route path="/Blogdetail/:id" element={<BlogDetail/>}/>
                        <Route path="/Summary" element={<Summary/>}/>
                    </Routes>
                </div>
            </>
        )
}

export default App
