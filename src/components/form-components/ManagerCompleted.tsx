import {Typography, Checkbox, Paper} from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Styling';
import { IReport } from '../../data/Interfaces';

type ManagerCompletedProps = {
    report: IReport
    setReport: (report: IReport) => void
}

const ManagerCompleted = ({setReport, report}:ManagerCompletedProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReport({...report, managerCompleted: event.target.checked});
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
            Manager Completed
        </Typography>  
            <Checkbox
                checked={report.managerCompleted}
                onChange={handleChange}

            />
        </Paper>  
    )
}


export default ManagerCompleted;