import { Request, Response } from 'express';

import CreateDepositionService from '../services/CreateDepositionService';
// import DeleteDepositionService from '../services/DeleteDepositionService';
// import UpdateDepositionService from '../services/UpdateDepositionService';

class DepositionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, city_id, place_id } = request.body;
    const { filename } = request.file;

    const createDepositionService = new CreateDepositionService();
    const place = await createDepositionService.execute({
      name,
      description,
      city_id,
      place_id,
      avatar: filename,
    });
    return response.json(place);
  }

  // public async update(request: Request, response: Response): Promise<Response> {
  //   const { name, description, city_id, place_id } = request.body;
  //   const { id } = request.params;
  //   const { filename } = request.file;
  //   const updateDepositionService = new UpdateDepositionService();
  //   const Deposition = await updateDepositionService.execute({
  //     name,
  //     description,
  //     city_id,
  //     place_id,
  //     avatar: filename,
  //   });

  //   return response.json(Deposition);
  // }

  // public async delete(request: Request, response: Response): Promise<Response> {
  //   const { id } = request.params;
  //   const deleteDepositionService = new DeleteDepositionService();
  //   const Deposition = await deleteDepositionService.execute(id);

  //   return response.json(Deposition);
  // }
}

export default DepositionsController;
