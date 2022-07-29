import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IReport } from '../../data/Interfaces';

interface DateProps {
  report: IReport
  setReport: (string: IReport) => void
}

export default function Date({report, setReport}: DateProps) {

  const handleChange = (date_field: string | null | undefined) => {
    setReport ({...report, inspectionDate: date_field})
  }

  return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Select Date"
          value={report.inspectionDate}
          onChange={(value)=>handleChange(value)}
          renderInput={(params) => 
            <TextField
              {...params}
              sx={{ width: "90%", }}
            />
          }
        />
      </LocalizationProvider>
  );
}
