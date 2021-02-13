import { getRepository } from 'typeorm';
import Cities from '../models/Cities';

interface Request {
  name: string;
  image: string;
  description: string;
}
class CreateCitiesService {
  public async execute({ name, image, description }: Request): Promise<Cities> {
    const citiesRepository = getRepository(Cities);
    const cities = citiesRepository.create({
      name,
      image,
      description,
    });
    await citiesRepository.save(cities);

    return cities;
  }
}

export default CreateCitiesService;
