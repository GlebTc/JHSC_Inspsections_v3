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


const InspectionForm: FC = () => {

    const [ report, setReport ] = useState<IReport>({})


    const handleSubmit = () => {
        console.log(report)
    }

    const lgScreen: number = 4

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
                    <Grid item xs={12} sm={6} md={4} lg={lgScreen}>
                        <InspectionType setReport={setReport} report={report}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={lgScreen}>
                        <Date setReport={setReport} report={report}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={lgScreen}>
                        <InspectedBy setReport={setReport} report={report}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={lgScreen}>
                        <ManagerCompleted setReport={setReport} report={report}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={lgScreen}>
                        <InspectionArea setReport={setReport} report={report}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={lgScreen}>
                        <StatusTracking setReport={setReport} report={report}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={lgScreen}>
                        <InspectionComments setReport={setReport} report={report}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={lgScreen}>
                        <Manager setReport={setReport} report={report}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={lgScreen}>
                        <NoHazard setReport={setReport} report={report}/>
                    </Grid>
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