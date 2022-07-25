import { TextField, Paper, Typography } from "@mui/material";
import { PaperDesign, TitleDesign } from "../../design/Styling";
import { IReport } from "../../data/Interfaces";

interface InspectionCommentsProps {
  report: IReport;
  setReport: (report: IReport) => void;
}

const InspectionComments = ({ report, setReport}: InspectionCommentsProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReport({ ...report, inspectionComments: event.target.value });
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
        Inspection Comments
    </Typography>  
        <TextField
          onChange={handleChange}
          id="inspection_comments"
          label="Comments"
          multiline
          rows={4}
          variant="outlined"
          sx={{ width: "90%", }}
        />
    </Paper>
  );
}

export default InspectionComments;