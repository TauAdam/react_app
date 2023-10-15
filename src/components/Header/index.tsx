import { Link } from 'react-router-dom';
import { ROUTES } from '../../types';
import styled from 'styled-components';

interface Props {
  currentPage: string;
}

const HeaderContainer = styled.header`
  background-color: #f5f5f5;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const NavigationList = styled.ul`
  display: flex;
  gap: 1rem;
`;

const NavigationItem = styled.li`
  list-style: none;
`;

const NavigationLink = styled(Link)`
  color: #333;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #555;
  }
`;

const CurrentPageText = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  color: #888;
  margin-top: 0.25rem;
`;

export const Header = ({ currentPage }: Props) => {
  return (
    <HeaderContainer>
      <nav>
        <NavigationList>
          <NavigationItem>
            <NavigationLink to={ROUTES.MAIN_PAGE}>Main Page</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to={ROUTES.ABOUT_PAGE}>About Page</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to={ROUTES.FORMS_PAGE}>Forms</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </nav>
      <CurrentPageText>
        Current page:
        <span className="font-bold text-gray-700 ml-1">{currentPage}</span>
      </CurrentPageText>
    </HeaderContainer>
  );
};
