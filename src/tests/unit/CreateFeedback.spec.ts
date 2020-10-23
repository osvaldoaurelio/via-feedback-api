import FakeFeedbacksController from '../fakes/fakeFeedbacksController';

describe('Create Feedback', () => {
  it('should be able to create a new feedback', () => {
    const fakeFeedbacksController = new FakeFeedbacksController();

    const feedback = fakeFeedbacksController.create({
      points_improve: 'Lorem ipsum dolor sit amet.',
      points_keep: 'Lorem ipsum dolor sit amet.',
      suggestion: 'Lorem ipsum dolor sit amet.',
      final_feedback: 'Lorem ipsum dolor sit amet.',
      feedback_sender_id: 1,
      feedback_receiver_id: 2,
    });

    expect(feedback).toHaveProperty('id');
    expect(feedback.feedback_sender_id).toBe(1);
    expect(feedback.feedback_receiver_id).toBe(2);
    expect(feedback.viewed).toBe(false);
    expect(feedback.edited).toBe(false);
  });
});
