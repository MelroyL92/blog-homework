import {useForm} from "react-hook-form";



    const BlogPage = ({onSave, formData = {}}) => {
        const {register, handleSubmit, formState: {errors}} = useForm({
            defaultValues: formData,

        })


        const handleSave = (formValues) => {
            onSave(formValues);
        }


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
                    <input type="text" id="subtitle" {...register("subtitle", {
                        required: {
                            value: true,
                            message: "subtitel is verplicht"
                        },
                    })} />
                    {errors.subtitle && <p>{errors.subtitle.message}</p>}
                </label>
                <label htmlFor="blogpost">Blog
                    <textarea id="blogpost" cols="30" rows="10" {...register("content", {
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
                <label htmlFor="auteur">Auteur
                    <input type="text" id="auteur" placeholder="first and last name" {...register("auteur", {
                    required: {
                    value: true,
                    message: "write your first and last name"
                    },
                    })}/>
                    {errors.auteur && <p>{errors.auteur.message}</p>}
                </label>


                <button type="submit">Verzenden</button>

            </form>
        )

}

export default BlogPage