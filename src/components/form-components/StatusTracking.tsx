import {FC} from 'react';
import { TextField, Typography, Paper } from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Styling';

const StatusTracking: FC = () => {
    return(
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
            Status Tracking
        </Typography>  
            <TextField id="standard-basic" label="Status" variant="standard" />
            <TextField id="standard-basic" label="Tracking Number" variant="standard" /> 
        </Paper>
    )
}

export default StatusTracking;