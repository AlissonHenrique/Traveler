import { getRepository } from 'typeorm';
import fs from 'fs';
import path from 'path';
import Places from '../models/Places';
import AppError from '../config/AppError';
import uploadConfig from '../config/upload';

interface Request {
  id: string;
  name: string;
  description: string;
  image: string;
  category_id: string;
  address_id: string;
}
class UpdatePlacesService {
  public async execute({
    name,
    description,
    image,
    id,
    category_id,
    address_id,
  }: Request): Promise<Places> {
    const placesRepository = getRepository(Places);
    const places = await placesRepository.findOne(id);

    if (!places) {
      throw new AppError('Id not exist.', 401);
    }
    // delete image antiga
    const tmpFolder = path.resolve(__dirname, '..', '..', 'uploads');
    const filePath = path.resolve(tmpFolder, places.image);
    await fs.promises.stat(filePath);
    await fs.promises.unlink(filePath);

    places.name = name;
    places.description = description;
    places.image = image;
    places.category_id = category_id;
    places.address_id = address_id;

    await placesRepository.save(places);

    return places;
  }
}

export default UpdatePlacesService;
