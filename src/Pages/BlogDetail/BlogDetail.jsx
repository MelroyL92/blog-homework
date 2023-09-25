import data from '/src/constants/data.json'
import {Link, useParams} from "react-router-dom";
import timeconverter from "../../Helpers/Timeconverter/timeconverter.jsx";


function BlogDetail () {


    const { id } = useParams();
    const blogInfo = data

    return (

        <div className="blogDetail-parent" >
            <h1>{blogInfo[id].title}</h1>
            <h3>{blogInfo[id].subtitle}</h3>
            <p>Geschreven door {blogInfo[id].author} op {timeconverter(id)}</p>
            <p>{blogInfo[id].content}</p>
            <p>{blogInfo[id].comments} reacties - {blogInfo[id].shares} keer gedeeld</p>
            <Link to="/">Homepage</Link>
        </div>
    )
}


export default BlogDetail