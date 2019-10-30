import React from 'react'
import { NavbarTop } from '../components/common/Navbar'
import { Button, RadioGroup, Radio } from '@blueprintjs/core'

export const QuestionSheetPage = () => {
  return (
    <div className="cf">
      <div className="fl w-100">
        <NavbarTop backgroundColor="yellow" />
        <div className="fixed mt5 h3 w-100">
          <section>
            <article className="b--light-blue ba bg-lightest-blue br2 center">
              <div className="dt--fixed-ns dt-ns pa3 w-100">
                <div className="dtc-ns tc v-mid">
                  <div className="h-100 v-mid">
                    <h2 className="fw4 blue mt0 mb3">Bangla 1st Paper</h2>
                  </div>
                </div>
                <div className="dtc-ns f3 tr v-mid">
                  <p className="dib h-100 mb0 pr4 v-mid">00:45:00</p>
                  <Button
                    className="dib w-10 mr3 mr4-ns fw5"
                    style={{ borderRadius: '25px' }}
                    text="Submit"
                  />
                </div>
              </div>
            </article>
          </section>
        </div>
        <div style={{ marginTop: '132px' }}>
          {/* <div className="flex h-100 items-center justify-center"> */}

          <div className="flex justify-center pt4">
            <div className="w-75 f4">
              <RadioGroup
                className="mb4"
                label="1. Bangladeser Rajdhani koi ?"
                onChange={e => console.log(e)}
                selectedValue={"one"}
              >
                <Radio label="jani na" value="one" />
                <Radio label="jani na" value="two" />
                <Radio label="jani na" value="three" />
                <Radio label="jani na" value="three" />
              </RadioGroup>
              <RadioGroup
                className="mb4"
                label="1. Bangladeser Rajdhani koi ?"
                onChange={e => console.log(e)}
                selectedValue={"one"}
              >
                <Radio label="jani na" value="one" />
                <Radio label="jani na" value="two" />
                <Radio label="jani na" value="three" />
                <Radio label="jani na" value="three" />
              </RadioGroup>
              <RadioGroup
                className="mb4"
                label="1. Bangladeser Rajdhani koi ?"
                onChange={e => console.log(e)}
                selectedValue={"one"}
              >
                <Radio label="jani na" value="one" />
                <Radio label="jani na" value="two" />
                <Radio label="jani na" value="three" />
                <Radio label="jani na" value="three" />
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
