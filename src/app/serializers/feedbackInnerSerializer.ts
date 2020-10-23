import Feedback from '../models/Feedback';

interface IFeedbackInnerSerializer {
  id: number;
  points_improve: string;
  points_keep: string;
  suggestion: string;
  final_feedback: string;
  viewed: boolean;
  edited: boolean;
}

export default {
  render(feedback: Feedback): IFeedbackInnerSerializer {
    return {
      id: feedback.id,
      points_improve: feedback.points_improve,
      points_keep: feedback.points_keep,
      suggestion: feedback.suggestion,
      final_feedback: feedback.final_feedback,
      viewed: feedback.viewed,
      edited: feedback.edited,
    };
  },
  renderMany(feedbacks: Feedback[]): IFeedbackInnerSerializer[] {
    return feedbacks?.map(feedback => this.render(feedback));
  },
};
