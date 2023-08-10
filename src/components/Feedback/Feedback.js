import { Component } from 'react';

export class FeedbackApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = event => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  addNeutralFeedback = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  addBadFeedback = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return ((this.state.good / totalFeedback) * 100).toFixed(2);
  };

  render() {
    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          <button onClick={this.addGoodFeedback}>Good</button>
          <button onClick={this.addNeutralFeedback}>Neutral</button>
          <button onClick={this.addBadFeedback}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}
