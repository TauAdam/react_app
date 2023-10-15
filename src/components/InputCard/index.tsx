import React from 'react';
import { FormFields } from '../../types';
import styled from 'styled-components';

interface InputCardProps {
  card: FormFields;
}

const CardContainer = styled.div`
  width: 100%;
  max-width: calc(100% / 4);
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: calc(100% / 3);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const CardText = styled.p`
  margin-bottom: 0.5rem;
`;

export const InputCard: React.FC<InputCardProps> = ({ card }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <ProfileImage src={card.file} alt="Profile" />
      </ImageContainer>
      <CardContent>
        <CardTitle>Name: {card.name}</CardTitle>
        <CardText>Birthday: {card.birthday}</CardText>
        <CardText>From {card.country}</CardText>
        <CardText>Gender: {card.gender}</CardText>
      </CardContent>
    </CardContainer>
  );
};
