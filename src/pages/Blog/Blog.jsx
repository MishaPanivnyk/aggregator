import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/Container/Container';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import {
  BlogAuthor,
  BlogAuthorContainer,
  BlogContentContainer,
  BlogImg,
  BlogImgContainer,
  BlogSection,
  BlogTitle,
} from 'pages/Blog/Blog.styled';
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

  if (!blog) {
    return <ErrorPage />;
  }

  const createMarkup = html => {
    return { __html: html };
  };

  const formatDate = isoDate => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <main>
      <BlogSection>
        <Container>
          <BlogTitle>{blog.title}</BlogTitle>
          <BlogImgContainer>
            <BlogImg
              src={`https://res.cloudinary.com/dvtiwucbq/${blog.imageUrl} `}
              alt={blog.title}
            />
            <BlogContentContainer
              dangerouslySetInnerHTML={createMarkup(blog.content)}
            />
          </BlogImgContainer>
          <BlogAuthorContainer>
            <BlogAuthor>Автор: {blog.author}</BlogAuthor>
            <p> {formatDate(blog.createdAt)}</p>
          </BlogAuthorContainer>
        </Container>
      </BlogSection>
    </main>
  );
};

export default Blog;
