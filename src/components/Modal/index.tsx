import React from 'react';
import styled from 'styled-components';
import { ICharacter } from '../../types';

interface ModalProps {
  onClose: () => void;
  character: ICharacter;
}

const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  opacity: 0.75;
  cursor: pointer;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 1rem;
  width: auto;
  z-index: 10;
`;

const CloseButton = styled.button`
  color: gray;
  cursor: pointer;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  border-radius: 0.375rem;
  margin-top: 1rem;
`;

const CharacterName = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 1rem;
`;

const CharacterStatus = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`;

const CharacterDetails = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

export const Modal: React.FC<ModalProps> = ({ onClose, character }) => {
  return (
    <ModalContainer>
      <Overlay onClick={onClose} />
      <ModalContent>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CloseButton onClick={onClose}>&#10005;</CloseButton>
        </div>
        <CharacterImage src={character.image} alt={character.name} />
        <CharacterName>{character.name}</CharacterName>
        <CharacterStatus>Status: {character.status}</CharacterStatus>
        <CharacterDetails>Gender: {character.gender}</CharacterDetails>
        <CharacterDetails>Species: {character.species}</CharacterDetails>
        <CharacterDetails>Origin: {character.origin?.name}</CharacterDetails>
        <CharacterDetails>Location: {character.location?.name}</CharacterDetails>
        <CharacterDetails>Episodes: {character.episode?.length}</CharacterDetails>
        {character.created && (
          <CharacterDetails>
            Created at: {new Date(character.created).toLocaleDateString()}
          </CharacterDetails>
        )}
      </ModalContent>
    </ModalContainer>
  );
};
