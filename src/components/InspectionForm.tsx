import { useState } from "react"
import { AppBar, Toolbar, Typography, Grid, Box, Button } from "@mui/material"
import { Container } from "@mui/system"


// Components Import List
import Item from "./form-components/Item"
import InspectionSite from "./form-components/InspectionSite"

// Interfaces Import List
import { IReport } from "../data/Interfaces"

// Template and List for Small Components
import BaseComponentSmall from "../design/BaseComponentSmall"
import SmallComponentList from "../data/SmallComponentList"

const InspectionForm = () => {

    const [ report, setReport ] = useState<IReport>({})

    const handleSubmit = () => {
        console.log(report)
    }


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

                    {SmallComponentList.map((item, index) => {
                                return (
                                    <BaseComponentSmall title={item.compTitle} content={<item.compName setReport={setReport} report={report} />} key={index}/>
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