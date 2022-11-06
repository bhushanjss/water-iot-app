import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import WaterReadingRepository from '../database/repositories/waterReadingRepository';
import DeviceRepository from '../database/repositories/deviceRepository';
import UserRepository from '../database/repositories/userRepository';
import AddressRepository from "../database/repositories/addressRepository";

export default class WaterReadingService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.user = await UserRepository.filterIdInTenant(data.user, { ...this.options, session });
      data.device = await DeviceRepository.filterIdInTenant(data.device, { ...this.options, session });
      data.location = await AddressRepository.filterIdInTenant(data.location, { ...this.options, session });

      const record = await WaterReadingRepository.create(data, {
        ...this.options,
        session,
      });

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'waterReading',
      );

      throw error;
    }
  }

  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.user = await UserRepository.filterIdInTenant(data.user, { ...this.options, session });
      data.device = await DeviceRepository.filterIdInTenant(data.device, { ...this.options, session });
      data.location = await AddressRepository.filterIdInTenant(data.location, { ...this.options, session });

      const record = await WaterReadingRepository.update(
        id,
        data,
        {
          ...this.options,
          session,
        },
      );

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'waterReading',
      );

      throw error;
    }
  }

  async destroyAll(ids) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await WaterReadingRepository.destroy(id, {
          ...this.options,
          session,
        });
      }

      await MongooseRepository.commitTransaction(session);
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  async findById(id) {
    return WaterReadingRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return WaterReadingRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return WaterReadingRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await WaterReadingRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
