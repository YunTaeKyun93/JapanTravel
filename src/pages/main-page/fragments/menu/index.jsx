import React from "react";

import DeparturePointAccordion from "../departure-point-accordion";
import AnimationDetailsAccordion from "../animation-details-accordion";
import AnimationsAccordion from "../animations-accordion";

// const PersonalDataAccordion = ({ logic }) => {
//   return (
//     <Accordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel4bh-content"
//         id="panel4bh-header"
//       >
//         <Typography sx={{ width: "33%", flexShrink: 0 }}>
//           Personal data
//         </Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography>
//           Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
//           amet egestas eros, vitae egestas augue. Duis vel est augue.
//         </Typography>
//       </AccordionDetails>
//     </Accordion>
//   );
// };

const Menu = ({ logic }) => {
  return (
    <div>
      <DeparturePointAccordion logic={logic} />
      <AnimationsAccordion logic={logic} />
      <AnimationDetailsAccordion logic={logic} />
      {/* <PersonalDataAccordion logic={logic} /> */}
    </div>
  );
};

export default Menu;
