import { FormControl, InputLabel, Select, MenuItem, Paper, Typography } from '@mui/material';
import { PaperDesign, TitleDesign } from '../../design/Styling';
import { SelectChangeEvent } from '@mui/material/Select';
import { IReport } from '../../data/Interfaces'

interface BaseComponentProps {
    report: IReport
    setReport: (report: IReport) => void
    title: string
    content?: JSX.Element
}

export const BaseComponent = ({ report, setReport, title }: BaseComponentProps) => {
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
                {title}
            </Typography>
        </Paper>
    )
}

export default BaseComponent