import { getRepository } from 'typeorm';
import AppError from '../config/AppError';
import Categories from '../models/Categories';

interface Request {
  name: string;
}
class CreateCategoriesService {
  public async execute({ name }: Request): Promise<Categories> {
    const categoriesRepository = getRepository(Categories);
    const checkCategorieExists = await categoriesRepository.findOne({
      where: { name },
    });

    if (checkCategorieExists) {
      throw new AppError('Categorie already used.', 401);
    }
    const categories = categoriesRepository.create({
      name,
    });
    await categoriesRepository.save(categories);

    return categories;
  }
}

export default CreateCategoriesService;
