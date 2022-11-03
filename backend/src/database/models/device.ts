import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('device');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const DeviceSchema = new Schema(
    {
      label: {
        type: String,
      },
      deviceId: {
        type: String,
      },
      serialNumber: {
        type: String,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      version: {
        type: String,
      },
      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  DeviceSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  DeviceSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  DeviceSchema.set('toJSON', {
    getters: true,
  });

  DeviceSchema.set('toObject', {
    getters: true,
  });

  return database.model('device', DeviceSchema);
};
