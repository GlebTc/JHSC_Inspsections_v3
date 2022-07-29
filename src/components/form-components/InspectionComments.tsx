import { TextField } from "@mui/material";
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
        <TextField
          onChange={handleChange}
          id="inspection_comments"
          label="Comments"
          multiline
          rows={4}
          variant="outlined"
          sx={{ width: "90%", }}
        />
  );
}

export default InspectionComments;