import { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from 'components/Notification';

export const FeedbackApp = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeeback = () => {
    setGood(prevState => prevState + 1);
  };
  const neutralFeedback = () => {
    setNeutral(prevState => prevState + 1);
  };
  const badFeedback = () => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return ((good / totalFeedback) * 100).toFixed(2);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          goodReview={goodFeeback}
          neutralReview={neutralFeedback}
          badReview={badFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
