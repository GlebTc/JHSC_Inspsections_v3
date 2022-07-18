import {FC, useState} from 'react';
import {Typography, Checkbox, Paper} from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Styling';

const ManagerCompleted: FC = () => {
    const [managerCompleted, setManagerCompleted] = useState(false);

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
            Manager Completed
        </Typography>  
            <Checkbox
                checked={managerCompleted}
                onChange={(event) => {
                    setManagerCompleted(event.target.checked);
                }
                }
            />
        </Paper>  
    )
}


export default ManagerCompleted;