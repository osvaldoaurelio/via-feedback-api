import Feedback from '../../app/models/Feedback';
import ICreateFeedbackDTO from '../../dtos/ICreateFeedbackDTO';

class FeedbacksController {
  private feedbacks: Feedback[] = [];

  public create({
    points_improve,
    points_keep,
    suggestion,
    final_feedback,
    feedback_sender_id,
    feedback_receiver_id,
  }: ICreateFeedbackDTO): Feedback {
    const feedback = new Feedback();

    Object.assign(feedback, {
      id: 1,
      points_improve,
      points_keep,
      suggestion,
      final_feedback,
      feedback_sender_id,
      feedback_receiver_id,
      viewed: false,
      edited: false,
    });

    this.feedbacks.push(feedback);

    return feedback;
  }
}

export default FeedbacksController;
