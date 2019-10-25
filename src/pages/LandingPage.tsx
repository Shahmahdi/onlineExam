import React from 'react'
import { NavbarTop } from '../components/common/Navbar'
import { Button } from '@blueprintjs/core'
// import { Sidebar } from '../components/common/Sidebar'

export const LandingPage = () => {
  return (
    <div className="cf">
      <div className="fl w-100">
        <NavbarTop />
        {/* <div className="fl w-100 bg-tigrowLightGray-1" style={{ marginTop: '50px' }}>
          <div className="flex w-100">
            <div className="db">
              <Sidebar />
            </div>
            <div className="fl w-100 pl5 pl11-l pl6-m bg-tigrow">
              <div className="cf" style={{ height: 'calc(100vh - 50px)' }}>
                Landing page
              </div>
            </div>
          </div>
        </div> */}
        <div className="vw-100 vh-100" style={{ backgroundColor: '#40c5f4' }}>
          <div className="flex h-100 items-center justify-center">
            <div>
              <p className="mb0 f1 white fw1 tc" style={{ letterSpacing: '10px' }}>Prepare for</p>
              <p className="mb0 b f1 white tc" style={{ letterSpacing: '10px' }}>Your Exams Here</p>
              <div className="tc pt3">
                <Button
                  className="w-30 mr3 fw5"
                  style={{ borderRadius: '25px' }}
                  text="E-Exam"
                  large={true}
                />
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
        <div className="vw-100 vh-100" style={{ backgroundColor: 'yellow' }}>
          <div className="flex h-100 items-center justify-center">
            <div className="flex items-center w-70">
              <div className="fl w-40 tc f1">
                <p className="mb0 fw1">About</p>
                <p className="mb0 b ">US</p>
              </div>
              <div className="fl w-60 f3">
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
      </div>
    </div>
  )
}
