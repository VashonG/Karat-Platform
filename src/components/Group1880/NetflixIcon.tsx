import { memo, SVGProps } from 'react';

const NetflixIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.14779 3.27544V7.48834C0.881804 7.52011 0.61582 7.55557 0.351117 7.59086L0.350915 7.59089C0.236185 7.60618 0.121696 7.62145 0.00755124 7.63636H0V0H1.14779H1.19687L2.726 4.36093V0H3.87379V7.17712L3.87364 7.17713C3.43571 7.22267 2.99779 7.26821 2.56365 7.31755L1.14779 3.27544ZM10.2961 6.74065C10.6963 6.72547 11.0928 6.71408 11.493 6.70269V1.10826H12.6106V0H9.17853V1.10826H10.2961V6.74065ZM14.4974 6.67424H14.4974H14.4974H14.4973H14.4973C14.3359 6.67328 14.1741 6.67233 14.0113 6.67233C13.9848 6.67233 13.9587 6.67276 13.9327 6.67318H13.9327H13.9326H13.9326H13.9326C13.881 6.67402 13.83 6.67485 13.7772 6.67233V0H16.6316V1.10826H14.9779V2.9756H16.4164V4.08007H14.9779V6.67613C14.8179 6.67613 14.6579 6.67518 14.4974 6.67424ZM22.9973 7.07085V0H21.8004V6.96837C21.9303 6.97946 22.0602 6.99014 22.1899 7.00081C22.46 7.02303 22.7295 7.04521 22.9973 7.07085ZM23.9035 7.15435C24.2923 7.1923 24.685 7.23405 25.0739 7.2758L25.931 5.14278L26.7465 7.46937L26.7466 7.46938C27.1656 7.52251 27.5847 7.57564 28 7.63636L26.569 3.5525L28 0H26.788L26.7767 0.018977L26.0027 1.93945L25.3231 0.00379541H24.1262L25.3608 3.52973L23.9035 7.15435ZM8.02319 1.10826V0H5.16505V5.9512V7.05946C6.11273 6.97596 7.06419 6.90764 8.01942 6.85071V6.5319V5.74245C7.46818 5.77282 6.91694 5.81077 6.3657 5.85252V4.08386H7.80421V2.9756H6.3657V1.10826H8.02319ZM19.0065 0V5.68932C19.5577 5.71589 20.109 5.74625 20.664 5.788V6.5357V6.89246C19.7125 6.82794 18.7611 6.7786 17.8058 6.74444V5.63618V0H19.0065Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(NetflixIcon);
export { Memo as NetflixIcon };
