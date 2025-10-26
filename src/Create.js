import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();   //serve per salvare la cronologia della navigazione all'interno del sito

    const handleSubmit = (e) =>{
        e.preventDefault();     //impedisce che la pagina venga ricaricata al click del bottone
        const blog = {title, body, author};

        setIsLoading(true)
        
        fetch('http://localhost:8000/blogs',{
            method: 'POST',     //indichiamo che vogliamo aggiungere dei dati
            headers: {"Content-Type": "application/json"},   //indichiamo il tipo di contenuto (im questo caso json)
            body: JSON.stringify(blog)      //trasformiamo i blog in formato JSON
        }).then(() => {
            console.log("nuovo blog aggiunto");
            setIsLoading(false);
            history.push("/")       //dopo aver caricato i dati l'utente verrà reindirizzato alla home
        })
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

                { !isLoading && <button>Add Blog</button>} {/*il bottone verrà mostrato solo se la condizione è falsa */}
                { isLoading && <button>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;