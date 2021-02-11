import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import authConfig from '../config/authConfig';
import Users from '../models/Users';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: Users;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(Users);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw Error('Incorrect email/password combination');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw Error('Incorrect email/password combination');
    }
    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: 'user.id',
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
