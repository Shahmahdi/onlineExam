import React from 'react'
import { NavbarTop } from '../components/common/Navbar'
import { Sidebar } from '../components/common/Sidebar'

export const ExamPage = () => {
  return (
    <div className="cf">
      <div className="fl w-100">
        <NavbarTop />
        <div className="fl w-100 bg-tigrowLightGray-1" style={{ marginTop: '50px' }}>
          <div className="flex w-100">
            <div className="db">
              <Sidebar />
            </div>
            <div className="fl w-100 pl5 pl11-l pl6-m bg-tigrow">
              <div className="cf" style={{ height: 'calc(100vh - 50px)' }}>
                Exam page
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
