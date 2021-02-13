import { getRepository } from 'typeorm';
import AppError from '../config/AppError';
import Addresses from '../models/Addresses';

class DeleteAddressesService {
  public async execute(id: string): Promise<Addresses> {
    const addressesRepository = getRepository(Addresses);
    const addresses = await addressesRepository.findOne(id);

    if (!addresses) {
      throw new AppError('Id not exist.', 401);
    }

    await addressesRepository.delete(id);

    return addresses;
  }
}

export default DeleteAddressesService;
