import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// Import styled components, assuming they are defined correctly elsewhere
import { SidebarContainer, CategoryName, LinkList, LinkItem } from './Sidebar.styles';

// Interfaces for typing the sidebar items and categories
interface SidebarItem {
  text: string;
  path: string;
}

interface Categories {
  [key: string]: SidebarItem[];
}

// Define or import inputDataEntry and general arrays matching SidebarItem[]
import { inputDataEntry, general } from '../utils/SidebarData';

// Define a styled component for NavLink
const StyledNavLink = styled(NavLink)`
  color: #000; // Default link color
  text-decoration: none;
  &:hover{
          /* background: grey; */
          width: 100%;
        }
  &.active {
    color: #5D55F7; // Active link color
    /* border: 1px solid #EDF1FF;
    width: 100%;
    padding: var(--SM, 16px);
    border-radius: var(--XS, 8px);
    background: #EDF1FF; */

  }
`;

const Sidebar: React.FC = () => {
  // Explicitly typed categories object
  const categories: Categories = {
    'Input & Data Entry': inputDataEntry,
    'General': general,
  };

  return (
    <SidebarContainer>
{Object.entries(categories).map(([categoryName, items]: [string, SidebarItem[]]) => (
        <div key={categoryName}>
          <CategoryName>{categoryName}</CategoryName>
          <LinkList>
            {items.map(({ text, path }) => (
              <LinkItem key={path} to={path}>
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
