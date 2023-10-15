import { FC } from 'react';
import { NO_SEARCH_RESULTS_MESSAGE } from '../../constants';
import { ICharacter } from '../../types';
import Card from '../Card';
import styled from 'styled-components';

interface Props {
  data: ICharacter[];
}

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const NoResultsMessage = styled.h2`
  margin-top: 1.25rem;
  font-weight: bold;
  color: #2451e6;
  font-size: 1.25rem;
  text-transform: uppercase;
`;

export const CardGrid: FC<Props> = ({ data }) => {
  return (
    <GridContainer>
      {data.length ? (
        data.map((el) => <Card key={el.id} cardData={el} />)
      ) : (
        <NoResultsMessage>{NO_SEARCH_RESULTS_MESSAGE}</NoResultsMessage>
      )}
    </GridContainer>
  );
};
