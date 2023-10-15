import { render, screen } from '@testing-library/react';
import Card from '.';

describe('Card', () => {
  const mockData = {
    name: 'Rick Sanchez',
    id: 1,
    status: 'Alive',
    image: '',
  };
  it('should render card name', () => {
    render(<Card cardData={mockData} />);
    expect(screen.getByText(`Rick Sanchez`)).toBeInTheDocument();
  });
  it('should render card status', () => {
    render(<Card cardData={mockData} />);
    expect(screen.getByText(`Alive`)).toBeInTheDocument();
  });
});
