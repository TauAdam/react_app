import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { AboutPage } from '../../pages/AboutPage';
import { FormsPage } from '../../pages/FormsPage';
import { MainPage } from '../../pages/MainPage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { ROUTES } from '../../types';

export const App = () => {
  const Container = styled.div`
    max-width: 80rem;
    margin: auto;
  `;

  return (
    <Container>
      <Routes>
        <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
        <Route path={ROUTES.ABOUT_PAGE} element={<AboutPage />} />
        <Route path={ROUTES.FORMS_PAGE} element={<FormsPage />} />
        <Route path={ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
};
