import { Paper, Typography, Grid } from '@mui/material';
import { PaperDesign, TitleDesign } from './Styling'

interface BaseComponentSmallProps {
    title: string
    content: any
}

const BaseComponentSmall = ({title, content }:BaseComponentSmallProps) => {

  const lgScreen: number = 4
  const mdScreen: number = 4

  return (
    <Grid item xs={12} sm={6} md={mdScreen} lg={lgScreen}>
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
          {title}
      </Typography> 
        {content}
      </Paper>
    </Grid>
  )
}

export default BaseComponentSmall