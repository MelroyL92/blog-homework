import data from '/src/constants/data.json'
import {Link} from "react-router-dom";
import timeconverter from "../../Helpers/Timeconverter/timeconverter.jsx";

function BlogDetail () {

    const blogInfo = data

    return (
        <>
            <h1>{blogInfo[0].title}</h1>
            <h3>{blogInfo[0].subtitle}</h3>
            <p>Geschreven door {blogInfo[0].author} op {timeconverter()}</p>
            <p>{blogInfo[0].content}</p>
            <p>{blogInfo[0].comments} reacties - {blogInfo[0].shares} keer gedeeld</p>
            <Link to="/">Homepage</Link>
        </>
    )
}


export default BlogDetail