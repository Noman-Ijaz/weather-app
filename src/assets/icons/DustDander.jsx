import { SvgIcon } from "@mui/material";

export const DustDander = ({ ...props }) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <filter id="dsvg">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 1.000000 0"
          ></feColorMatrix>
        </filter>
      </defs>
      <g
        fill="none"
        fill-rule="evenodd"
        filter="url(#dsvg)"
        transform="translate(0 -1)"
      >
        <g stroke="#FFF">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2 9a6 6 0 1 1 12 0A6 6 0 0 1 2 9h0z"
          ></path>
          <path stroke-linecap="square" d="M19.104 3.396 16.5 6"></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14 19a4 4 0 1 1 8 0 4 4 0 0 1-8 0h0z"
          ></path>
          <path stroke-linecap="square" d="m5.135 18.176-2.811 2.812"></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 9a2 2 0 1 1 3.999-.001A2 2 0 0 1 18 9h0z"
          ></path>
          <path stroke-linecap="square" d="m9.041 19.041 2.541 2.541"></path>
        </g>
      </g>
    </SvgIcon>
  );
};
