import { FormControl, InputLabel, Select, MenuItem, Paper, Typography } from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Styling';
import UserList from '../../data/UserList';
import { SelectChangeEvent } from '@mui/material/Select';
import { IReport } from '../../data/Interfaces'

interface InspectedByProps {
    report: IReport
    setReport: (report: IReport) => void
}

export const InspectedBy = ({report, setReport}: InspectedByProps) => {

    const handleChange = (event: SelectChangeEvent) => {
        setReport({...report, inspectedBy: event.target.value as string})
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
            Inspected By
        </Typography>     
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180, width: "80%" }}>
                <InputLabel id="inspected_by">Inspected By</InputLabel>
                <Select
                    value={report.inspectedBy}
                    onChange={handleChange}               
                >
                    {UserList.map((
                        (user: {
                            firstName: string;
                            lastName: string;
                            email?: string;
                            userType?: string;
                            id: number;
                        }) => (
                            <MenuItem key={user.id} value={user.email}>{user.firstName} {user.lastName}</MenuItem>
                        )
                    ))}
                </Select>
            </FormControl>
        </Paper>
    );
}

export default InspectedBy;