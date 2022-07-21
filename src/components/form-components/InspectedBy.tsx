import { FormEvent } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Paper, Typography } from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Styling';
import UserList from '../../data/UserList';
import { IReport } from '../../data/Interfaces';

interface InspectedByProps {
    report: IReport
    setReport: (report: IReport) => void
}

export const InspectedBy = ({report, setReport}: InspectedByProps) => {

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        setReport({...report, inspectedBy: event.currentTarget.value});
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
                    onSelect={handleChange}               
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