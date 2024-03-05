import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

export const MuiAccordion = () => {
  const [expand, setExpand] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpand(isExpanded ? panel : false);
  }
  return (
    <div>
      <Accordion expanded ={expand==='panel1'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}>
        <AccordionSummary id='Panel1-header' aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
          Accordion 1
        </AccordionSummary>
        <AccordionDetails><Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe aperiam delectus ad magni, corrupti ut aspernatur quas quod, quos in, repellendus eaque nam nostrum facilis nemo sit suscipit labore!</Typography></AccordionDetails>
      </Accordion>
      <Accordion expanded = {expand==='panel2'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}>
        <AccordionSummary id='Panel2-header' aria-controls="panel2-content" expandIcon={<ExpandMoreIcon />}>
          Accordion 2
        </AccordionSummary>
        <AccordionDetails><Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe aperiam delectus ad magni, corrupti ut aspernatur quas quod, quos in, repellendus eaque nam nostrum facilis nemo sit suscipit labore!</Typography></AccordionDetails>
      </Accordion>
      <Accordion expanded = {expand==='panel3'} onChange = {(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
        <AccordionSummary id='Panel3-header' aria-controls="panel3-content" expandIcon={<ExpandMoreIcon />}>
          Accordion 3
        </AccordionSummary>
        <AccordionDetails><Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe aperiam delectus ad magni, corrupti ut aspernatur quas quod, quos in, repellendus eaque nam nostrum facilis nemo sit suscipit labore!</Typography></AccordionDetails>
      </Accordion>
    </div>
  )
}
