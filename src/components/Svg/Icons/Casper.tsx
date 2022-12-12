import React from 'react';

import Svg from '../Svg';
import { SvgProps } from '../types';

export default function Casper(props: React.PropsWithChildren<SvgProps>) {
  return (
    <Svg width="26" height="28" viewBox="0 0 26 28" {...props} fill="none">
      <path
        d="M24.4895 21.6412C23.7775 21.6412 23.1733 22.1077 23.0223 22.7568L17.3584 22.5033C17.38 22.4018 17.3908 22.3004 17.3908 22.199C17.3908 22.0165 17.3584 21.8339 17.3045 21.6514L19.365 20.5358C19.8937 21.1544 20.8538 21.2457 21.5119 20.7488C22.17 20.2518 22.2671 19.3492 21.7385 18.7306C21.2099 18.1119 20.2497 18.0207 19.5916 18.5176C19.0306 18.9435 18.8688 19.6737 19.1924 20.2822L17.1858 21.3572C16.6895 20.3735 15.4489 19.9577 14.4132 20.4242C13.4423 20.8502 12.9784 21.9049 13.3344 22.8481L9.63398 23.7C9.6124 23.2233 9.39663 22.7771 9.04062 22.4323L9.7095 21.5601C10.497 21.8136 11.3601 21.4181 11.6298 20.6778C11.8995 19.9374 11.4788 19.1261 10.6912 18.8726C9.90369 18.619 9.04062 19.0145 8.77091 19.7549C8.54436 20.3837 8.80328 21.0733 9.40742 21.4282L8.79249 22.2294C8.36095 21.9252 7.81075 21.7933 7.27133 21.8643L6.63482 18.4466C7.75681 18.2134 8.46884 17.1688 8.22071 16.114C7.97257 15.0593 6.86138 14.39 5.73939 14.6232C5.55599 14.6638 5.38338 14.7246 5.21076 14.8058L3.6033 11.8546C3.94853 11.6923 4.22902 11.4388 4.434 11.1345L5.77176 11.4692C5.76097 11.5402 5.75018 11.601 5.75018 11.672C5.75018 12.4529 6.41905 13.0918 7.24976 13.102C8.08046 13.102 8.76012 12.4732 8.77091 11.6923C8.77091 10.9114 8.10203 10.2725 7.27133 10.2623C6.64561 10.2623 6.07383 10.6274 5.85806 11.1751L4.59583 10.8607C4.76844 10.4753 4.80081 10.0494 4.69292 9.64369L8.39332 8.04132C9.10535 8.89321 10.4215 9.02505 11.3277 8.35571C12.1584 7.72693 12.3634 6.61135 11.7809 5.7696L14.1543 3.58915C14.4456 3.76156 14.78 3.87312 15.1144 3.8934V4.85685C14.2945 4.93799 13.6904 5.63776 13.7875 6.40852C13.8846 7.17928 14.6182 7.74721 15.4381 7.65594C16.258 7.56466 16.8622 6.87503 16.7651 6.10427C16.6895 5.44507 16.1393 4.92784 15.4381 4.85685V3.8934C15.7402 3.87312 16.0207 3.79198 16.2796 3.66014L18.8796 6.44908C18.1783 7.31112 18.3509 8.53826 19.268 9.19746C20.185 9.85666 21.4904 9.6944 22.1916 8.83236C22.6231 8.305 22.7418 7.60523 22.4937 6.97645L23.3028 6.5505C23.8314 7.14886 24.7808 7.21985 25.4173 6.72291C26.0538 6.22597 26.1293 5.33351 25.6007 4.73515C25.0721 4.1368 24.1227 4.06581 23.4862 4.56275C22.9468 4.98869 22.7957 5.70875 23.1194 6.29696L22.3642 6.70263C21.814 5.74931 20.541 5.4045 19.5377 5.93186C19.3758 6.013 19.2248 6.11441 19.0953 6.23611L16.5493 3.50802C16.7974 3.32547 17.0024 3.08207 17.1427 2.81839L19.3758 3.1632C19.5592 3.92382 20.3576 4.40048 21.1667 4.22807C21.9758 4.05567 22.4829 3.30519 22.2995 2.54457C22.1161 1.78395 21.3177 1.30729 20.5086 1.4797C19.8289 1.62168 19.3435 2.18961 19.3435 2.84881L17.2721 2.52428C17.5958 1.48984 16.97 0.394545 15.8696 0.0801554C14.7692 -0.224093 13.6041 0.36412 13.2696 1.39856C13.0431 2.12876 13.2804 2.91981 13.8738 3.41674L11.5651 5.53634C11.2091 5.15096 10.702 4.90756 10.1626 4.86699V3.35589C10.9825 3.27476 11.5867 2.57499 11.4896 1.80423C11.3925 1.03347 10.6912 0.465536 9.87132 0.556811C9.05141 0.637944 8.44726 1.33771 8.54436 2.10848C8.61987 2.76768 9.17008 3.2849 9.87132 3.35589V4.83657C8.72776 4.9177 7.86469 5.86087 7.951 6.93588C7.97257 7.22999 8.06967 7.51395 8.22071 7.76749L4.59583 9.3293C4.46637 9.0352 4.26139 8.78165 4.00247 8.57882L5.41574 6.1854C5.5452 6.21583 5.66387 6.23611 5.79333 6.23611C6.62403 6.23611 7.3037 5.60733 7.3037 4.82643C7.3037 4.04552 6.63482 3.4066 5.80412 3.4066C4.97342 3.4066 4.29375 4.03538 4.29375 4.81629C4.29375 5.34365 4.60662 5.83045 5.10288 6.07385L3.73276 8.40641C2.74024 7.85877 1.45642 8.16302 0.873855 9.09604C0.291285 10.0291 0.614935 11.2359 1.60746 11.7836C2.1253 12.0675 2.74024 12.1284 3.30123 11.9661L4.94105 14.9579C4.5311 15.2419 4.23981 15.6678 4.14272 16.1343L2.956 15.8098C2.98837 15.6982 2.99916 15.5765 2.99916 15.465C2.99916 14.6841 2.33028 14.0553 1.49958 14.0553C0.668876 14.0553 0 14.6841 0 15.465C0 16.2459 0.668876 16.8747 1.49958 16.8747C2.07136 16.8747 2.5892 16.5704 2.83733 16.1039L4.09956 16.4487C4.09956 16.4791 4.09956 16.5096 4.09956 16.54C4.09956 17.2093 4.45558 17.828 5.05973 18.1829L4.2506 19.1768C3.62488 18.6596 2.67551 18.7204 2.13609 19.3086C1.58588 19.8969 1.65061 20.7893 2.27634 21.2964C2.90206 21.8136 3.85143 21.7528 4.39085 21.1646C4.85475 20.6676 4.88711 19.9374 4.47716 19.3999L5.35101 18.3249C5.60993 18.4365 5.90122 18.4872 6.1925 18.4872C6.23565 18.4872 6.27881 18.4872 6.32196 18.477L6.96926 21.9252C5.86885 22.2294 5.23234 23.3247 5.55599 24.3592C5.87964 25.3936 7.04478 25.992 8.14519 25.6877C8.56593 25.566 8.94352 25.3328 9.21323 24.9981L12.234 26.2658C12.2124 26.3672 12.1908 26.4788 12.1908 26.5802C12.1908 27.3611 12.8597 28 13.6904 28C14.5211 28 15.2008 27.3712 15.2008 26.5903C15.2008 25.8094 14.5319 25.1705 13.7012 25.1705C13.1186 25.1705 12.59 25.4849 12.3418 25.9717L9.39663 24.7445C9.52609 24.5214 9.6124 24.278 9.63398 24.0245L13.4746 23.1422C14.0248 24.0955 15.2871 24.4403 16.3012 23.9231C16.409 23.8724 16.5061 23.8115 16.5924 23.7405L18.0273 24.9068C17.6821 25.6167 18.0057 26.4585 18.7717 26.7931C19.5269 27.1177 20.4223 26.8134 20.7783 26.0934C21.1235 25.3835 20.7999 24.5417 20.0339 24.207C19.3866 23.9332 18.6314 24.1056 18.1999 24.633L16.8406 23.5276C17.0456 23.3247 17.1966 23.0712 17.2937 22.8075L23.0007 23.061C23.0115 23.8419 23.6804 24.4707 24.5111 24.4606C25.3418 24.4504 26.0107 23.8217 25.9999 23.0408C25.9891 22.27 25.3202 21.6412 24.4895 21.6412Z"
        fill={props.fill || '#0325D1'}
      />
    </Svg>
  );
}
