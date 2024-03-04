import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  /* border-bottom: 1px solid #E3E3E3; */
  /* padding: 20px; */
  /* padding-bottom: 0; */
  /* .tab-content{
        display: flex;
        flex: 1;
        width: 100%;
    } */
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  /* padding-bottom: 12px; */
  border: none;
  border-bottom: ${(props) => (props.isActive ? '2px solid #5D55F7' : 'transparent')};
  cursor: pointer;
  background: ${(props) => (props.isActive ? '#EDF1FF' : 'transparent')};
  border-radius: ${(props) => (props.isActive ? '4px 4px 0px 0px' : 'none')};
  padding: var(--XS, 8px) var(--SM, 16px);
  color: #000;
  font-family: 'Quicksand';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: 0.5px;


  &:hover {
    /* background-color: #eee; */
  }
`;

export const TabContent = styled.div`
        margin-top: 16px;
        /* padding: 0 20px; */
        display: flex;
        flex: 1;
        width: 100%;
`;