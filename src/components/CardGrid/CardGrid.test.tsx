import { render, screen } from '@testing-library/react';
import { CardGrid } from '.';

describe('Card', () => {
  it('should render error if there no cards', () => {
    render(<CardGrid data={[]} />);
    expect(screen.getByText(`No Search Results Found`)).toBeInTheDocument();
  });
});
