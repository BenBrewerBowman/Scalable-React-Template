import React, { Component } from 'react';
import { 
  Body,
  Footer,
  Header 
} from 'app/components';


class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100%'}}>
        <div style={{flex: 1, backgroundColor: '#222'}} >
          <Header />
          <Body />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
