import React, { useContext } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ThemeContext } from "../../providers/CustomThemeProvider";
import { MaterialUISwitch } from "./styles";

export default function CustomizedSwitches() {
  const setThemeName = useContext(ThemeContext);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            onClick={setThemeName.toggleColorMode}
          />
        }
        label=""
      />
    </FormGroup>
  );
}
