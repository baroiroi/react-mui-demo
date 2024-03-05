import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const MuiAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary id='Panel1-header' aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
          Accordion 1
        </AccordionSummary>
        <AccordionDetails><Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe aperiam delectus ad magni, corrupti ut aspernatur quas quod, quos in, repellendus eaque nam nostrum facilis nemo sit suscipit labore!</Typography></AccordionDetails>
      </Accordion>
    </div>
  )
}
