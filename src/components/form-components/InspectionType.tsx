import {FormControlLabel, Radio, RadioGroup, Typography, Paper} from "@mui/material";
import {useState, FC} from "react";
import { PaperDesign, TitleDesign } from "../../design/Styling";

export const InspectionType: FC = () => {
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

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
            Inspection Type
        </Typography>  

            <RadioGroup aria-label="inspection_type" name="inspection_type" value={value} onChange={handleChange}>
                <FormControlLabel value="annual" control={<Radio />} label="Annual" />
                <FormControlLabel value="follow_up" control={<Radio />} label="Follow Up" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>

        </Paper>
    );
}

export default InspectionType;