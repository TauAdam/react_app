import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { FormsPage } from '.';
import { store } from '../../store';

describe('Forms Page', () => {
  it('Should render forms route', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormsPage />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Forms Page/)).toBeInTheDocument();
  });
});
