import { Request, Response } from 'express';

import CreateCategoriesService from '../services/CreateCategoriesService';
import UpdateCategoriesService from '../services/UpdateCategoriesService';

class CategoriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const createCategories = new CreateCategoriesService();
    const categories = await createCategories.execute({ name });
    return response.json(categories);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { id } = request.params;
    const updateCategories = new UpdateCategoriesService();
    const categories = await updateCategories.execute({ name, id });

    return response.json(categories);
  }
}

export default CategoriesController;
