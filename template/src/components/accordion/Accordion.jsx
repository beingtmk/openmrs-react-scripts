import React from 'react';

import { Accordion } from '@openmrs/react-components';

const AccordionComponent = props => {
  return (
    <div>
      <Accordion title="HIV"> 
        Human Immuno Deficiency Virus
      </Accordion>
      <Accordion title="Polio"> 
        Caused by a Deadly Virus
      </Accordion>
    </div>

  );
};

export default AccordionComponent;
