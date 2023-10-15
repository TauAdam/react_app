import React, { FormEvent, useState } from 'react';
import { LOCAL_STORAGE_KEY } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setText } from '../../store/searchText.slice';
import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  background-color: white;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  width: 66.67%;
  line-height: normal;
  margin-right: 0.5rem;

  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

const SearchButton = styled.button`
  background-color: #3498db;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

export const SearchBar: React.FC = () => {
  const [value, setValue] = useState<string>(() => localStorage.getItem(LOCAL_STORAGE_KEY) || '');

  const { text } = useAppSelector((state) => state.searchText);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setText(value));
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search something"
        defaultValue={text}
        onChange={handleChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};
