import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const Loader = () => {
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
      <CircularProgress />
    </Box>
  );
};
