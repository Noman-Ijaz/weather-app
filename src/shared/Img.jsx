import { CardMedia, styled } from "@mui/material";

const Image = styled(CardMedia)(() => ({
  maxWidth: "100%",
  width: "unset",
}));

export const Img = ({ src, ...props }) => {
  return <Image src={src} component="img" {...props} />;
};
