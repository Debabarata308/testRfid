import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import logo from '../img/idcard.png';
import image from '../img/icard_pea.png';
import QRCode from "react-qr-code";
import "./IdCard.css";
import { useBarcode } from 'next-barcode';

function IdCard() {
  let barcodeValue = "STUDENT ID: A-1113";
  let qrCodeValue = "Name: LALLU KUMAR DESIGNATION: HELPER BLOOD GROUP: O+ ISSUE DATE: 04-06-2020 VALID UPTO: 31-10-2020 DOB: 01-01-1986 SAFTY INDUCTED: A-1113"
  const { inputRef } = useBarcode({
    value: barcodeValue,
    options: {
      // background: '#ccffff',
      displayValue: false,
      width: 1,
      format:"CODE128",
      height: 50,
      margin: 0
    }
  });
  return (
    <div>
      <Card className='cardS'>
        <Card.Body>
          <Card.Text>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-3'>
                    <img src={logo} alt="alt" style={{ height: 60 }} />
                  </div>
                  <div className='col-9'>
                    <h5><span>YOUR UNIFIED</span><br /><span>SCHOOL DISTRICT</span></h5>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-0 col-xs-0 col-sm-0'>
                  </div>
                  <div className='col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-xs-10 col-sm-10 m-text-center'>
                    <span style={{ fontSize: 22 }}>2019 - 2020</span>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 m-text-center'>
                <img src={image} alt="alt" style={{ height: 110 }} />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 text-right'>
                <div className='row'>
                  <div className='col-lg-12 mt-2 m-text-center'>
                    {/* <img src={qrCode} alt="alt" style={{ height: 100 }} /> */}
                    <QRCode value={qrCodeValue} size={100}/>
                  </div>
                </div>
              </div>
              <div className='col-lg-8 text-right'>
                <div className='row mt-2 text-right mr-2'>
                  <div className='col m-text-center'>
                    <p className='mb-0 pb-0'>LALLU KUMAR</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col mr-0 ml-0 m-text-center'>
                    {/* <Barcode margin={0} value={barcodeValue} format="EAN-2" width={0.9} height={50} displayValue={false} /><br /> */}
                    <svg ref={inputRef}/>
                  </div>
                </div>
                <div className='row text-right'>
                  <div className='col m-text-center'>
                    <span className='mb-0 pb-0 mr-2 mt-0' style={{ fontSize: 13 }}>STUDENT ID- A-1113</span>
                  </div>
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default IdCard;