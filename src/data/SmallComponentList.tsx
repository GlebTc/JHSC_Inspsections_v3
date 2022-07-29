// Small Components Import List
import InspectionType from '../components/form-components/InspectionType'
import Date from '../components/form-components/Date'
import ManagerCompleted from "../components/form-components/ManagerCompleted"
import InspectionArea from "../components/form-components/InspectionArea"
import StatusTracking from "../components/form-components/StatusTracking"
import InspectionComments from "../components/form-components/InspectionComments"
import Manager from "../components/form-components/Manager"
import NoHazard from "../components/form-components/NoHazard"
import InspectedBy from "../components/form-components/InspectedBy"

const smallComponents: {compName: React.FC<any>, compTitle: string}[] = [
    {compName: InspectionType, compTitle: "Inspection Type"},
    {compName: Date, compTitle: "Date Inspected"},
    {compName: ManagerCompleted, compTitle: "Manager Completed"},
    {compName: InspectionArea, compTitle: "Inspection Area"},
    {compName: StatusTracking, compTitle: "Status Tracking"},
    {compName: InspectionComments, compTitle: "Inspection Comments"},
    {compName: Manager, compTitle: "Manager"},
    {compName: NoHazard, compTitle: "No Hazard Found"},
    {compName: InspectedBy, compTitle: "Inspected By"}
]

export default smallComponents