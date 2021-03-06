import React from 'react';
import Scroll from 'react-scroll';
const Helpers = Scroll.Helpers;


import GrApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import Title from 'grommet/components/Title';


const style = {
   margin: 12,
};

const SectionAttraction= () => (
    <div style={{ paddingTop: '40px'}}>
        <Divider />
        <GrApp> 
            <Heading style={{paddingTop: '20px'}}>Tourist Attractions</Heading>
            <Paragraph>
            There are lots of places to visit in Bangkok. Whether you like
            temples, bars, clubs, shopping malls, etc there is always a place
            to go. Here are some of the most famous ones:
            </Paragraph>

            <Title>Temples and Khao San Road</Title>
            <Paragraph>Grand Palace, Wat Pho, Wat Arun, Wat Saket temples and
                also Khao San Road are
                all located near each other. There are many ways to get there.
                The cheapest way is to take bus Number 2 which goes directly
                to that area. The bus fare is around 10 Baht.
                
                Another easy way is to take BTS to Sapahn Taksin BTS station
                and from there take boat to Grand Palace.
                </Paragraph>
            
            <Title>Sukhmvit Area Bars and Clubs</Title>
            <Paragraph>Thong Lor and Sukhumvit bars are easy to access
                by BTS and are only a few BTS stations from our place.
            </Paragraph>

            <Title>Bangkok's Ancient City</Title>
            <Paragraph>You can go to Bearing BTS station and from there
                take bus to Bangkok's ancient city.
            </Paragraph>

            <Title>Famous Shopping Malls</Title>
            <Paragraph> You can go to Siam Paragon and Central World by BTS
            </Paragraph>

            <Title>Chatuchak and JJ Weekend Markets</Title>
            <Paragraph> You can take BTS to Chatuchak BTS station and from there walk to the market.
            </Paragraph>


        </GrApp>

        

    </div>
)

export default Helpers.Element(SectionAttraction);