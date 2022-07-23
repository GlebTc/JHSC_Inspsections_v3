import { FormControlLabel, Radio, RadioGroup, Typography, Paper } from "@mui/material";
import { PaperDesign, TitleDesign } from "../../design/Styling";
import { IReport } from '../../data/Interfaces'
import { ChangeEvent } from "react";

interface InspectionTypeProps {
    report: IReport
    setReport: (report: IReport) => void
}

export const InspectionType = ({ report, setReport}:InspectionTypeProps) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setReport({...report, inspectionType: event.target.value})
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

            <RadioGroup aria-label="inspection_type" name="inspection_type" value={report.inspectionType} onChange={handleChange}>
                <FormControlLabel value="annual" control={<Radio />} label="Annual" />
                <FormControlLabel value="follow_up" control={<Radio />} label="Follow Up" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>

        </Paper>
    );
}

export default InspectionType;