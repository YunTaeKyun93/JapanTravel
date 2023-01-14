import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AnimeInfo from "./../anime-info";

const AnimationDetailsAccordion = ({ logic }) => {
  return (
    <Accordion
      expanded={logic.isAnimationDetailsOpened}
      onChange={logic.handleIsAnimationDetailsOpenedChange}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
      >
        <Typography sx={{ width: "40%", flexShrink: 0 }}>
          애니메이션 정보
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <AnimeInfo logic={logic} />
      </AccordionDetails>
    </Accordion>
  );
};

export default AnimationDetailsAccordion;
