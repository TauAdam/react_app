import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { SearchBar } from '.';
import { store } from '../../store';

describe('App', () => {
  it('Renders search bar', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchBar = screen.getByText(/Search/i);
    expect(searchBar).toBeInTheDocument;
  });
  it('Renders search bar works', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchBar = screen.getByText<HTMLInputElement>(/Search/i);
    const testingStr = 'Albert Einstein';
    fireEvent.change(searchBar, { target: { value: testingStr } });
    expect(searchBar.value).toBe(testingStr);
  });
});
