import {FC, FormEvent, useState} from 'react';
import { FormControl, InputLabel, Select, MenuItem, Paper, Typography } from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Styling';
import UserList from '../../data/UserList';


export const InspectedBy: FC = () => {
    const [inspectedBy, setInspectedBy] = useState<string[]>([]);

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        return ([...inspectedBy, (event.target as HTMLInputElement).value]);
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
                    value={inspectedBy}
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