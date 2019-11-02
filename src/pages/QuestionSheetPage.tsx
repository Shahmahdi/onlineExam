import React, { useState } from 'react'
import { NavbarTop } from '../components/common/Navbar'
import { Button, RadioGroup, Radio, Popover, Position, Menu, MenuItem, Intent } from '@blueprintjs/core'
import { isEqual } from 'lodash';
import Countdown from 'react-countdown-now';

const demoQuestionAnswerData = [
  {
    question: '1. Bangladeser Rajdhani koi ?',
    options: ['dhaka', 'rajshahi', 'barisal', 'jani na'],
    correctAnswer: 'dhaka',
    selectedAnswer: ''
  },
  {
    question: '1. Bangladeser Rajdhani koi ?',
    options: ['dhaka', 'rajshahi', 'barisal', 'jani na'],
    correctAnswer: 'dhaka',
    selectedAnswer: ''
  },
  {
    question: '1. Bangladeser Rajdhani koi ?',
    options: ['dhaka', 'rajshahi', 'barisal', 'jani na'],
    correctAnswer: 'dhaka',
    selectedAnswer: ''
  }
]

interface IDemoQuestionAnswerData {
  question: string;
  options: string[];
  correctAnswer: string;
  selectedAnswer: string;
}

export const QuestionSheetPage = (props: {
  examListView: { view: number, title: string }
  setExamListView: ({ }: { view: number, title: string }) => void;
}) => {

  const [questionSet, setQuestionSet] = useState(demoQuestionAnswerData as IDemoQuestionAnswerData[]);
  const [examFinish, setExamFinish] = useState(false);
  const [correctNumber, setCorrectNumber] = useState(0);

  const onChange = (value: string, index: number) => {
    setQuestionSet(
      questionSet.map((q: IDemoQuestionAnswerData, i: number) => {
        if (i === index) {
          let newValue = q;
          newValue.selectedAnswer = value;
          return newValue;
        } else {
          return q;
        }
      }) as any);
  }

  const calculateResult = () => {
    let number = 0;
    demoQuestionAnswerData.map(q => {
      if (isEqual(q.correctAnswer, q.selectedAnswer)) {
        number = number + 1;
      }
    });
    setCorrectNumber(number);
    setExamFinish(true);
  }

  return (
    <div className="cf">
      <div className="fl w-100">
        <NavbarTop backgroundColor="yellow" />
        <div className="fixed mt5 h3 w-100">
          <section>
            <article className="b--light-blue ba bg-lightest-blue br2 center">
              <div className="dt--fixed-ns dt-ns pa3 w-100">
                {examFinish === true ?
                  <div className="dtc-ns tl v-mid">
                    <Button
                      className="w-20 fw5"
                      style={{ borderRadius: '25px' }}
                      text="Back"
                      onClick={(e: any) => props.setExamListView({ view: 0, title: '' })}
                    />
                  </div> : undefined}
                <div className="dtc-ns tc v-mid">
                  <div className="h-100 v-mid">
                    <h2 className="fw4 blue mt0 mb3">{props.examListView.title}</h2>
                  </div>
                </div>
                <div className="dtc-ns f3 tr v-mid">
                  {examFinish === true ?
                    <p className="dib h-100 mb0 pr4 v-mid">
                      {`Result: ${correctNumber} out of ${demoQuestionAnswerData.length}`}
                    </p>
                    :
                    <>
                      <p className="dib h-100 mb0 pr4 v-mid">
                        <Countdown date={Date.now() + 600000} />
                      </p>
                      <Popover
                        modifiers={
                          {
                            preventOverflow: {
                              enabled: true,
                              boundariesElement: 'viewport'
                            }
                          }
                        }
                        className="fr"
                        target={
                          <Button
                            className="dib w-100 mr3 mr4-ns fw5"
                            style={{ borderRadius: '25px' }}
                            text="Submit"
                          />
                        }

                        position={Position.RIGHT_TOP}
                        content={
                          <Menu>
                            <MenuItem
                              icon="confirm"
                              text="Confirm"
                              intent={Intent.SUCCESS}
                              className="pt-minimal"
                              onClick={(e: any) => calculateResult()}
                            />
                            <MenuItem
                              icon="cross"
                              text="Cancel"
                              intent={Intent.PRIMARY}
                              className="pt-minimal pt-popover-dismiss"
                            />
                          </Menu>
                        }
                      />
                    </>
                  }
                </div>
              </div>
            </article>
          </section>
        </div>
        <div style={{ marginTop: '132px' }}>
          <div className="flex justify-center pt4">
            <div className="w-75 f4">
              {demoQuestionAnswerData.map((d, index) => (
                <RadioGroup
                  className="mb4"
                  label={d.question}
                  onChange={e => onChange(e.currentTarget.value, index)}
                  selectedValue={`${questionSet[index].selectedAnswer}`}
                >
                  {console.log(questionSet)}
                  {d.options.map(o => (
                    <Radio label={o} value={o} />
                  ))}
                </RadioGroup>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
