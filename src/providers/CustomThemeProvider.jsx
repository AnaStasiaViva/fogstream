import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { grey, blue } from "@mui/material/colors";

const getDesignTokens = (mode, typography) => ({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    fontSize: typography || 18,
    "@media (min-width:600px)": {
      fontSize: "1.3rem",
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: blue,
          divider: blue[500],
          background: {
            default: grey[50],
            paper: grey[200],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: grey[300],

          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: grey[50],
            secondary: grey[100],
          },
        }),
  },
});

export const ThemeContext = React.createContext();

export default function ToggleColorMode(props) {
  const [themeName, _setThemeName] = useState({
    mode: "light",
    fontSize: 16,
  });

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        _setThemeName((prevMode) => ({
          ...prevMode,
          mode: themeName.mode === "light" ? "dark" : "light",
        }));
      },
      changeFontSize: (value) => {
        _setThemeName((prevMode) => ({
          ...prevMode,
          fontSize: value,
        }));
      },
    }),
    [themeName]
  );

  let theme = React.useMemo(
    () => createTheme(getDesignTokens(themeName.mode, themeName.fontSize)),

    [themeName]
  );

  theme = responsiveFontSizes(theme);

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
