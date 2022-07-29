import { FormControlLabel, Radio, RadioGroup, Grid } from "@mui/material";
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
    );
}

export default InspectionSite;