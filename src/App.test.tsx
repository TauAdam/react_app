import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { App } from './components/App';
import { AboutPage } from './pages/AboutPage';
import { MainPage } from './pages/MainPage';
import { store } from './store';

describe('App', () => {
  it('Renders about page', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(
      'As a frontend developer, I am passionate about creating engaging and interactive user experiences that captivate and delight users. I have extensive experience in developing websites and web applications using a range of programming languages and technologies, including HTML, CSS, JavaScript, and React.'
    );
  });
  it('Renders Main page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByPlaceholderText(/Search something/i)).toBeInTheDocument;
  });

  it('Renders not found page if invalid path', () => {
    const invalidRoute = '/this-is-invalid-route';
    render(
      <MemoryRouter initialEntries={[invalidRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Return to Main Page');
  });
});
