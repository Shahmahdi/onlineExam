import React from 'react'
import { NavbarTop } from '../components/common/Navbar'
import { Button, Card, Elevation } from '@blueprintjs/core'
import { Link } from 'react-router-dom'
// import { Sidebar } from '../components/common/Sidebar'

export const LandingPage = () => {
  return (
    <div className="cf">
      <div className="fl w-100">
        <NavbarTop backgroundColor="white" />
        <div id="home" className="vw-100 vh-100" style={{ backgroundColor: '#40c5f4' }}>
          <div className="flex h-100 items-center justify-center">
            <div>
              <p className="mb0 f1 white fw1 tc" style={{ letterSpacing: '10px' }}>Prepare for</p>
              <p className="mb0 b f1 white tc" style={{ letterSpacing: '10px' }}>Your Exams Here</p>
              <div className="tc pt3">
                <Link to="/exam">
                  <Button
                    className="w-30 mr3 fw5"
                    style={{ borderRadius: '25px' }}
                    text="E-Exam"
                    large={true}
                  />
                </Link>
                <Button
                  className="w-30 fw5"
                  style={{ borderRadius: '25px' }}
                  text="Result"
                  large={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="aboutUs" className="vw-100 vh-100" style={{ backgroundColor: 'yellow' }}>
          <div className="flex h-100 items-center justify-center">
            <div className="flex items-center w-70">
              <div className="fl w-40 tc f1">
                <p className="mb0 fw1">About</p>
                <p className="mb0 b ">US</p>
              </div>
              <div className="fl w-60 f4">
                Simply put, without the jargons, Magnito
                Digital is the largest digital agency of
                Bangladesh with a team of more than 70
                people. We are famous for our unconventional
                company culture. Our experience and massive setup
                allows us to deliver services at unparalleled
                scale. We have built leading brands in the digital
                space and are the go-to-agency for managing y
                our digital products & services. Being one of
                the most awarded digital agencies of Bangladesh,
                Magnito Digital won Gold to become the ‘Campaign
                Asia-Pacific : Digital Agency of the Year 2015’ in the ‘
                Rest of South Asia’ category.
              </div>
            </div>
          </div>
        </div>
        <div id="courses" className="vw-100 vh-100">
          <div className="flex h-100 items-center justify-center">
            <div className="flex items-center w-80" style={{ height: '65%' }}>
              <div className="f1 fl flex flex-column h-100 justify-center tc w-25">
                <p className="mb0 fw1">OUR</p>
                <p className="mb0 b ">COURSES</p>
              </div>
              <div className="fl flex h-100 w-75">
                <Card className="fl flex flex-column w-third" interactive={true} elevation={Elevation.TWO}>
                  <p className="f1 flex flex-auto items-center justify-center mb0">Bangla</p>
                  <Button
                    className="dib w-100 mr3 mr4-ns fw5"
                    style={{ borderRadius: '25px' }}
                    text="View more"
                  />
                </Card>
                <Card className="fl flex flex-column w-third" interactive={true} elevation={Elevation.TWO}>
                  <p className="f1 flex flex-auto items-center justify-center mb0">English</p>
                  <Button
                    className="dib w-100 mr3 mr4-ns fw5"
                    style={{ borderRadius: '25px' }}
                    text="View more"
                  />
                </Card>
                <Card className="fl flex flex-column w-third" interactive={true} elevation={Elevation.TWO}>
                  <p className="f1 flex flex-auto items-center justify-center mb0">Biology</p>
                  <Button
                    className="dib w-100 mr3 mr4-ns fw5"
                    style={{ borderRadius: '25px' }}
                    text="View more"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="h3" style={{ backgroundColor: '#40c5f4' }}>
          <div className="f4 flex h-100 items-center justify-center white">
            2019 Redx Solutions. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}
