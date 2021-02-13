import { getRepository } from 'typeorm';
import Addresses from '../models/Addresses';

interface Request {
  zip_code: string;
  street: string;
  neighborhood: string;
  number: number;
}
class CreateAddressesService {
  public async execute({
    zip_code,
    street,
    neighborhood,
    number,
  }: Request): Promise<Addresses> {
    const addressesRepository = getRepository(Addresses);

    const addresses = addressesRepository.create({
      zip_code,
      street,
      neighborhood,
      number,
    });
    await addressesRepository.save(addresses);

    return addresses;
  }
}

export default CreateAddressesService;
