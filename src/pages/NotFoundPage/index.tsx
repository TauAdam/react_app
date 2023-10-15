import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../../components/Header';

const ErrorPageContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
`;

const ReturnLink = styled(Link)`
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: #1e429f;
  }
`;

export const NotFoundPage = () => {
  return (
    <ErrorPageContainer id="error-page">
      <Header currentPage="404" />
      <ErrorTitle>Not Found</ErrorTitle>
      <ErrorMessage>Sorry, an unexpected error has occurred.</ErrorMessage>
      <h2>
        <ReturnLink to="/">Return to Main Page</ReturnLink>
      </h2>
    </ErrorPageContainer>
  );
};
