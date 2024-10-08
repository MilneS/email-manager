import { Box } from "@mui/material";
import HomeCard from "./components/HomeCard";

export default function Home() {
  const style = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "10rem",
  };

  return (
    <Box style={style}>
      <Box mr={10}>
        <HomeCard cardTitle="New email" />
      </Box>
      <Box>
        <HomeCard cardTitle="My emails" />
      </Box>
    </Box>
  );
}
