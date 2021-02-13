import { getRepository } from 'typeorm';
import Categories from '../models/Categories';
import AppError from '../config/AppError';

interface Request {
  id: string;
  name: string;
}
class UpdateCategoriesService {
  public async execute({ name, id }: Request): Promise<Categories | undefined> {
    const categoriesRepository = getRepository(Categories);
    const categorie = await categoriesRepository.findOne(id);

    if (!categorie) {
      throw new AppError('Id not exist.', 401);
    }
    categorie.name = name;
    await categoriesRepository.save(categorie);

    return categorie;
  }
}

export default UpdateCategoriesService;
