import { getRepository } from 'typeorm';
import AppError from '../config/AppError';
import User from '../models/Users';

class DeleteUserService {
  public async execute(id: string): Promise<User> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('Id not exist.', 401);
    }

    await userRepository.delete(id);

    return user;
  }
}

export default DeleteUserService;
