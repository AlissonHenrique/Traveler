import { getRepository } from 'typeorm';
import fs from 'fs';
import path from 'path';
import Cities from '../models/Cities';
import AppError from '../config/AppError';
import uploadConfig from '../config/upload';

interface Request {
  id: string;
  name: string;
  description: string;
  image: string;
}
class UpdateCitiesService {
  public async execute({
    name,
    description,
    image,
    id,
  }: Request): Promise<Cities> {
    const citiesRepository = getRepository(Cities);
    const cities = await citiesRepository.findOne(id);

    if (!cities) {
      throw new AppError('Id not exist.', 401);
    }
    // delete image antiga
    const tmpFolder = path.resolve(__dirname, '..', '..', 'uploads');
    const filePath = path.resolve(tmpFolder, cities.image);
    await fs.promises.stat(filePath);
    await fs.promises.unlink(filePath);

    cities.name = name;
    cities.description = description;
    cities.image = image;

    await citiesRepository.save(cities);

    return cities;
  }
}

export default UpdateCitiesService;
