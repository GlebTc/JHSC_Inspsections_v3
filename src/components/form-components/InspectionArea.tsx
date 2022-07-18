import {FC, useState} from 'react';
import { FormControl, InputLabel, Select, MenuItem, Paper, Typography } from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Styling';


export const InspectionArea: FC = () => {
    const [inspectionArea, setInspectionArea] = useState("");

    const handleChange = (event: any) => {
        setInspectionArea(event.target.value as string);
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
                <InputLabel id="inspection_area">Area</InputLabel>
                <Select
                    value={inspectionArea}
                    onChange={handleChange}               
                    inputProps={{
                        name: 'inspection_area',
                        id: 'inspection_area',
                    }}
                >
                    <MenuItem value="area_1">Area 1</MenuItem>
                    <MenuItem value="area_2">Area 2</MenuItem>
                    <MenuItem value="area_3">Area 3</MenuItem>
                </Select>
            </FormControl>
        </Paper>
    );
}

export default InspectionArea;