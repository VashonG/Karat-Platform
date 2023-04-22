import { memo, SVGProps } from 'react';

const BaseIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={7.86885} cy={8} rx={7.86885} ry={8} fill='#F75151' />
  </svg>
);
const Memo = memo(BaseIcon2);
export { Memo as BaseIcon2 };
