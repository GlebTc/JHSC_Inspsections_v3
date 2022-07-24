import { Typography, Checkbox, Paper } from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Styling';
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
            No Hazards Found
        </Typography>  
            <Checkbox
                checked={report.noHazard}
                onChange={handleChange}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            />
        </Paper>  
    )
}


export default NoHazarad;