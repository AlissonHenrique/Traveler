import { getRepository } from 'typeorm';
import fs from 'fs';
import path from 'path';

import AppError from '../config/AppError';
import Places from '../models/Places';

class DeletePlacesService {
  public async execute(id: string): Promise<Places> {
    const placesRepository = getRepository(Places);
    const places = await placesRepository.findOne(id);

    if (!places) {
      throw new AppError('Id not exist.', 401);
    }
    const tmpFolder = path.resolve(__dirname, '..', '..', 'uploads');
    const filePath = path.resolve(tmpFolder, places.image);

    await fs.promises.stat(filePath);

    await fs.promises.unlink(filePath);

    await placesRepository.delete(id);

    return places;
  }
}

export default DeletePlacesService;
