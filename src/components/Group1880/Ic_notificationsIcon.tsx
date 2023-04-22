import { memo, SVGProps } from 'react';

const Ic_notificationsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.0656 22C13.1475 22 14.0328 21.1 14.0328 20H10.0984C10.0984 21.1 10.9836 22 12.0656 22V22ZM18.4591 16V10.5C18.4591 7.43 16.364 4.86 13.541 4.18V3.5C13.541 2.67 12.882 2 12.0656 2C11.2492 2 10.5902 2.67 10.5902 3.5V4.18C7.76725 4.86 5.67217 7.43 5.67217 10.5V16L3.70496 18V19H20.4263V18L18.4591 16V16Z'
      fill='#84818A'
    />
  </svg>
);
const Memo = memo(Ic_notificationsIcon);
export { Memo as Ic_notificationsIcon };
