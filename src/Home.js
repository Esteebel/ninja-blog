// @flow
import * as React from 'react';
import BlogList from './BlogList';
import useFectch from './useFetch';
export function Home(): React.Node {
   const {data:blogs, isPending, error} = useFectch('http://localhost:8000/blogs')

    // const handleDelete = (id) => {
    //   const newblogList = blogs.filter(blog => (blog.id !== id)) 
    //   setBlogs(newblogList);
    // }
    // handleDelete={handleDelete}

  return (
    <div className='Home'>
      {isPending && <div>Loading...</div>}
      {error && <div> {error} </div>}
        {blogs && <BlogList  blogs={blogs} blogTitle="All Blog!" />}
        {/* <button onClick={() => setName('Danny')}>Change name</button>
        <p>{ name }</p> */}
        {blogs && <BlogList  blogs={blogs.filter((blog) => (blog.author === 'Esther'))} blogTitle="Esther's Blog!"/>}
    </div>
  );
};

export default Home;