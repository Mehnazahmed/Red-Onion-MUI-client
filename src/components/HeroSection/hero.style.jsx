import { Box, styled } from "@mui/material";

export const HeroSectionWrapper = styled(Box)(({ theme }) => ({
  height: "70vh",
  width: "100%",
  background: "url(https://i.ibb.co/6RTZ812/bannerbackground.png)",
  backgroundPosition: "center",
  backgroundSize: "115%",
}));

export const SearchBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "600px",
  mx: "auto",
  marginTop: theme.spacing(5),
  background: "#ffffff",
  borderRadius: "50px",
  overflow: "hidden",
  "& input": {
    border: "none",
    outline: "none",
    padding: "1rem 2rem",
    width: "100%",
    borderRadius: "30px",
    fontSize: "1.2rem",
  },
  "& button": {
    position: "absolute",
    right: "0",
    top: "0",
    background: "#F92944",
    border: "none",
    outline: "none",
    padding: "1rem 2rem",
    color: "#FFFFFF",
    fontSize: "1.2rem",
    borderRadius: "30px",
    cursor: "pointer",
  },
}));
