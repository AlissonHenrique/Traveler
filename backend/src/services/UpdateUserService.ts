import { getRepository } from 'typeorm';
import User from '../models/Users';
import AppError from '../config/AppError';

interface Request {
  id: string;
  name: string;
  email: string;
  password: string;
}
class UpdateUserService {
  public async execute({
    name,
    email,
    password,
    id,
  }: Request): Promise<User | undefined> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('Id not exist.', 401);
    }
    user.name = name;
    user.email = email;
    user.password = password;
    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
