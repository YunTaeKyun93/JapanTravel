import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AirportList from "../airport-list";
const DeparturePointAccordion = ({ logic }) => {
  return (
    <Accordion
      expanded={logic.isDeparturePointOpened}
      onChange={logic.handleIsDeparturePointOpenedChange}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          출발 지역 선택
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <AirportList logic={logic} />
      </AccordionDetails>
    </Accordion>
  );
};

export default DeparturePointAccordion;
