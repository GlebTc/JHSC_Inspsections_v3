import { TextField } from '@mui/material';
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
        <>
            <TextField onChange={handleChange} id="status" label="Status" variant="standard" />
            <TextField onChange={handleChange} id="tracking_number" label="Tracking Number" variant="standard" /> 
        </>
    )
}

export default StatusTracking;