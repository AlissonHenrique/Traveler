import { Request, Response } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;
      const authenticateUserService = new AuthenticateUserService();
      const { user, token } = await authenticateUserService.execute({
        email,
        password,
      });
      return response.json({ user, token });
    } catch (err) {
      return response.status(400).json({ errr: err.message });
    }
  }
}

export default SessionController;
