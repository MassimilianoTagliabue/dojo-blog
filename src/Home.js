import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    //prendo i dati dall'API e li inserisco nello state blogs
    //prima di richiedere i dati, devo avviare il server (json-server --watch data/db.json --port 8000)
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setIsLoading(false);    //quando ho i dati, non viene più mostrato il messaggio di caricamento
            });

    });


    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}

        </div>
    );
}

export default Home;