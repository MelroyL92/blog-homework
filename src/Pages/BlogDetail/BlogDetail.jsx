import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


function BlogDetail () {

    const [specificBlog, toggleSpecificBlog] = useState([]); // geef je de waarde die je verwacht terug te krijgen mee, in dit geval dus een lege array. Deze wordt gevuld met de waarde die de asynchrone functie terug geeft.
    const [error, toggleError] = useState(false);


    const { id } = useParams();

    async function fetchBlogInfo() {
        toggleError(false)
        try {
            const response = await axios.get(`http://localhost:3000/posts/${id}`)
            toggleSpecificBlog(response.data)
        } catch (e) {
            console.error(e);
            toggleError(true)
        }
    }

    async function deletePost() {
        try {
            const deletedPost = await axios.delete(`http://localhost:3000/posts/${id}`)
            console.log(deletedPost)
        } catch (e) {
            console.error(e)
        }
    }


    return (


        <div className="blogDetail-parent" >
            <button type='button' onClick={fetchBlogInfo}>specific information</button>
            {error && <p>er is iets misgegaan......</p>}
            <h1>{specificBlog.title}</h1>
            <h3>{specificBlog.subtitle}</h3>
            <p>Geschreven door {specificBlog.author} op nog te bepalen</p>
            <p>{specificBlog.content}</p>
            <p>{specificBlog.comments} reacties - {specificBlog.shares} keer gedeeld</p>
            <Link to="/">Homepage</Link>
            <button type="button" onClick={deletePost}>delete</button>

        </div>
    )
}


export default BlogDetail
