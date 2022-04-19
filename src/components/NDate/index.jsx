import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { NButtonsSearch, NButtonsCancel } from "../NButtons";
import { getFormatedDate } from "../../utils/dateGenerator";
import { DateContainer } from "./styles";

export default function NDate({
  date,
  onChange,
  onSearch,
}) {
  return (
    <DateContainer>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={2} sx={{ mt: 3 }}>
          <DesktopDatePicker
            label="Сортировать по дате"
            inputFormat="dd/MM/yyyy"
            value={date}
            onChange={ (newDate) => onChange(getFormatedDate(newDate)) }
            renderInput={(params) => <TextField {...params} />}
          />
          <Stack
            spacing={1}
            direction="row"
            style={{
              justifyContent: "space-around",
            }}
          >
            <NButtonsCancel title="Отмена" onClick={() => onChange(null)} />
            <NButtonsSearch title="Поиск" onClick={onSearch} />
          </Stack>
        </Stack>
      </LocalizationProvider>
    </DateContainer>
  );
}
