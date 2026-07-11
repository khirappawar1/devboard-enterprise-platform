import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#0f172a",
    },
    background: {
      default: "#f4f7fb",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;