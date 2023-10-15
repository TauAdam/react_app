import styled from 'styled-components';
import { useGetCharactersQuery } from '../../api';
import { CardGrid } from '../../components/CardGrid';
import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { SearchBar } from '../../components/SearchBar';
import { useAppSelector } from '../../hooks';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoaderContainer = styled.div`
  margin-top: 2.5rem;
`;

export const MainPage = () => {
  const { text } = useAppSelector((state) => state.searchText);
  const { data = [], isLoading, isError } = useGetCharactersQuery(text);

  return (
    <>
      <Header currentPage="Main" />
      <MainContainer>
        <SearchBar />
        <LoaderContainer>
          {isLoading ? (
            <CenteredDiv>
              <Loader />
            </CenteredDiv>
          ) : (
            <>
              <CardGrid data={!isError && data.results} />
            </>
          )}
        </LoaderContainer>
      </MainContainer>
    </>
  );
};
