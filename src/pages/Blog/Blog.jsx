import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/blogs/${id}`
        );
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog: ', error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  // Добавити ERROr PAGE
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </main>
  );
};

export default Blog;
