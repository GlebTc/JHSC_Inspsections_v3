import { TextField, Typography, Paper } from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Styling';
import { IReport } from '../../data/Interfaces'
import { ChangeEvent } from 'react';

interface StatusTrackingProps {
    report: IReport
    setReport: (report: IReport) => void
}


const StatusTracking = ({ report, setReport}: StatusTrackingProps) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement> ) => {
        if (event.target.id === "status") {
            setReport({
                ...report,
                statusTrackingStatus: event.target.value
            })} else {
            setReport({
                ...report,
                statusTrackingNumber: event.target.value as string
            })
            }
        }

    return(
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
            Status Tracking
        </Typography>  
            <TextField onChange={handleChange} id="status" label="Status" variant="standard" />
            <TextField onChange={handleChange} id="tracking_number" label="Tracking Number" variant="standard" /> 
        </Paper>
    )
}

export default StatusTracking;