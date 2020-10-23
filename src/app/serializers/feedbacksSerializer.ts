import Feedback from '../models/Feedback';

import UserInnerSerializer from './userInnerSerializer';

interface IUserInnerSerializer {
  id: number;
  name: string;
  email: string;
}

interface IFeedbackSerializer {
  id: number;
  points_improve: string;
  points_keep: string;
  suggestion: string;
  final_feedback: string;
  feedback_sender: IUserInnerSerializer;
  feedback_receiver: IUserInnerSerializer;
  viewed: boolean;
  edited: boolean;
}

export default {
  render(feedback: Feedback): IFeedbackSerializer {
    return {
      id: feedback.id,
      points_improve: feedback.points_improve,
      points_keep: feedback.points_keep,
      suggestion: feedback.suggestion,
      final_feedback: feedback.final_feedback,
      feedback_sender: UserInnerSerializer.render(feedback.feedback_sender),
      feedback_receiver: UserInnerSerializer.render(feedback.feedback_receiver),
      viewed: feedback.viewed,
      edited: feedback.edited,
    };
  },
  renderMany(feedbacks: Feedback[]): IFeedbackSerializer[] {
    return feedbacks?.map(feedback => this.render(feedback));
  },
};
