import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';
import {
  Input,
  Button,
  Modal,
  CloseButton,
  ModalContent,
  Form,
} from './ModalBlog.styled';
import sprite from 'img/sprite.svg';

const token = localStorage.getItem('token');
export const ModalForm = ({ onClose, updateBlogs }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    image: null,
    category: '',
  });

  const handleChange = e => {
    const { name, value, files } = e.target;

    if (name === 'image' && files[0]) {
      if (files[0].size > 2 * 1024 * 1024) {
        toast.error('Розмір зображення не повинен перевищувати 2 Мб');
        return;
      }
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (Object.values(formData).some(val => val === '')) {
      toast.error('Будь ласка, заповніть усі поля!');
      return;
    }

    if (formData.image && formData.image.size > 2 * 1024 * 1024) {
      toast.error('Розмір зображення не повинен перевищувати 2 Мб');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('content', formData.content);
    formDataToSend.append('author', formData.author);
    formDataToSend.append('image', formData.image);
    formDataToSend.append('category', formData.category);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/blogs/create/`,
        formDataToSend,
        {
          headers: {
            Authorization: `token ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      updateBlogs(response.data);
      toast.success('Блог успішно надіслано!');
      onClose();
    } catch (error) {
      console.error('Error submitting blog: ', error);
      toast.error('Помилка надсилання блогу. Будь ласка спробуйте ще раз!');
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleEvent = e => {
    if (e.type === 'keydown' && e.keyCode !== 27) return;
    if (e.type === 'click' && !e.target.closest('.ModalContent')) return;
    onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEvent);
    document.addEventListener('click', handleEvent);
    return () => {
      document.removeEventListener('keydown', handleEvent);
      document.removeEventListener('click', handleEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal onClick={handleEvent}>
      <ModalContent>
        <CloseButton onClick={handleClose}>
          <svg width="20px" height="20px">
            <use href={sprite + '#icon-cancel'} />
          </svg>
        </CloseButton>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <ReactQuill
            theme="snow"
            rows="10"
            value={formData.content}
            onChange={value => setFormData({ ...formData, content: value })}
          />
          <Input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
          />
          <Input
            type="file"
            name="image"
            onChange={handleChange}
            placeholder="Image"
          />
          <Input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </ModalContent>
    </Modal>
  );
};
