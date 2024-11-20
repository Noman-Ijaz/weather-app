import { SvgIcon } from "@mui/material";
import theme from "../../theme";

export const RightArrow = (props) => {
  return (
    <SvgIcon
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_52_5605)">
        <circle cx="11" cy="11" r="11" fill={theme.palette.themePrimary} />
        <path
          d="M9.06474 7.03903L13.3258 11.2321L9.06463 15.0415"
          stroke={theme.palette.themeSecondary}
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_52_5605">
          <rect width="22" height="22" fill={theme.palette.neutralWhite} />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
