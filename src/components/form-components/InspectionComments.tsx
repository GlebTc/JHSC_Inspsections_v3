import { FC } from "react";
import { TextField, Paper, Typography } from "@mui/material";
import { PaperDesign, TitleDesign } from "../../design/Styling";

const InspectionComments: FC = () => {
    return (
        <Paper
        elevation={6}
        sx={
            ()=> (
                {
                    ...PaperDesign,
                    paddingTop: "30px",                  
                }
            )
        }
      >
        <Typography
          variant="h4"
          sx={
            TitleDesign
          }      
        >
            Inspection Comments
        </Typography>  
            <TextField
                id="inspection_comments"
                label="Comments"
                multiline
                rows={4}
                variant="outlined"
                sx={{ width: "90%", }}
            />
        </Paper>
    );
}

export default InspectionComments;