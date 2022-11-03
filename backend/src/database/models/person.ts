import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('person');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const PersonSchema = new Schema(
    {
      firstName: {
        type: String,
        required: true,
        minlength: 2,
      },
      lastName: {
        type: String,
        required: true,
        minlength: 2,
      },
      gender: {
        type: String,
        required: true,
        enum: [
          "male",
          "female"
        ],
      },
      birthdate: {
        type: String,
      },
      phoneNumber: {
        type: String,
      },
      location: {
        type: Schema.Types.ObjectId,
        ref: 'address',
      },
      email: {
        type: String,
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

  PersonSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  PersonSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  PersonSchema.set('toJSON', {
    getters: true,
  });

  PersonSchema.set('toObject', {
    getters: true,
  });

  return database.model('person', PersonSchema);
};
