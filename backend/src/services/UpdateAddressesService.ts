import { getRepository } from 'typeorm';
import Addresses from '../models/Addresses';
import AppError from '../config/AppError';

interface Request {
  id: string;
  zip_code: string;
  street: string;
  neighborhood: string;
  number: number;
}
class UpdateAddressesService {
  public async execute({
    zip_code,
    street,
    neighborhood,
    number,
    id,
  }: Request): Promise<Addresses | undefined> {
    const addressesRepository = getRepository(Addresses);
    const addresses = await addressesRepository.findOne(id);

    if (!addresses) {
      throw new AppError('Id not exist.', 401);
    }

    addresses.zip_code = zip_code;
    addresses.street = street;
    addresses.neighborhood = neighborhood;
    addresses.number = number;

    await addressesRepository.save(addresses);

    return addresses;
  }
}

export default UpdateAddressesService;
