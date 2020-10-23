import { Request, Response } from 'express';

import usersSerializer from '../serializers/usersSerializer';
import AuthenticateUserService from '../services/AuthenticateUserService';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body.session;

    const authenticateUserService = new AuthenticateUserService();
    const { user, token } = await authenticateUserService.execute({
      email,
      password,
    });

    return response.json({ user: usersSerializer.render(user), token });
  }
}

export default SessionsController;
