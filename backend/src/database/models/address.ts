import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('address');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const AddressSchema = new Schema(
    {
      address1: {
        type: String,
      },
      address2: {
        type: String,
      },
      city: {
        type: String,
      },
      tehsil: {
        type: String,
      },
      district: {
        type: String,
        required: true,
      },
      state: {
        type: String,
      },
      coords: {
        type: String,
      },
      pin: {
        type: Number,
        min: 100000,
      },
      label: {
        type: String,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
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

  AddressSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  AddressSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  AddressSchema.set('toJSON', {
    getters: true,
  });

  AddressSchema.set('toObject', {
    getters: true,
  });

  return database.model('address', AddressSchema);
};
