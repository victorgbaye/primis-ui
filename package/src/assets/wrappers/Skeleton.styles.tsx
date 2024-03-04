import styled, { css, keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

interface StyledSkeletonProps {
  animation: boolean;
  variant: 'text' | 'circle' | 'rect';
  width: string;
  height: string;
}

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  background-color: #eee;
  margin: 4px 0;
  
  ${({ animation }) =>
    animation &&
    css`
      animation: ${pulseAnimation} 1.2s ease-in-out infinite;
    `}
  
  ${({ variant, width, height }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${variant === 'circle' ? '50%' : '4px'};
  `}
`;
