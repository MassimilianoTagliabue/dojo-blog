import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs,title}) => {
    
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((curBlog) => (
                <div className="blog-preview" key={curBlog.id}>
                    <Link to={`/blogs/${curBlog.id}`}>
                    <h2>{curBlog.title}</h2>
                    <p>Written by {curBlog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;