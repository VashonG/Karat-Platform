import { memo, SVGProps } from 'react';

const ItemIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={24} cy={24} r={24} fill='white' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.1053 22V29H19.2632V22H16.1053V22ZM22.4211 22V29H25.5789V22H22.4211V22ZM14 34H34V31H14V34V34ZM28.7368 22V29H31.8947V22H28.7368V22ZM24 13L14 18V20H34V18L24 13V13Z'
      fill='#84818A'
    />
  </svg>
);
const Memo = memo(ItemIcon);
export { Memo as ItemIcon };
