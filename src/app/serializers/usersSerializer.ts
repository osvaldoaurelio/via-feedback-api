import User from '../models/User';

import feedbackInnerSerializer from './feedbackInnerSerializer';

interface IFeedbackInnerSerializer {
  id: number;
  points_improve: string;
  points_keep: string;
  suggestion: string;
  final_feedback: string;
  viewed: boolean;
  edited: boolean;
}

interface UsersSerializer {
  id: number;
  name: string;
  email: string;
  feedback_senders: IFeedbackInnerSerializer[];
  feedback_receivers: IFeedbackInnerSerializer[];
}

export default {
  render(user: User): UsersSerializer {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      feedback_senders: feedbackInnerSerializer.renderMany(
        user.feedback_senders,
      ),
      feedback_receivers: feedbackInnerSerializer.renderMany(
        user.feedback_receivers,
      ),
    };
  },
  renderMany(users: User[]): UsersSerializer[] {
    return users?.map(user => this.render(user));
  },
};
