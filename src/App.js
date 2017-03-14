import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './AppBar'
import Menu from './Menu'

import './App.css';

import SectionRooms from './SectionRooms'
import SectionLocation from './SectionLocation'
import SectionVideo from './SectionVideo'
import SectionAirport from './SectionAirport'

import '../node_modules/grommet/grommet.min.css';
import GrApp from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';



const App = () => (
  <MuiThemeProvider>
    <div style={{maxWidth: '800px', margin: 'auto', padding: '5px'}}>

      <AppBar />

      <GrApp>
        <Heading>
          Holly's Hostel
        </Heading>
        <Paragraph margin="medium">
          Welcome to Holly's Hostel! You can find various information regarding locations and navigation in bangkok in here.
        </Paragraph>
      </GrApp>

      <Menu />

      <SectionRooms name="MyRooms" />
      <SectionLocation name="MyLocation" />
      <SectionVideo name="MyVideo" />
      <SectionAirport name="MyAirport" />
    
      
    </div>
  </MuiThemeProvider>
);

export default App;