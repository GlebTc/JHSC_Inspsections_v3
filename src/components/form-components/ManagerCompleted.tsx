import { Checkbox } from '@mui/material';
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
            <Checkbox
                checked={report.managerCompleted}
                onChange={handleChange}
            />
    )
}


export default ManagerCompleted;