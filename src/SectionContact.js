import React from 'react';
import Scroll from 'react-scroll';
const Helpers = Scroll.Helpers;


import GrApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import Table from './Table';


const style = {
   margin: 12,
};

const SectionContact= () => (
    <div style={{ paddingTop: '40px'}}>
        <Divider />
        <GrApp> 
            <Heading style={{paddingTop: '20px'}}>Contact Information</Heading>
            <Paragraph>
            If you have any questions or suggestions, please let us know. We would be always glad to help you :) Here is various ways that you can contact us.
            If you or the taxi driver needs to talk to someone in Thai langauge, please contact Kukkik first:
            </Paragraph>
        </GrApp>

        <Table />
        

    </div>
)

export default Helpers.Element(SectionContact);