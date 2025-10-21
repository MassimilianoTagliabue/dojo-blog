
const BlogList = ({blogs,title}) => {
    
    

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((curBlog) => (
                <div className="blog-preview" key={curBlog.id}>
                    <h2>{curBlog.title}</h2>
                    <p>Written by {curBlog.body}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;