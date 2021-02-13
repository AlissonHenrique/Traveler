import { Request, Response } from 'express';

import CreateAddressesService from '../services/CreateAddressesService';
import UpdateAddressesService from '../services/UpdateAddressesService';
import DeleteAddressesService from '../services/DeleteAddressesService';

class AddressesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { zip_code, street, neighborhood, number } = request.body;
    const createAddressesService = new CreateAddressesService();
    const addresses = await createAddressesService.execute({
      zip_code,
      street,
      neighborhood,
      number,
    });
    return response.json(addresses);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { zip_code, street, neighborhood, number } = request.body;
    const { id } = request.params;
    const updateAddressesService = new UpdateAddressesService();
    const addresses = await updateAddressesService.execute({
      zip_code,
      street,
      neighborhood,
      number,
      id,
    });

    return response.json(addresses);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteAddressesService = new DeleteAddressesService();
    const addresses = await deleteAddressesService.execute(id);

    return response.json(addresses);
  }
}

export default AddressesController;
