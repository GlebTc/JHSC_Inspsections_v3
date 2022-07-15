import { FC } from "react";
import { TextField, Paper, Typography } from "@mui/material";
import { PaperDesign, TitleDesign } from "../../design/Design";

const InspectionComments: FC = () => {
    return (
        <Paper
        elevation={12}
        sx={
            (designArgument)=> (
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
                id="standard-multiline-static"
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