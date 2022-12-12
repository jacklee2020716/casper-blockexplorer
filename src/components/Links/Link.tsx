import React, { LinkHTMLAttributes } from 'react';

import { clsxm } from '@/utils';

export interface LinkProps
  extends React.PropsWithChildren<LinkHTMLAttributes<HTMLAnchorElement>> {}

export default function Link({ children, ...props }: LinkProps) {
  return (
    <a {...props} className={clsxm(props.className)}>
      {children}
    </a>
  );
}
