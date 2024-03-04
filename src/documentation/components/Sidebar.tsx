// Sidebar.tsx
import { NavLink } from 'react-router-dom';
import { inputDataEntry, general } from '../utils/SidebarData';
import { SidebarContainer, CategoryName, LinkList, LinkItem } from './Sidebar.styles';
import styled from 'styled-components';

// Define a styled component for NavLink
const StyledNavLink = styled(NavLink)`
  color: #000; // Default link color
  text-decoration: none;

  &.active {
    color: #3498db; // Active link color
  }
`;

const Sidebar = () => {
  const categories = {
    'Input & Data Entry': inputDataEntry,
    'General': general,
  };

  return (
    <SidebarContainer>
      {Object.entries(categories).map(([categoryName, items]) => (
        <div key={categoryName}>
          <CategoryName>{categoryName}</CategoryName>
          <LinkList>
            {items.map(({ text, path }) => (
              <LinkItem key={path}>
                <StyledNavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {text}
                </StyledNavLink>
              </LinkItem>
            ))}
          </LinkList>
        </div>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
