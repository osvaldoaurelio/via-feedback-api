import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Feedback from '../models/Feedback';
import feedbackSerializer from '../serializers/feedbacksSerializer';
import CreateFeedbackService from '../services/CreateFeedbackService';

class FeedbacksController {
  public async sent(request: Request, response: Response): Promise<Response> {
    const { id: feedback_sender_id } = request.user;

    const feedbacksRepository = getRepository(Feedback);
    const feedbacks = await feedbacksRepository.find({
      where: [{ feedback_sender_id }],
      relations: ['feedback_sender', 'feedback_receiver'],
      order: { updated_at: 'DESC' },
    });

    return response.json({
      feedbacks: feedbackSerializer.renderMany(feedbacks),
    });
  }

  public async received(req: Request, response: Response): Promise<Response> {
    const { id: feedback_receiver_id } = req.user;

    const feedbacksRepository = getRepository(Feedback);
    const feedbacks = await feedbacksRepository.find({
      where: [{ feedback_receiver_id }],
      relations: ['feedback_sender', 'feedback_receiver'],
      order: { viewed: 'ASC', updated_at: 'DESC' },
    });

    return response.json({
      feedbacks: feedbackSerializer.renderMany(feedbacks),
    });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id: userID } = request.user;

    const feedbacksRepository = getRepository(Feedback);
    try {
      const feedback = await feedbacksRepository.findOneOrFail({
        where: [
          { feedback_sender_id: userID, id },
          { feedback_receiver_id: userID, id },
        ],
        relations: ['feedback_sender', 'feedback_receiver'],
      });

      return response.json({ feedback: feedbackSerializer.render(feedback) });
    } catch {
      throw new AppError(
        "Feedback not Found or You haven't access to this feedback",
        404,
      );
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      points_improve,
      points_keep,
      suggestion,
      final_feedback,
      feedback_receiver_id,
    } = request.body.feedback;

    const createFeedback = new CreateFeedbackService();
    const feedback = await createFeedback.execute({
      points_improve,
      points_keep,
      suggestion,
      final_feedback,
      feedback_sender_id: Number(request.user.id),
      feedback_receiver_id,
    });

    return response
      .status(201)
      .json({ feedback: feedbackSerializer.render(feedback) });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id: userID } = request.user;

    const {
      points_improve,
      points_keep,
      suggestion,
      final_feedback,
    } = request.body.feedback;

    const feedbacksRepository = getRepository(Feedback);

    try {
      await feedbacksRepository.findOneOrFail({
        where: [{ feedback_sender_id: userID, id }],
      });

      await feedbacksRepository.update(id, {
        points_improve,
        points_keep,
        suggestion,
        final_feedback,
        edited: true,
        viewed: false,
      });

      const feedback = await feedbacksRepository.findOneOrFail(id);

      return response.json({
        feedback: feedbackSerializer.render(feedback),
      });
    } catch {
      throw new AppError(
        "Feedback not Found or You haven't access to this feedback",
        404,
      );
    }
  }

  public async viewed(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id: userID } = request.user;

    const feedbacksRepository = getRepository(Feedback);

    try {
      await feedbacksRepository.findOneOrFail({
        where: [{ feedback_receiver_id: userID, id }],
      });

      await feedbacksRepository.update(id, { viewed: true });

      const feedback = await feedbacksRepository.findOneOrFail(id);

      return response.json({
        feedback: feedbackSerializer.render(feedback),
      });
    } catch {
      throw new AppError(
        "Feedback not Found or You haven't access to this feedback",
        404,
      );
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id: userID } = request.user;

    const feedbacksRepository = getRepository(Feedback);

    try {
      await feedbacksRepository.findOneOrFail({
        where: [
          { feedback_sender_id: userID, id },
          { feedback_receiver_id: userID, id },
        ],
      });
      console.log(await feedbacksRepository.delete(id));

      return response.status(204).send();
    } catch {
      throw new AppError(
        "Feedback not Found or You haven't access to this feedback",
        404,
      );
    }
  }
}

export default FeedbacksController;
