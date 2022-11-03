import MongooseRepository from './mongooseRepository';
import MongooseQueryUtils from '../utils/mongooseQueryUtils';
import AuditLogRepository from './auditLogRepository';
import Error404 from '../../errors/Error404';
import { IRepositoryOptions } from './IRepositoryOptions';
import lodash from 'lodash';
import WaterReading from '../models/waterReading';
import UserRepository from './userRepository';

class WaterReadingRepository {
  
  static async create(data, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    const currentUser = MongooseRepository.getCurrentUser(
      options,
    );

    const [record] = await WaterReading(
      options.database,
    ).create(
      [
        {
          ...data,
          tenant: currentTenant.id,
          createdBy: currentUser.id,
          updatedBy: currentUser.id,
        }
      ],
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options,
    );

    

    return this.findById(record.id, options);
  }

  static async update(id, data, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let record = await MongooseRepository.wrapWithSessionIfExists(
      WaterReading(options.database).findOne({_id: id, tenant: currentTenant.id}),
      options,
    );

    if (!record) {
      throw new Error404();
    }

    await WaterReading(options.database).updateOne(
      { _id: id },
      {
        ...data,
        updatedBy: MongooseRepository.getCurrentUser(
          options,
        ).id,
      },
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      id,
      data,
      options,
    );

    record = await this.findById(id, options);



    return record;
  }

  static async destroy(id, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let record = await MongooseRepository.wrapWithSessionIfExists(
      WaterReading(options.database).findOne({_id: id, tenant: currentTenant.id}),
      options,
    );

    if (!record) {
      throw new Error404();
    }

    await WaterReading(options.database).deleteOne({ _id: id }, options);

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      id,
      record,
      options,
    );


  }

  static async filterIdInTenant(
    id,
    options: IRepositoryOptions,
  ) {
    return lodash.get(
      await this.filterIdsInTenant([id], options),
      '[0]',
      null,
    );
  }

  static async filterIdsInTenant(
    ids,
    options: IRepositoryOptions,
  ) {
    if (!ids || !ids.length) {
      return [];
    }

    const currentTenant =
      MongooseRepository.getCurrentTenant(options);

    const records = await WaterReading(options.database)
      .find({
        _id: { $in: ids },
        tenant: currentTenant.id,
      })
      .select(['_id']);

    return records.map((record) => record._id);
  }

  static async count(filter, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    return MongooseRepository.wrapWithSessionIfExists(
      WaterReading(options.database).countDocuments({
        ...filter,
        tenant: currentTenant.id,
      }),
      options,
    );
  }

  static async findById(id, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let record = await MongooseRepository.wrapWithSessionIfExists(
      WaterReading(options.database)
        .findOne({_id: id, tenant: currentTenant.id})
      .populate('user')
      .populate('device'),
      options,
    );

    if (!record) {
      throw new Error404();
    }

    return this._mapRelationshipsAndFillDownloadUrl(record);
  }

  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let criteriaAnd: any = [];
    
    criteriaAnd.push({
      tenant: currentTenant.id,
    });

    if (filter) {
      if (filter.id) {
        criteriaAnd.push({
          ['_id']: MongooseQueryUtils.uuid(filter.id),
        });
      }

      if (filter.user) {
        criteriaAnd.push({
          user: MongooseQueryUtils.uuid(
            filter.user,
          ),
        });
      }

      if (filter.device) {
        criteriaAnd.push({
          device: MongooseQueryUtils.uuid(
            filter.device,
          ),
        });
      }

      if (filter.dateTimeRange) {
        const [start, end] = filter.dateTimeRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            dateTime: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            dateTime: {
              $lte: end,
            },
          });
        }
      }

      if (filter.type) {
        criteriaAnd.push({
          type: filter.type
        });
      }

      if (filter.source) {
        criteriaAnd.push({
          source: filter.source
        });
      }

      if (filter.remark) {
        criteriaAnd.push({
          remark: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.remark,
            ),
            $options: 'i',
          },
        });
      }

      if (filter.temperatureRange) {
        const [start, end] = filter.temperatureRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            temperature: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            temperature: {
              $lte: end,
            },
          });
        }
      }

      if (filter.pHRange) {
        const [start, end] = filter.pHRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            pH: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            pH: {
              $lte: end,
            },
          });
        }
      }

      if (filter.tdsRange) {
        const [start, end] = filter.tdsRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            tds: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            tds: {
              $lte: end,
            },
          });
        }
      }

      if (filter.conductivityRange) {
        const [start, end] = filter.conductivityRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            conductivity: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            conductivity: {
              $lte: end,
            },
          });
        }
      }

      if (filter.alkalinityRange) {
        const [start, end] = filter.alkalinityRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            alkalinity: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            alkalinity: {
              $lte: end,
            },
          });
        }
      }

      if (filter.hardnessRange) {
        const [start, end] = filter.hardnessRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            hardness: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            hardness: {
              $lte: end,
            },
          });
        }
      }

      if (filter.turbidityRange) {
        const [start, end] = filter.turbidityRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            turbidity: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            turbidity: {
              $lte: end,
            },
          });
        }
      }

      if (filter.oxygenRange) {
        const [start, end] = filter.oxygenRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            oxygen: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            oxygen: {
              $lte: end,
            },
          });
        }
      }

      if (filter.calciumRange) {
        const [start, end] = filter.calciumRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            calcium: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            calcium: {
              $lte: end,
            },
          });
        }
      }

      if (filter.magnesiumRange) {
        const [start, end] = filter.magnesiumRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            magnesium: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            magnesium: {
              $lte: end,
            },
          });
        }
      }

      if (filter.sodiumRange) {
        const [start, end] = filter.sodiumRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            sodium: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            sodium: {
              $lte: end,
            },
          });
        }
      }

      if (filter.potassiumRange) {
        const [start, end] = filter.potassiumRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            potassium: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            potassium: {
              $lte: end,
            },
          });
        }
      }

      if (filter.ironRange) {
        const [start, end] = filter.ironRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            iron: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            iron: {
              $lte: end,
            },
          });
        }
      }

      if (filter.chlorineRange) {
        const [start, end] = filter.chlorineRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            chlorine: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            chlorine: {
              $lte: end,
            },
          });
        }
      }

      if (filter.carbonateRange) {
        const [start, end] = filter.carbonateRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            carbonate: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            carbonate: {
              $lte: end,
            },
          });
        }
      }

      if (filter.bicarbonateRange) {
        const [start, end] = filter.bicarbonateRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            bicarbonate: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            bicarbonate: {
              $lte: end,
            },
          });
        }
      }

      if (filter.chlorideRange) {
        const [start, end] = filter.chlorideRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            chloride: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            chloride: {
              $lte: end,
            },
          });
        }
      }

      if (filter.sulphateRange) {
        const [start, end] = filter.sulphateRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            sulphate: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            sulphate: {
              $lte: end,
            },
          });
        }
      }

      if (filter.manganeseRange) {
        const [start, end] = filter.manganeseRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            manganese: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            manganese: {
              $lte: end,
            },
          });
        }
      }

      if (filter.nitrateRange) {
        const [start, end] = filter.nitrateRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            nitrate: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            nitrate: {
              $lte: end,
            },
          });
        }
      }

      if (filter.fluorideRange) {
        const [start, end] = filter.fluorideRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            fluoride: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            fluoride: {
              $lte: end,
            },
          });
        }
      }

      if (filter.silicateRange) {
        const [start, end] = filter.silicateRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            silicate: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            silicate: {
              $lte: end,
            },
          });
        }
      }

      if (filter.phosphateRange) {
        const [start, end] = filter.phosphateRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            phosphate: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            phosphate: {
              $lte: end,
            },
          });
        }
      }

      if (filter.arsenicRange) {
        const [start, end] = filter.arsenicRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            arsenic: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            arsenic: {
              $lte: end,
            },
          });
        }
      }

      if (filter.copperRange) {
        const [start, end] = filter.copperRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            copper: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            copper: {
              $lte: end,
            },
          });
        }
      }

      if (filter.cadmiumRange) {
        const [start, end] = filter.cadmiumRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            cadmium: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            cadmium: {
              $lte: end,
            },
          });
        }
      }

      if (filter.seleniumRange) {
        const [start, end] = filter.seleniumRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            selenium: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            selenium: {
              $lte: end,
            },
          });
        }
      }

      if (filter.mercuryRange) {
        const [start, end] = filter.mercuryRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            mercury: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            mercury: {
              $lte: end,
            },
          });
        }
      }

      if (filter.leadRange) {
        const [start, end] = filter.leadRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            lead: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            lead: {
              $lte: end,
            },
          });
        }
      }

      if (filter.zincRange) {
        const [start, end] = filter.zincRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            zinc: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            zinc: {
              $lte: end,
            },
          });
        }
      }

      if (filter.boronRange) {
        const [start, end] = filter.boronRange;

        if (start !== undefined && start !== null && start !== '') {
          criteriaAnd.push({
            boron: {
              $gte: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          criteriaAnd.push({
            boron: {
              $lte: end,
            },
          });
        }
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteriaAnd.push({
            ['createdAt']: {
              $gte: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          criteriaAnd.push({
            ['createdAt']: {
              $lte: end,
            },
          });
        }
      }
    }

    const sort = MongooseQueryUtils.sort(
      orderBy || 'createdAt_DESC',
    );

    const skip = Number(offset || 0) || undefined;
    const limitEscaped = Number(limit || 0) || undefined;
    const criteria = criteriaAnd.length
      ? { $and: criteriaAnd }
      : null;

    let rows = await WaterReading(options.database)
      .find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort)
      .populate('user')
      .populate('device');

    const count = await WaterReading(
      options.database,
    ).countDocuments(criteria);

    rows = await Promise.all(
      rows.map(this._mapRelationshipsAndFillDownloadUrl),
    );

    return { rows, count };
  }

  static async findAllAutocomplete(search, limit, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(
      options,
    );

    let criteriaAnd: Array<any> = [{
      tenant: currentTenant.id,
    }];

    if (search) {
      criteriaAnd.push({
        $or: [
          {
            _id: MongooseQueryUtils.uuid(search),
          },
          
        ],
      });
    }

    const sort = MongooseQueryUtils.sort('id_ASC');
    const limitEscaped = Number(limit || 0) || undefined;

    const criteria = { $and: criteriaAnd };

    const records = await WaterReading(options.database)
      .find(criteria)
      .limit(limitEscaped)
      .sort(sort);

    return records.map((record) => ({
      id: record.id,
      label: record.id,
    }));
  }

  static async _createAuditLog(action, id, data, options: IRepositoryOptions) {
    await AuditLogRepository.log(
      {
        entityName: WaterReading(options.database).modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }

  static async _mapRelationshipsAndFillDownloadUrl(record) {
    if (!record) {
      return null;
    }

    const output = record.toObject
      ? record.toObject()
      : record;



    output.user = UserRepository.cleanupForRelationships(output.user);

    return output;
  }
}

export default WaterReadingRepository;
