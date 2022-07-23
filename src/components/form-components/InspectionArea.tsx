import {FC, useState} from 'react';
import { FormControl, InputLabel, Select, MenuItem, Paper, Typography } from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Styling';

// Created the DeptList API that contains the following information: site, label, value and level (floor)
import DeptList from '../../data/DeptList';

//  I have to import the report data into here to identify the site that I am navigating through
//  Based on that information, I will have the first menu offer level selection
//  Based on the selected level, I will display departments available

//  I have to figure out how to best store data to access it properly.  Using an array in DeptList may be a bad idea.

export const InspectionArea: FC = () => {
    const [inspectionArea, setInspectionArea] = useState("");

    const handleChange = (event: any) => {
        setInspectionArea(event.target.value as string);
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
                <InputLabel id='inspection_level'>Level</InputLabel>
                <Select
                    value={inspectionArea}
                    onChange={handleChange}               
                    inputProps={{
                        name: 'inspection_level',
                        id: 'inspection_level',
                    }}
                >
                    <MenuItem value="level_1">Level 1</MenuItem>
                    <MenuItem value="level_2">Level 2</MenuItem>
                    <MenuItem value="level_3">Level 3</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180, width: "80%"  }}>
                <InputLabel id="inspection_dept">Area</InputLabel>
                <Select
                    value={inspectionArea}
                    onChange={handleChange}               
                    inputProps={{
                        name: 'inspection_dept',
                        id: 'inspection_dept',
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