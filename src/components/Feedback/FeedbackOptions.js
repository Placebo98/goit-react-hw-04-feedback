import { FeedbackBtn } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ goodReview, neutralReview, badReview }) => {
  return (
    <div>
      <FeedbackBtn type="button" onClick={() => goodReview()}>
        Good
      </FeedbackBtn>
      <FeedbackBtn type="button" onClick={() => neutralReview()}>
        Neutral
      </FeedbackBtn>
      <FeedbackBtn type="button" onClick={() => badReview()}>
        Bad
      </FeedbackBtn>
    </div>
  );
};
