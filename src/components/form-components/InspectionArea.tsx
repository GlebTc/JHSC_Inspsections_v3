import { FormControl, InputLabel, Select, MenuItem, Paper, Typography } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { PaperDesign, TitleDesign } from '../../design/Styling';
import { IReport } from '../../data/Interfaces';

interface InspectionAreaProps {
    report: IReport
    setReport: (report: IReport) => void
}

export const InspectionArea = ({ report, setReport}: InspectionAreaProps) => {

    const handleChange = (event: SelectChangeEvent) => {
        if (event.target.name === "inspection_area_level"){
            setReport({
                ...report,
                insepctionAreaLevel: event.target.value
            })
        } else {
            setReport({
                ...report,
                inspectionAreaDept: event.target.value
            })
        }

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
            Inspection Area
        </Typography>     
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180, width: "80%" }}>
                <InputLabel id='inspection_area_level'>Level</InputLabel>
                <Select
                    value={report.insepctionAreaLevel}
                    onChange={handleChange}               
                    inputProps={{
                        name: 'inspection_area_level',
                        id: 'inspection_area_level',
                    }}
                >
                    <MenuItem value="level_1">Level 1</MenuItem>
                    <MenuItem value="level_2">Level 2</MenuItem>
                    <MenuItem value="level_3">Level 3</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180, width: "80%"  }}>
                <InputLabel id="inspection_level_dept">Area</InputLabel>
                <Select
                    value={report.inspectionAreaDept}
                    onChange={handleChange}               
                    inputProps={{
                        name: 'inspection_level_dept',
                        id: 'inspection_level_dept',
                    }}
                >
                    <MenuItem value="dept_1">Department 1</MenuItem>
                    <MenuItem value="dept_2">Department 2</MenuItem>
                    <MenuItem value="dept_3">Department 3</MenuItem>
                </Select>
            </FormControl>
        </Paper>
    );
}

export default InspectionArea;