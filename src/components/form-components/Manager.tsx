import { FormControl, InputLabel, Select, MenuItem, Paper, Typography } from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Styling';
import { SelectChangeEvent } from '@mui/material/Select';
import { IReport } from '../../data/Interfaces'

interface ManagerProps {
    report: IReport
    setReport: (report: IReport) => void
}

export const Manager = ({ report, setReport }: ManagerProps) => {
    
    const handleChange = (event: SelectChangeEvent) => {
        setReport({...report, manager: event.target.value as string})
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
            Manager
        </Typography>     
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180, width: "80%"  }}>
                <InputLabel id="manager">Manager</InputLabel>
                <Select
                    value={report.manager}
                    onChange={handleChange}               
                    inputProps={{
                        name: 'manager',
                        id: 'manager',
                    }}
                >
                    <MenuItem value="manager_1">Manager 1</MenuItem>
                    <MenuItem value="manager_2">Manager 2</MenuItem>
                    <MenuItem value="manager_3">Manager 3</MenuItem>
                </Select>
            </FormControl>

        </Paper>
    );
}

export default Manager;