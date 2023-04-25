import { Component } from 'react';
import {
  FeedbackOptions,
  Statistics,
  Section,
  Notification,
} from './Feedback';
import { SectionStyled, SectionPoll } from './Layout';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const { state } = this;
    const feedbackType = e.target.name;

    this.setState(() => ({
      [feedbackType]: state[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const feedbackPercentage = (100 / this.countTotalFeedback()) * good;
    return Math.round(feedbackPercentage) || 0;
  };

  render() {
    const total = this.countTotalFeedback();

    return (
      <SectionStyled>
        <SectionPoll>
          <Section
            title={'Please leave feedback'}>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.leaveFeedback}
            />
          </Section>
        </SectionPoll>

        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              feedbackTypes={this.state}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </SectionStyled>
    );
  }
}