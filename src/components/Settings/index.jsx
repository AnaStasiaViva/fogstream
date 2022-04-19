import React, { useContext, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import { ThemeContext } from "../../providers/CustomThemeProvider";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { mainActions } from "../../redux/slices/mainSlice";
import { fontSizes, newsPerPage } from "../../utils/data";
import { SettingsItem } from "./SettingsItem";

const Settings = () => {
  const setThemeName = useContext(ThemeContext);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { pageSize } = useSelector((state) => state.mainReducer);

  const [open, setOpen] = useState(false);
  const [font, setFont] = useState(theme.typography.fontSize || "");
  const [newsAmout, setNewsAmount] = useState(pageSize);

  const handleChangeFont = (event) => {
    setFont(Number(event.target.value) || "");
  };

  const handleChangePageSizeQuery = (event) => {
    setNewsAmount(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const onHandleChangeSubmit = useCallback(() => {
    setThemeName.changeFontSize(font);
    dispatch(mainActions.setPageSizeQuery(newsAmout));
    setOpen(false);
  }, [font, newsAmout, dispatch]);

  return (
    <div>
      <IconButton aria-label="settings" onClick={handleClickOpen}>
        <SettingsIcon />
      </IconButton>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Настройки</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
          >
            <SettingsItem
              selectedItem={font}
              handleChange={handleChangeFont}
              labelName="Шрифт"
              dataValues={fontSizes}
            />
            <SettingsItem
              selectedItem={newsAmout}
              handleChange={handleChangePageSizeQuery}
              labelName="Новостей на странице"
              dataValues={newsPerPage}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          <Button onClick={() => onHandleChangeSubmit()}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Settings;
