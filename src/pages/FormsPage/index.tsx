import styled from 'styled-components';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { InputCard } from '../../components/InputCard';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addCard } from '../../store/form.slice';
import { FormFields } from '../../types';

const InputCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const FormsPage = () => {
  const { cards } = useAppSelector((state) => state.formReducer);
  const dispatch = useAppDispatch();
  const handleFormSubmit = (cardData: FormFields) => dispatch(addCard(cardData));

  return (
    <>
      <Header currentPage={'Forms Page'} />
      <Form onFormSubmit={handleFormSubmit} />
      <InputCardsContainer>
        {cards.map((card, i) => (
          <InputCard key={i} card={card} />
        ))}
      </InputCardsContainer>
    </>
  );
};
