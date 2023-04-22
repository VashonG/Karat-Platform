import { memo, SVGProps } from 'react';

const ItemIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={48} height={48} rx={24} fill='white' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24.5143 24.5143C27.04 24.5143 29.0857 22.4686 29.0857 19.9429C29.0857 17.4171 27.04 15.3714 24.5143 15.3714C21.9886 15.3714 19.9429 17.4171 19.9429 19.9429C19.9429 22.4686 21.9886 24.5143 24.5143 24.5143V24.5143ZM24.5143 26.8C21.4629 26.8 15.3714 28.3314 15.3714 31.3714V33.6571H33.6571V31.3714C33.6571 28.3314 27.5657 26.8 24.5143 26.8V26.8Z'
      fill='#84818A'
    />
  </svg>
);
const Memo = memo(ItemIcon2);
export { Memo as ItemIcon2 };
