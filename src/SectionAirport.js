import React from 'react';
import Scroll from 'react-scroll';
const Helpers = Scroll.Helpers;


import GrApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TabAirport from './TabAirport'

const style = {
   margin: 12,
};

const SectionAirport= () => (
    <div style={{ paddingTop: '40px'}}>
        <Divider />
        <GrApp> 
            <Heading style={{paddingTop: '20px'}}>Airports</Heading>
            <Paragraph>
            Bangkok has <b>two</b> international airports. Please make sure 
            you choose the correct one:
            </Paragraph>
        </GrApp>

        <TabAirport />

    </div>
)

export default Helpers.Element(SectionAirport);