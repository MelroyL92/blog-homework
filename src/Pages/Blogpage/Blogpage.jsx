import {useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";



    const BlogPage = ({onSave, formData = {}}) => {
        const {register, handleSubmit, formState: {errors}} = useForm({
            defaultValues: formData,

        })

        const [error, toggleError] = useState(false);
        const [formvalues, setFormValues] = useState({
            title : " ",
            subtitle : " ",
            content : "",
            created :  "",
            author  : "",
            readTime : 1,
            comments :0,
            shares  : 0,
        })

        const { id } = useParams();

        const handleSave = async (formValues) => {
            // alvast een paar standaard waardes meegeven, lukte me niet op een andere manier
            formValues.readTime = 1;
            formValues.comments = 0;
            formValues.shares = 0;
            formValues.created = ""
            // Update the formvalues state with the current form values
            setFormValues(formValues);

            // Send the form values to your server using Axios
            try {
                const response = await axios.post('http://localhost:3000/posts/', formValues);
                console.log(response);
                onSave(formValues);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        };


        return (
            <form onSubmit={handleSubmit(handleSave)}>
                <label htmlFor="title">Titel
                    <input type="text" id="Title" {...register("title", {
                        required: {
                            value: true,
                            message: "titel is verplicht"
                        },
                    })} />
                    {errors.title && <p>{errors.title.message}</p>}
                </label>
                <label htmlFor="subtitle">Subtitel
                    <input type="text" id="subtitle"  {...register("subtitle", {
                        required: {
                            value: true,
                            message: "subtitel is verplicht"
                        },
                    })} />
                    {errors.subtitle && <p>{errors.subtitle.message}</p>}
                </label>
                <label htmlFor="content">Blog
                    <textarea id="content" cols="30" rows="10"  {...register("content", {
                        required: {
                            value: true,
                            message: "dit veld is verplicht"
                        },
                        minLength: {
                            value: 300,
                            message: "the minimum value is 300 characters"
                        },
                        maxLength: {
                            value: 2000,
                            message: "the maximum amount of characters is 2000"
                        },
                    })}/>
                    {errors.content && <p>{errors.content.message}</p>}
                </label>
                <label htmlFor="author">Auteur
                    <input type="text" id="author" placeholder="first and last name" {...register("author", {
                    required: {
                    value: true,
                    message: "write your first and last name"
                    },
                    })}/>
                    {errors.author && <p>{errors.author.message}</p>}
                </label>


                <button type="submit">Verzenden</button>

            </form>
        )

}

export default BlogPage