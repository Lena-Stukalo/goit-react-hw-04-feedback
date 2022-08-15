import { useState, useEffect } from 'react';
import FeedbackButton from 'components/feedbackButton/FeedbackButton';
import Statistics from 'components/statistics/Statistics';
import Section from './section/Sectoin';

const reactions = ['good', 'netrual', 'bad'];

export default function App() {
  const [good, setGood] = useState(0);
  const [netrual, setNetrual] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = state => {
    switch (state) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'netrual':
        setNetrual(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + netrual + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + netrual + bad)) * 100);
  };

  return (
    <div>
      <Section title="Plese leave youf feedback">
        <FeedbackButton reactions={reactions} onButtonClick={onButtonClick} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          netrual={netrual}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}
