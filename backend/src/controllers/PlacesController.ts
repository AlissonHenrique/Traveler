import { Request, Response } from 'express';

import CreatePlacesService from '../services/CreatePlacesService';
import DeletePlacesService from '../services/DeletePlacesService';
import UpdatePlacesService from '../services/UpdatePlacesService';

class PlacesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, category_id, address_id } = request.body;
    const { filename } = request.file;
    // const requestImages = request.files as Express.Multer.File[];

    const createPlacesService = new CreatePlacesService();
    const place = await createPlacesService.execute({
      name,
      description,
      category_id,
      address_id,
      image: filename,
    });
    return response.json(place);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, description, category_id, address_id } = request.body;
    const { id } = request.params;
    const { filename } = request.file;
    const updatePlacesService = new UpdatePlacesService();
    const places = await updatePlacesService.execute({
      name,
      description,
      image: filename,
      id,
      category_id,
      address_id,
    });

    return response.json(places);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deletePlacesService = new DeletePlacesService();
    const places = await deletePlacesService.execute(id);

    return response.json(places);
  }
}

export default PlacesController;
