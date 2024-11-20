import { Box } from "@mui/material";
import { ErrorGif } from "../assets/images";
import { Img } from "./Img";
export const Error = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "300px",
        borderRadius: "15px",
        mt: 6,
        background: "#dac7c2",
      }}
    >
      <Img src={ErrorGif} />
    </Box>
  );
};
