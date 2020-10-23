import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';
import userSerializer from '../serializers/usersSerializer';
import CreateUserService from '../services/CreateUserService';

class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const usersRepository = getRepository(User);
    const users = await usersRepository.find();

    return response.json({ users: userSerializer.renderMany(users) });
  }

  public async me(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const usersRepository = getRepository(User);
    const user = await usersRepository.findOneOrFail(id, {
      relations: ['feedback_senders', 'feedback_receivers'],
    });

    return response.json({ user: userSerializer.render(user) });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body.user;

    const createUser = new CreateUserService();
    const user = await createUser.execute({ name, email, password });

    return response.json({ user: userSerializer.render(user) });
  }
}

export default UsersController;
