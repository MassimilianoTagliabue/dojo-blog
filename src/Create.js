import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");

    const handleSubmit = (e) =>{
        e.preventDefault();     //impedisce che la pagina venga ricaricata al click del bottone
        const blog = {title, body, author};

        console.log(blog);
        

    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title: </label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}     //posso modificare il testo dell'input
                />

                <label htmlFor="">Blog Body: </label>
                <textarea
                required 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />

                <label htmlFor="">Blog Author: </label>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;