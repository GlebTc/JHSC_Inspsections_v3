import {FormControlLabel, Radio, RadioGroup, Typography, Paper, Grid} from "@mui/material";
import {useState, FC} from "react";
import { PaperDesign, TitleDesign } from "../../design/Design";



export const InspectionSite: FC = () => {
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <Paper
        elevation={12}
        sx={
            (designArgument)=> (
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
            (designArgument)=> (
                {
                    ...TitleDesign,
                    marginBottom: "30px",
                }
         )}      
        >
            Inspection Site
        </Typography>  

            <RadioGroup aria-label="inspection-type" name="inspection-type" value={value} onChange={handleChange}
                sx={
                    ()=> (
                        {
                            paddingLeft: "50px",
                            paddingRight: "50px",

                        }
                    )
                }
            >
                <Grid container
                    sx={
                        ()=>({
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "space-between",                            
                        })
                    }
                >
                    <Grid item xs={6} sm={6} md={4} lg={3} sx={{textAlign:"left"}}>
                        <FormControlLabel value="juravinski" control={<Radio />} label="Juravinski" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3} sx={{textAlign:"left"}}>
                        <FormControlLabel value="urgent_care" control={<Radio />} label="Urgent Care" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3} sx={{textAlign:"left"}}>
                        <FormControlLabel value="WLMH" control={<Radio />} label="WLMH" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3} sx={{textAlign:"left"}}>
                        <FormControlLabel value="JCC" control={<Radio />} label="JCC" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3} sx={{textAlign:"left"}}>
                        <FormControlLabel value="MUMC" control={<Radio />} label="MUMC" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3} sx={{textAlign:"left"}}>
                        <FormControlLabel value="st_peters" control={<Radio />} label="St. Peter's" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3} sx={{textAlign:"left"}}>
                        <FormControlLabel value="chedoke" control={<Radio />} label="Chedoke" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3} sx={{textAlign:"left"}}>
                        <FormControlLabel value="hgh" control={<Radio />} label="General" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3} sx={{textAlign:"left"}}>
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </Grid>
                    
                    
                    
                    
                    
                    
                    
                    
                </Grid>
            </RadioGroup>

        </Paper>
    );
}

export default InspectionSite;