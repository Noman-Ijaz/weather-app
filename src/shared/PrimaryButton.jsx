import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.themeSecondary,
  borderRadius: "5px",
  color: theme.palette.themePrimary,
  fontSize: "12px",
  fontWeight: 400,
  ml: "auto",
  display: "flex",
  "&:hover": {
    background: theme.palette.themeSecondary,
  },
}));

export const PrimaryButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
