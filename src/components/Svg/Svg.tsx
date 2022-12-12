import React from 'react';

import { SvgProps } from './types';
export default function Svg({
  children,
  ...props
}: React.PropsWithChildren<SvgProps>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}
