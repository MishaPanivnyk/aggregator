import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import MainPage from 'pages/MainPage/MainPage';
import Blogs from 'pages/Blogs/Blogs';
import Blog from 'pages/Blog/Blog';
import Profile from 'pages/Profile/Profile';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Universities from 'pages/Universities/Universities';
import { ToastContainer } from 'react-toastify';
import RoulettePage from 'pages/Roulette/Roulette';
import Search from 'pages/Search/Search';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <SharedLayout>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/roulette" element={<RoulettePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </SharedLayout>
      <ToastContainer />
    </>
  );
};
