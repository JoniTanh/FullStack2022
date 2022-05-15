import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <table>
    <tbody>
      <tr>
        <td style={{width:"55px"}}>{text}</td>
        <td>{value} {text === 'positive' ? "%" : ""}</td>
      </tr>
    </tbody>
  </table>
)

const Statistics = ({good, neutral, bad}) =>  {

  const feedbackCount = good + neutral + bad
  const average = (good - bad) / feedbackCount
  const positive = good / feedbackCount * 100

  return (
    <div>
    <h1>statistics</h1>
      {feedbackCount > 0 ?
        <>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={feedbackCount} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={positive} />
        </> :
        <>
          no feedback given
        </>
      }
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App