import { getRepository } from 'typeorm';
import Place from '../models/Places';
import Categories from '../models/Categories';
import AppError from '../config/AppError';
import Addresses from '../models/Addresses';

interface Request {
  name: string;
  image: string;
  description: string;
  category_id: string;
  address_id: string;
}
class CreatePlacesService {
  public async execute({
    name,
    image,
    description,
    category_id,
    address_id,
  }: Request): Promise<Place> {
    const placesRepository = getRepository(Place);
    const categoriesRepository = getRepository(Categories);
    const addressesRepository = getRepository(Addresses);
    const checkCategoryId = await categoriesRepository.findOne({
      where: { id: category_id },
    });
    if (!checkCategoryId) {
      throw new AppError('Categorie id does not Exists', 401);
    }
    const checkAddressId = await addressesRepository.findOne({
      where: { id: address_id },
    });
    if (!checkAddressId) {
      throw new AppError('Address id does not Exists', 401);
    }

    const places = placesRepository.create({
      name,
      image,
      description,
      category_id,
      address_id,
    });
    await placesRepository.save(places);

    return places;
  }
}

export default CreatePlacesService;
