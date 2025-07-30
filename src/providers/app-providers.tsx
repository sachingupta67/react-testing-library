import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
  },
});

interface IProviderProps {
  children: React.ReactNode;
}
const Provider: React.FC<IProviderProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default Provider;
