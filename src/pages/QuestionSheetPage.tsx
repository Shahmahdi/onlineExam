import React from 'react'
import { NavbarTop } from '../components/common/Navbar'

export const QuestionSheetPage = () => {
  return (
    <div className="cf">
      <div className="fl w-100">
        <NavbarTop backgroundColor="yello" />
        <div className="vw-100" style={{ marginTop: '70px' }}>
          <div className="flex h-100 items-center justify-center">
            <div>
              question list
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}
