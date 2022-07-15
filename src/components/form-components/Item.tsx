import {FormControlLabel, Radio, RadioGroup, Typography, Paper, TextField, Button} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useState, FC} from "react";
import { PaperDesign, TitleDesign } from "../../design/Styling";

const Hazard: FC = () => {
    const [value, setValue] = useState("");

        const [dateValue, setDateValue] = useState<Date | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

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
            Inspection Hazard Details
        </Typography>  
            <TextField
                id="hazard-item-number-1"
                label="Unsafe Conditions and/or Acts"
                multiline
                rows={4}
                variant="outlined"
                sx={{ width: "90%", mb: "20px" }}
            />
            <Button 
                variant="contained"
                color="primary"
                sx={{ mb: "20px" }}
            >
                Add Photo/Files
            </Button>
            <TextField
                id="work-order-number"
                label="Work Order #"
                multiline
                rows={1}
                variant="outlined"
                sx={{ mb: "20px" }}
            />

            <RadioGroup aria-label="hazard" name="hazard" value={value} onChange={handleChange} sx={{ mb: "20px" }}>
                <Typography variant="h6">
                    Identified in Previous Inspection
                </Typography>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <Typography variant="h6">
                Date Completed / Work Order Issued
            </Typography>        
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                label="Select Date"
                value={dateValue}
                onChange={(newValue) => {
                    setDateValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} sx={{ mb: "20px" }} />}
                />
            </LocalizationProvider>

        </Paper>
    );
}

export default Hazard;