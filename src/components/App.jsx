import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import MainPage from 'pages/MainPage/MainPage';
import Blogs from 'pages/Blogs/Blogs';
import Blog from 'pages/Blog/Blog';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <SharedLayout>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </SharedLayout>
      <ToastContainer />
    </>
  );
};
