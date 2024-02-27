import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {
  Input,
  Button,
  Modal,
  CloseButton,
  ModalContent,
  Form,
  TextArea,
} from './ModalBlog.styled';
import sprite from 'img/sprite.svg';

export const ModalForm = ({ onClose, updateBlogs }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    imageUrl: '',
    category: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    return (
      formData.title.trim() !== '' &&
      formData.content.trim() !== '' &&
      formData.author.trim() !== '' &&
      formData.imageUrl.trim() !== '' &&
      formData.category.trim() !== ''
    );
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!isFormValid()) {
      toast.error('Помилка при отриманні даних');

      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/blogs`,
        formData
      );

      updateBlogs(response.data);

      toast.success('Blog submitted successfully!');

      onClose();
    } catch (error) {
      console.error('Error submitting blog: ', error);
      toast.error('Error submitting blog. Please try again.');
    }
  };
  const handleClose = () => {
    onClose();
  };

  const handleEscape = e => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  const handleClickOutside = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal onClick={handleClickOutside}>
      <ModalContent>
        <CloseButton onClick={handleClose}>
          <svg width="30px" height="30px">
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
          <TextArea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Content"
          ></TextArea>
          <Input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
          />
          <Input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
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
