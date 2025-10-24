
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    //ho creato un custom hook per ottenere i dati dall'API
    //data:blogs prendo data e lo rinomino blogs 
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {/* blogs sarebbe l'array di oggetti che ho ottenuto dall'API chiamato "data" del custom hook*/}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}

        </div>
    );
}

export default Home;