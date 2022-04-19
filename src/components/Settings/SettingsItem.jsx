import React from "react";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SettingsItem = ({
  selectedItem,
  handleChange = () => {},
  labelName = "",
  dataValues,
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id="demo-dialog-select-label">{labelName}</InputLabel>
      <Select
        labelId="demo-dialog-select-label"
        id="demo-dialog-select"
        value={selectedItem}
        onChange={(e) => handleChange(e)}
        input={<OutlinedInput label="font" />}
      >
        {dataValues?.map((item) => (
          <MenuItem value={item.value}>{item.value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
