import { FormControlLabel, Radio, RadioGroup, } from "@mui/material";
import { IReport } from '../../data/Interfaces'
import { ChangeEvent } from "react";

interface InspectionTypeProps {
    report: IReport
    setReport: (report: IReport) => void
}

export const InspectionType: React.FC<InspectionTypeProps> = ({ report, setReport }:InspectionTypeProps) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setReport({...report, inspectionType: event.target.value})
    }

    return (
            <RadioGroup aria-label="inspection_type" name="inspection_type" value={report.inspectionType} onChange={handleChange}>
                <FormControlLabel value="annual" control={<Radio />} label="Annual" />
                <FormControlLabel value="follow_up" control={<Radio />} label="Follow Up" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
    );
}

export default InspectionType;