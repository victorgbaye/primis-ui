import React from 'react';
import { StyledSkeleton } from '../assets/wrappers/Skeleton.styles';

interface SkeletonProps {
  animation?: boolean;
  variant?: 'text' | 'circle' | 'rect';
  width?: string;
  height?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  animation = true,
  variant = 'rect',
  width = '100%',
  height = '20px',
}) => {
  return (
    <StyledSkeleton
      animation={animation}
      variant={variant}
      width={width}
      height={height}
    />
  );
};

export default Skeleton;
