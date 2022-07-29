import { FC, useState } from "react"
import { AppBar, Toolbar, Typography, Grid, Box, Button } from "@mui/material"
import { Container } from "@mui/system"


// Components Import List
import InspectionType from './form-components/InspectionType'
import Date from './form-components/Date'
import ManagerCompleted from "./form-components/ManagerCompleted"
import InspectionArea from "./form-components/InspectionArea"
import StatusTracking from "./form-components/StatusTracking"
import InspectionComments from "./form-components/InspectionComments"
import Manager from "./form-components/Manager"
import Item from "./form-components/Item"
import NoHazard from "./form-components/NoHazard"
import InspectionSite from "./form-components/InspectionSite"
import InspectedBy from "./form-components/InspectedBy"

// Interfaces Import List
import { IReport } from "../data/Interfaces"

// Template Component Import List
import BaseComponentSmall from "../design/BaseComponentSmall"

const InspectionForm: FC<IReport> = (props: any) => {

    const [ report, setReport ] = useState<IReport>({})

    const handleSubmit = () => {
        console.log(report)
    }

    //  Object of small form components
    const smallComponents: {compName: string, compTitle: string}[] = [
        {compName: "InspectionType", compTitle: "InspectionType"},
        {compName: "Date", compTitle: "Date Inspected"},
        {compName: "ManagerCompleted", compTitle: "ManagerCompleted"},
        {compName: "InspectionArea", compTitle: "Inspection Area"},
        {compName: "StatusTracking", compTitle: "Status Tracking"},
        {compName: "InspectionComments", compTitle: "Inspection Comments"},
        {compName: "Manager", compTitle: "Manager"},
        {compName: "NoHazard", compTitle: "No Hazard Found"}
    ]

    return (
        <Container 
            maxWidth="xl"
            sx={{
                marginTop: "1rem",
                marginBottom: "1rem",
                textAlign: "center"
            }}
        >
            <Box sx={{ 
                width: "100%",
                marginBottom: "1rem",
                }}
            >
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4" sx={{ flexGrow: 1, padding: "1rem" }}>
                            Joint Health & Safety Committee Workplace Inspection Report
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container sx={{ 
                width: "100%",
                marginBottom: "1rem",
                display: "flex",
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <InspectionSite setReport={setReport} report={report}/>
                    </Grid>

                    {smallComponents.map((item, index) => {
                                return (
                                    <BaseComponentSmall title={item.compTitle} content={<item.compName setReport={setReport} report={report} {...props}/>} key={index}/>
                                    // I was receiving an error with the setReport={setReport} that "setReport={setReport} is not assignable to type 'IntrinsicAttributes'"
                                    // I added the {...props} and added (props:any) to the component declaration
                                    // I am now displaying the components but not the JSX content of these components
                                    // The warnings suggest that the BaseComponentSmall component is rendering but the item.compName is not.
                                )
                            }
                        )
                    }
                    
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Item />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Button variant="contained" color="primary" sx={{
                            width: "100%",
                            marginTop: "1rem",
                            marginBottom: "1rem",
                            }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            
            </Container>            
        </Container>
    )
}

export default InspectionForm