import { getRepository } from 'typeorm';
import AppError from '../config/AppError';
import Cities from '../models/Cities';
import Depositions from '../models/Depositions';
import Places from '../models/Places';

interface Request {
  name: string;
  description: string;
  avatar: string;
  city_id: string;
  place_id: string;
}

class CreateDepositionService {
  public async execute({
    name,
    description,
    city_id,
    place_id,
    avatar,
  }: Request): Promise<Depositions> {
    const depositionsRepository = getRepository(Depositions);
    const cityRepository = getRepository(Cities);
    const placesRepository = getRepository(Places);

    const checkCityId = await cityRepository.findOne({
      where: { id: city_id },
    });
    if (!checkCityId) {
      throw new AppError('City id does not Exists', 401);
    }

    const checkPlacesId = await placesRepository.findOne({
      where: { id: place_id },
    });
    if (!checkPlacesId) {
      throw new AppError('Places id does not Exists', 401);
    }
    const depositions = depositionsRepository.create({
      name,
      description,
      city_id,
      place_id,
      avatar,
    });
    await depositionsRepository.save(depositions);

    return depositions;
  }
}

export default CreateDepositionService;
