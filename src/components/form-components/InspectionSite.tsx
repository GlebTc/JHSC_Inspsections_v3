import {FormControlLabel, Radio, RadioGroup, Typography, Paper, Grid} from "@mui/material";
import {useState, FC} from "react";
import { PaperDesign, TitleDesign } from "../../design/Styling";
import SiteList from "../../data/SiteList";


const InspectionSite: FC = () => {
    
    const [site, setSite] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSite(event.target.value);

    }

    console.log(`Site Selected: ${site}`);

    return (
        <Paper
        elevation={6}
        sx={
            ()=> (
                {
                    ...PaperDesign,
                    paddingTop: "30px",
                    height: "auto",                  
                }
            )
        }
      >
        <Typography
          variant="h4"
          sx={
            ()=> (
                {
                    ...TitleDesign,
                    marginBottom: "30px",
                }
         )}      
        >
            Inspection Site
        </Typography>  

            <RadioGroup aria-label="inspection_site" name="inspection_site"
                value={site}
                onChange={handleChange} 
                sx={
                    ()=> (
                        {
                            paddingLeft: "50px",
                            paddingRight: "50px",

                        }
                    )
                }
            >
                <Grid container>
                    {SiteList.map((site)=> (
                        <Grid item xs={12} sm={6} md={4} lg={3} sx={{textAlign:"left"}}>
                            <FormControlLabel
                                value={site.value}
                                control={<Radio />}
                                label={site.label}
                                key={site.id}
                            />
                        </Grid>
                    ))}
                </Grid>
            </RadioGroup>
        </Paper>
    );
}

export default InspectionSite;