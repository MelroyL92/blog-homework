import './App.css'
import logo from './assets/logo-white.png'
import {Routes, Route} from "react-router-dom";
import BlogPage from "./Pages/Blogpage/Blogpage.jsx";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Navlinks from "./Components/Navlinks/Navlinks.jsx";
import BlogDetail from "./Pages/BlogDetail/BlogDetail.jsx";
import Summary1 from "./Pages/Summary/Summary.jsx";


function App() {

    const handleSave = (values) => {
        console.log({values});
    }

        return (
            <>
                <div className="page-container">
                    <Navlinks/>
                    <img src={logo} alt="Company logo"/>
                </div>

                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/Blogpage" element={<BlogPage
                        onSave={handleSave}
                    />}/>
                    <Route path="/Blogdetail" element={<BlogDetail/>}/>
                    <Route path="/Summary" element={<Summary1/>}/>
                </Routes>
            </>


        )
}

export default App
