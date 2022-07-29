import {FormControlLabel, Radio, RadioGroup, Typography, Paper, Grid} from "@mui/material";
import { PaperDesign, TitleDesign } from "../../design/Styling";
import SiteList from "../../data/SiteList";
import { IReport } from "../../data/Interfaces";

type InspectionSiteProps = {
    report: IReport
    setReport: (report: IReport) => void
}

const InspectionSite = ({report, setReport}:InspectionSiteProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReport({...report, inspectionSite: event.target.value});
    }

    return (
        <Paper
        elevation={6}
        sx={{
            ...PaperDesign,
            paddingTop: "30px",
            height: "auto",                  
        }}
        >
        <Typography
        variant="h4"
        sx={         
            {
                ...TitleDesign,
                marginBottom: "30px",
            }
        }      
        >
            Inspection Site
        </Typography>  

            <RadioGroup aria-label="inspection_site" name="inspection_site"
                value={report.inspectionSite}
                onChange={handleChange} 
                sx={
                        {
                            paddingLeft: "50px",
                            paddingRight: "50px",

                        }
                }
            >
                <Grid container>
                    {SiteList.map((site, key)=> (
                        <Grid item xs={12} sm={6} md={4} lg={3} sx={{textAlign:"left"}}>
                            <FormControlLabel
                                value={site.value}
                                control={<Radio />}
                                label={site.label}
                                key={key}
                            />
                        </Grid>
                    ))}
                </Grid>
            </RadioGroup>
        </Paper>
    );
}

export default InspectionSite;