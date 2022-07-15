import {FC, useState} from 'react';
import {Typography, Checkbox, Paper} from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Design';

const NoHazarad: FC = () => {
    const [value, setValue] = useState(false);

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
            No Hazards Found
        </Typography>  
            <Checkbox
                checked={value}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onChange={(event) => {
                    setValue(event.target.checked);
                }
                }
            />
        </Paper>  
    )
}


export default NoHazarad;