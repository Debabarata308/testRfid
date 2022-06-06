import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';
import IdCard from './id_card/IdCard';

const App = () => (
  <div>
    <div className='row'>
      <div className='col=xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 '></div>
      <div className='col=xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
        <Container style={{ marginTop: 90 }}>
          <IdCard />
        </Container>
      </div>
      <div className='col=xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'></div>
    </div>
  </div>
);

export default App;
