import sprite from 'img/sprite.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from '../Container/Container';
import {
  BlogItem,
  BlogItemBtn,
  BlogItemDate,
  BlogItemDesc,
  BlogItemImg,
  BlogItemTitle,
  BlogList,
  Section,
  BlogTitle,
  BlogItemDateContainer,
  DeleteIcon,
  LinkAdd,
  ContainerAddBtn,
} from './Blog.styled';
import { Loader } from 'components/Loader/Loader';
import { ModalForm } from 'components/ModalBlog/ModalBlog';

const formatDate = isoDate => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/blogs`
        );

        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const updateBlogs = newBlog => {
    setBlogs(prevBlogs => [newBlog, ...prevBlogs]);
  };

  const handleDelete = async id => {
    setIsDeleting(true);
    console.log(isDeleting);
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/blogs/${id}`);

      toast.success('Blog delete successfully!');
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      toast.error('Error deleting blog');
      console.error('Error deleting blog:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Container>
        <Section>
          <BlogTitle>Блог</BlogTitle>
          {loading ? (
            <Loader />
          ) : (
            <BlogList>
              {location.pathname === '/blogs'
                ? [...blogs]
                    .sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    )
                    .map(blog => (
                      <BlogItem key={blog._id}>
                        <DeleteIcon onClick={() => handleDelete(blog._id)}>
                          <svg width="30px" height="30px">
                            <use href={sprite + '#icon-close'} />
                          </svg>
                        </DeleteIcon>

                        <BlogItemDesc>{blog.category}</BlogItemDesc>
                        <BlogItemImg src={blog.imageUrl} alt={blog.title} />
                        <BlogItemTitle>{blog.title}</BlogItemTitle>
                        <BlogItemDateContainer>
                          <BlogItemDate>
                            {formatDate(blog.createdAt)}
                          </BlogItemDate>
                          <BlogItemBtn to={`/blogs/${blog._id}`}>
                            Детальніше
                          </BlogItemBtn>
                        </BlogItemDateContainer>
                      </BlogItem>
                    ))
                : [...blogs]
                    .sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    )
                    .slice(0, 3)
                    .map(blog => (
                      <BlogItem key={blog._id}>
                        <BlogItemDesc>{blog.category}</BlogItemDesc>
                        <BlogItemImg src={blog.imageUrl} alt={blog.title} />
                        <BlogItemTitle>{blog.title}</BlogItemTitle>
                        <BlogItemDateContainer>
                          <BlogItemDate>
                            {formatDate(blog.createdAt)}
                          </BlogItemDate>
                          <BlogItemBtn to={`/blogs/${blog._id}`}>
                            Детальніше
                          </BlogItemBtn>
                        </BlogItemDateContainer>
                      </BlogItem>
                    ))}
              {location.pathname === '/blogs' && (
                <BlogItem>
                  <ContainerAddBtn>
                    <LinkAdd onClick={toggleModal}>
                      <svg>
                        <use href={sprite + '#icon-add'} />
                      </svg>
                    </LinkAdd>
                  </ContainerAddBtn>
                </BlogItem>
              )}
            </BlogList>
          )}
        </Section>
      </Container>
      {modalOpen && (
        <ModalForm onClose={toggleModal} updateBlogs={updateBlogs} />
      )}
    </>
  );
};
