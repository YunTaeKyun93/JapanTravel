import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AnimeList from "./../anime-list/index";

const AnimationsAccordion = ({ logic }) => {
  return (
    <Accordion
      expanded={logic.isAnimationsOpened}
      onChange={logic.handleIsAnimationsOpenedChange}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>애니메이션</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <AnimeList logic={logic} />
      </AccordionDetails>
    </Accordion>
  );
};

export default AnimationsAccordion;
