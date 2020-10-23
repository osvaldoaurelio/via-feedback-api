import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Feedback from '../models/Feedback';

interface Request {
  points_improve: string;
  points_keep: string;
  suggestion: string;
  final_feedback: string;
  feedback_sender_id: number;
  feedback_receiver_id: number;
}

class CreateFeedbackService {
  public async execute({
    points_improve,
    points_keep,
    suggestion,
    final_feedback,
    feedback_sender_id,
    feedback_receiver_id,
  }: Request): Promise<Feedback> {
    if (feedback_sender_id === feedback_receiver_id) {
      throw new AppError("You can't create a feedback to yourself");
    }

    const feedbacksRepository = getRepository(Feedback);
    const feedback = feedbacksRepository.create({
      points_improve,
      points_keep,
      suggestion,
      final_feedback,
      feedback_sender_id,
      feedback_receiver_id,
    });

    await feedbacksRepository.save(feedback);

    return feedback;
  }
}

export default CreateFeedbackService;
