import React from 'react';
import { useForm } from 'react-hook-form';
import { FormFields } from '../../types';
import styled from 'styled-components';

interface FormProps {
  onFormSubmit: (data: FormFields) => void;
}

const FormContainer = styled.div`
  max-width: 32rem;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const StyledForm = styled.form`
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.5rem;
  color: #333;
  font-weight: 500;
  outline: none;

  &::placeholder {
    color: #888;
  }

  &.error {
    border-color: #ef4444;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const ConsentLabel = styled.label`
  display: inline-flex;
  align-items: center;

  input {
    margin-right: 0.25rem;
  }
`;

const SubmitButton = styled.button`
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #1e429f;
  }
`;

export const Form: React.FC<FormProps> = ({ onFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit = (data: FormFields) => {
    let imgUrl;
    if (data.file) {
      const fileBlob = new Blob([data.file[0]]);
      imgUrl = URL.createObjectURL(fileBlob);
    }
    onFormSubmit({
      ...data,
      file: imgUrl,
    });
    alert('the data has been saved');
    reset();
  };

  return (
    <FormContainer>
      <FormTitle>Fill out the form</FormTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <FormInput
            type="text"
            id="name"
            {...register('name', {
              required: 'Name is required',
              pattern: /^[A-Z].*/,
              minLength: {
                value: 2,
                message: 'Please enter at least 2 characters',
              },
            })}
            className={`${errors.name ? 'error' : ''}`}
          />
          {errors.name && (
            <ErrorMessage>
              {errors.name.message ||
                'Whoops! Your name should start with a capital letter. Please try again.'}
            </ErrorMessage>
          )}
        </FormField>
        <FormField>
          <FormLabel htmlFor="birthday">Birthday:</FormLabel>
          <FormInput
            type="date"
            id="birthday"
            {...register('birthday', {
              required: 'Uh oh, you forgot to provide your birthday! Please fill out that field.',
            })}
            className={`${errors.birthday ? 'error' : ''}`}
          />
          {errors.birthday && <ErrorMessage>{errors.birthday.message}</ErrorMessage>}
        </FormField>
        <FormField>
          <FormLabel htmlFor="country">Country:</FormLabel>
          <select
            id="country"
            {...register('country', {
              required: 'Country is required',
            })}
            className={`${errors.country ? 'error' : ''}`}
          >
            <option value="">-- Select country --</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
          {errors.country && <ErrorMessage>{errors.country.message}</ErrorMessage>}
        </FormField>
        <FormField>
          <ConsentLabel>
            <input
              type="checkbox"
              {...register('consent', {
                required: `We can't proceed without your consent. Please make sure to check the consent box.`,
              })}
              className={`${errors.consent ? 'error' : ''}`}
            />
            <span className="text-sm">I consent to my personal data</span>
          </ConsentLabel>
          {errors.consent && <ErrorMessage>{errors.consent.message}</ErrorMessage>}
        </FormField>
        <FormField>
          <FormLabel htmlFor="profile-picture">Profile picture:</FormLabel>
          <FormInput
            type="file"
            id="profile-picture"
            {...register('file', {
              required: `Wait a minute, we can't see you without a profile picture! Please upload one.`,
            })}
            accept="image/*"
            className={`${errors.file ? 'error' : ''}`}
          />
          {errors.file && <ErrorMessage>{errors.file.message}</ErrorMessage>}
        </FormField>
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};
