import { memo, SVGProps } from 'react';

const BaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={15.7377} cy={16} rx={15.7377} ry={16} fill='#F75151' stroke='#ECECEC' />
  </svg>
);
const Memo = memo(BaseIcon);
export { Memo as BaseIcon };
