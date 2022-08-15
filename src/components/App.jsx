import { Component } from 'react';
import FeedbackButton from 'components/feedbackButton/FeedbackButton';
import Statistics from 'components/statistics/Statistics';
import Section from './section/Sectoin';

const reactions = ['good', 'netrual', 'bad'];

export class App extends Component {
  state = {
    good: 0,
    netrual: 0,
    bad: 0,
  };
  onButtonClick = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, netrual, bad } = this.state;
    return good + netrual + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, netrual, bad } = this.state;
    return Math.round((good / (good + netrual + bad)) * 100);
  };
  render() {
    const { good, bad, netrual } = this.state;
    return (
      <div>
        <Section title="Plese leave youf feedback">
          <FeedbackButton
            reactions={reactions}
            onButtonClick={this.onButtonClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            netrual={netrual}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
