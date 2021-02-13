import { Request, Response } from 'express';

import CreateCitiesService from '../services/CreateCitiesService';
import UpdateCitiesService from '../services/UpdateCitiesService';
import DeleteCitiesService from '../services/DeleteCitiesService';

class CitiesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const { filename } = request.file;
    // const requestImages = request.files as Express.Multer.File[];

    const createCities = new CreateCitiesService();
    const cities = await createCities.execute({
      name,
      image: filename,
      description,
    });
    return response.json(cities);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const { id } = request.params;
    const { filename } = request.file;
    const updateCitiesService = new UpdateCitiesService();
    const cities = await updateCitiesService.execute({
      name,
      description,
      image: filename,
      id,
    });

    return response.json(cities);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteCitiesService = new DeleteCitiesService();
    const cities = await deleteCitiesService.execute(id);

    return response.json(cities);
  }
}

export default CitiesController;
