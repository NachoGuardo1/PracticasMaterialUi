import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState("" || false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="expand-accordion1"
          aria-controls="expand-accordion1"
          expandIcon={<ExpandMoreIcon />}
          expanded={expanded === "panelUno"}
          onChange={(e, isExpanded) => handleChange(isExpanded, "panelUno")}
        >
          Accordion
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et fuga quos
          aut voluptatem pariatur debitis fugiat, quo alias tempore totam
          eveniet dicta, molestias quibusdam quis animi rerum architecto
          officiis consequuntur.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="expand-accordion2"
          aria-controls="expand-accordion2"
          expandIcon={<ExpandMoreIcon />}
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et fuga quos
          aut voluptatem pariatur debitis fugiat, quo alias tempore totam
          eveniet dicta, molestias quibusdam quis animi rerum architecto
          officiis consequuntur.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="expand-accordion3"
          aria-controls="expand-accordion3"
          expandIcon={<ExpandMoreIcon />}
        >
          Accordion 3
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et fuga quos
          aut voluptatem pariatur debitis fugiat, quo alias tempore totam
          eveniet dicta, molestias quibusdam quis animi rerum architecto
          officiis consequuntur.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
