import {FC, useState} from 'react';
import { FormControl, InputLabel, Select, MenuItem, Paper, Typography } from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Design';

// create a new component that renders a title and two dropdown menus
export const Manager: FC = () => {
    const [value, setValue] = useState("");

    const handleChange = (event: any) => {
        setValue(event.target.value as string);
    }
    
    return (
        <Paper
        elevation={12}
        sx={
            (designArgument)=> (
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
            Manager
        </Typography>     
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180, width: "80%"  }}>
                <InputLabel id="inspection-type">Manager</InputLabel>
                <Select
                    value={value}
                    onChange={handleChange}               
                    inputProps={{
                        name: 'inspection-type',
                        id: 'inspection-type',
                    }}
                >
                    <MenuItem value="level_1">Manager 1</MenuItem>
                    <MenuItem value="level_2">Manager 2</MenuItem>
                    <MenuItem value="level_3">Manager 3</MenuItem>
                </Select>
            </FormControl>

        </Paper>
    );
}

export default Manager;