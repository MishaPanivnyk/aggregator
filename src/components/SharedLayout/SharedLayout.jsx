import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
        {children}
      </Suspense>
      <Footer />
    </>
  );
};
export default SharedLayout;
