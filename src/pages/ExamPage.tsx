import React, { useState } from 'react'
import { NavbarTop } from '../components/common/Navbar'
import { Sidebar } from '../components/common/Sidebar'
import { Tabs, Tab, Card, Button } from '@blueprintjs/core'
import { Link } from 'react-router-dom'
import { QuestionSheetPage } from './QuestionSheetPage'

export const ExamPage = () => {

  const [examListView, setExamListView] = useState({ view: 0, title: '' });

  return (
    examListView.view === 0 ?
      <div className="cf">
        <div className="fl w-100">
          <NavbarTop backgroundColor="yellow" />
          <div className="flex justify-center mt6">
            <div className="w-80">
              <Tabs
                id="subjectList"
                vertical={true}
                renderActiveTabPanelOnly={true}
              >
                <Tab
                  id="banglafirst"
                  title="Bangla 1st Paper"
                  panelClassName="w-100"
                  style={{ outline: '0' }}
                  panel={
                    <Card>
                      <h5>Subject: Bangla 1st Paper</h5>
                      <p>Syllabus: Chap 1 & 2</p>
                      <p>Questions: 60 marks</p>
                      <p>Time: 60 Minutes</p>
                      {/* <Link to="/questionsheet"> */}
                      <Button
                        style={{ backgroundColor: 'yellow' }}
                        onClick={(e: any) => setExamListView({ view: 1, title: 'Bangla 1st Paper' })}
                      >
                        Start
                    </Button>
                      {/* </Link> */}
                    </Card>
                  }
                />
                <Tab
                  id="banglaSecond"
                  title="Bangla 2nd Paper"
                  panelClassName="w-100"
                  style={{ outline: '0' }}
                  panel={
                    <Card>
                      <h5>Subject: Bangla 2nd Paper</h5>
                      <p>Syllabus: Chap 1 & 2</p>
                      <p>Questions: 60 marks</p>
                      <p>Time: 60 Minutes</p>
                      <Button
                        style={{ backgroundColor: 'yellow' }}
                        onClick={(e: any) => setExamListView({ view: 1, title: 'Bangla 2nd Paper' })}
                      >
                        Start
                  </Button>
                    </Card>
                  }
                />
                <Tab
                  id="biology"
                  title="Biology"
                  panelClassName="w-100"
                  style={{ outline: '0' }}
                  panel={
                    <Card>
                      <h5>Subject: Biology</h5>
                      <p>Syllabus: Chap 1 & 2</p>
                      <p>Questions: 60 marks</p>
                      <p>Time: 60 Minutes</p>
                      <Button
                        style={{ backgroundColor: 'yellow' }}
                        onClick={(e: any) => setExamListView({ view: 1, title: 'Biology' })}
                      >
                        Start
                  </Button>
                    </Card>
                  }
                />
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      : 
      <QuestionSheetPage 
        examListView={examListView}
        setExamListView={setExamListView} 
      />
  )
}
