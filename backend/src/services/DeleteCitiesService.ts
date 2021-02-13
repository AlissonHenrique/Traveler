import { getRepository } from 'typeorm';
import fs from 'fs';
import path from 'path';
import uploadConfig from '../config/upload';
import AppError from '../config/AppError';
import Cities from '../models/Cities';

class DeleteCitiesService {
  public async execute(id: string): Promise<Cities> {
    const citiesRepository = getRepository(Cities);
    const cities = await citiesRepository.findOne(id);

    if (!cities) {
      throw new AppError('Id not exist.', 401);
    }
    const tmpFolder = path.resolve(__dirname, '..', '..', 'uploads');
    const filePath = path.resolve(tmpFolder, cities.image);

    await fs.promises.stat(filePath);

    await fs.promises.unlink(filePath);

    await citiesRepository.delete(id);

    return cities;
  }
}

export default DeleteCitiesService;
