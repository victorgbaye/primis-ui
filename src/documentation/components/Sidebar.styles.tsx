// SidebarStyles.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
  width: 300px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  padding: 20px;
  border-right: 1px solid #e4e1e1;
`;

export const CategoryName = styled.h3`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 13px;
  color: #8e8f90;
  font-weight: 400;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  /* border: 1px solid red; */
`;

export const LinkItem = styled(NavLink)`
   color: #000; // Default link color
  text-decoration: none;
  margin-bottom: 5px;
  /* border: 1px solid pink; */
  display: flex;
        align-items: center;
        /* gap: var(--SM); */
        align-self: stretch;
        height: 44px;
        /* border: 1px solid red; */
        border-radius: 8px;
        padding: var(--SM, 16px);

        &:hover{
          background: #f4f3f3;
          width: 100%;
        }
        &.active {
    color: #5D55F7; // Active link color
    border: 1px solid #EDF1FF;
    width: 100%;
    padding: var(--SM, 6px);
    border-radius: var(--XS, 8px);
    background: #EDF1FF;

  }

`;
