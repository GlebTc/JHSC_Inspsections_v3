import * as React from 'react';
import { TextField, Paper, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PaperDesign, TitleDesign } from '../../design/Styling';

export default function Date() {
  const [inspectionDate, setInspectionDate] = React.useState<Date | null>(null);


  return (
    <Paper
      elevation={6}
      sx={
              {
                  ...PaperDesign,
                  paddingTop: "30px",                  
              }
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
          value={inspectionDate}
          onChange={(newDate) => {
            setInspectionDate(newDate);
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
