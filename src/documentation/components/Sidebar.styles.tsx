// SidebarStyles.js
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 200px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const CategoryName = styled.h3`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 13px;
  color: #8e8f90;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LinkItem = styled.li`
  margin-bottom: 5px;
`;
