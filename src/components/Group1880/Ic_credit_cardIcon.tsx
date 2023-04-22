import { memo, SVGProps } from 'react';

const Ic_credit_cardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.7 4C4.2015 4 3.0135 5.16813 3.0135 6.625L3 22.375H16.5H30V6.625C30 5.16813 28.7985 4 27.3 4H5.7ZM27.3 22.375H5.7V14.5H27.3V22.375V22.375ZM27.3 9.25H5.7V6.625H27.3V9.25V9.25Z'
      fill='#DEE2E6'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.99 21L8 25L11.99 29V26H19V24H11.99V21V21ZM25 21L21.01 17V20H14V22H21.01V25L25 21V21Z'
      fill='#DEE2E6'
    />
  </svg>
);
const Memo = memo(Ic_credit_cardIcon);
export { Memo as Ic_credit_cardIcon };
