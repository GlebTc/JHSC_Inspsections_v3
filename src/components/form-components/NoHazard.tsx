import { Checkbox } from '@mui/material';
import { IReport } from '../../data/Interfaces';
import { ChangeEvent } from 'react';

interface NoHazaradProps {
    report: IReport
    setReport: (report: IReport) => void
}

const NoHazarad = ({ report, setReport}: NoHazaradProps) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setReport({
            ...report,
            noHazard: event.target.checked
        })
    }

    return ( 
        <Checkbox
            checked={report.noHazard}
            onChange={handleChange}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        /> 
    )
}


export default NoHazarad;