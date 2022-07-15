import { FC } from "react"
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


const InspectionForm: FC = () => {
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
                        <InspectionSite />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <InspectionType />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Date />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ManagerCompleted />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <InspectionArea />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <StatusTracking />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <InspectionComments />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Manager />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <NoHazard />
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