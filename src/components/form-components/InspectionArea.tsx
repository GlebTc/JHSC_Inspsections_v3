import {FC, useState} from 'react';
import { FormControl, InputLabel, Select, MenuItem, Paper, Typography } from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Styling';


export const InspectedBy: FC = () => {
    const [value, setValue] = useState("");

    const handleChange = (event: any) => {
        setValue(event.target.value as string);
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
            Inspection Area
        </Typography>     
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180, width: "80%" }}>
                <InputLabel id="inspection-type">Floor</InputLabel>
                <Select
                    value={value}
                    onChange={handleChange}               
                    inputProps={{
                        name: 'inspection-type',
                        id: 'inspection-type',
                    }}
                >
                    <MenuItem value="level_1">Level 1</MenuItem>
                    <MenuItem value="level_2">Level 2</MenuItem>
                    <MenuItem value="level_3">Level 3</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180, width: "80%"  }}>
                <InputLabel id="inspection-type">Area</InputLabel>
                <Select
                    value={value}
                    onChange={handleChange}               
                    inputProps={{
                        name: 'inspection-type',
                        id: 'inspection-type',
                    }}
                >
                    <MenuItem value="level_1">Area 1</MenuItem>
                    <MenuItem value="level_2">Area 2</MenuItem>
                    <MenuItem value="level_3">Area 3</MenuItem>
                </Select>
            </FormControl>
        </Paper>
    );
}

export default InspectedBy;