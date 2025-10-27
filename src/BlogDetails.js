import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method: "DELETE"        //indichiamo che questo metodo ha la funzione di eliminare un dato(in base all'id passato)
                                    //i dati verranno cancellati dal file db.json in modo permanente, al riavvio dell'applicazione non esisteranno
        }).then(() =>{
            history.push("/");
        })
    }

    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;