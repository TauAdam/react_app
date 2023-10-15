import React, { useState } from 'react';
import { ICharacter } from '../../types';
import { Modal } from '../Modal'; // You may need to adjust the import

import styled from 'styled-components';

interface CardProps {
  cardData: ICharacter;
}

const CardContainer = styled.div`
  width: 18rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

const CardDetails = styled.div`
  margin-top: 1rem;
`;

const CardName = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
`;

const CardStatus = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`;

const Card: React.FC<CardProps> = ({ cardData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CardContainer onClick={handleOpenModal}>
        <CardImage src={cardData.image} alt={cardData.name} />
        <CardDetails>
          <CardName>{cardData.name}</CardName>
          <CardStatus>{cardData.status}</CardStatus>
        </CardDetails>
      </CardContainer>
      {isModalOpen && <Modal onClose={handleCloseModal} character={cardData} />}
    </>
  );
};

export default Card;
