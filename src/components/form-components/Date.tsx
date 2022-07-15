import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { PaperDesign, TitleDesign } from '../../design/Styling';

export default function Date() {
  const [value, setValue] = React.useState<Date | null>(null);


  return (
    <Paper
      elevation={6}
      sx={
          ()=> (
              {
                  ...PaperDesign,
                  paddingTop: "30px",                  
              }
          )
      }
    >
      <Typography
        variant="h4"
        sx={
          TitleDesign
        }      
      >
          Inspection Date
      </Typography>        
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Select Date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => 
            <TextField
              {...params}
              sx={{ width: "90%", }}
            />
          }
        />
      </LocalizationProvider>
    </Paper>
  );
}
