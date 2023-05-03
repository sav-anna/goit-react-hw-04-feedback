import FeedbackOptions from './FeedbackOptions/FeedbackOption';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Number(good + neutral + bad);
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

  return (
    <>
      <Section title="please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={options}
        ></FeedbackOptions>
      </Section>

      <Section title="statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback !'}></Notification>
        )}
      </Section>
    </>
  );
}
