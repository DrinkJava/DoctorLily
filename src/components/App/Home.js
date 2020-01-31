import React from 'react';
import logo from '../../images/logo.svg';
import paragraph from '../../images/media-paragraph.png';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ChatWidget from '../ChatWidget/ChatWidget';
import HealthCard from '../HealthCard';
import { Grid, Image } from 'semantic-ui-react';
import FHIRClientComponent from '../FHIRClientComponent';

function Home() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

      <Grid columns='three' divided>
        <Grid.Row>
          <Grid.Column>
            <FHIRClientComponent>
              <HealthCard/>
            </FHIRClientComponent>
          </Grid.Column>
          <Grid.Column>
            <Image src={paragraph} />
          </Grid.Column>
          <Grid.Column>
            <Image src={paragraph} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image src={paragraph} />
          </Grid.Column>
          <Grid.Column>
            <Image src={paragraph} />
          </Grid.Column>
          <Grid.Column>
            <Image src={paragraph} />
          </Grid.Column>
        </Grid.Row>

      </Grid>
      <ChatWidget/>
    </div>
  );
}

export default Home;

      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      // </header>
