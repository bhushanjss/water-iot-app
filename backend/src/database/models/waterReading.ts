import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('waterReading');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const WaterReadingSchema = new Schema(
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      device: {
        type: Schema.Types.ObjectId,
        ref: 'device',
      },
      location: {
        type: Schema.Types.ObjectId,
        ref: 'address',
      },
      dateTime: {
        type: Date,
      },
      type: {
        type: String,
        enum: [
          "manual",
          "device",
          "baseline",
          "other",
          null
        ],
      },
      source: {
        type: String,
        enum: [
          "tap",
          "ro",
          "dug_well",
          "tube_well",
          "hand_pump",
          "other",
          null
        ],
      },
      remark: {
        type: String,
      },
      temperature: {
        type: Number,
        min: -5,
        max: 100,
      },
      pH: {
        type: Number,
        min: 0,
        max: 14,
      },
      tds: {
        type: Number,
      },
      conductivity: {
        type: Number,
      },
      alkalinity: {
        type: Number,
        min: 0,
      },
      hardness: {
        type: Number,
      },
      turbidity: {
        type: Number,
        min: 0,
        max: 1000,
      },
      oxygen: {
        type: Number,
        min: 0,
      },
      calcium: {
        type: Number,
        min: 0,
      },
      magnesium: {
        type: Number,
        min: 0,
      },
      sodium: {
        type: Number,
        min: 0,
      },
      potassium: {
        type: Number,
        min: 0,
      },
      iron: {
        type: Number,
        min: 0,
      },
      chlorine: {
        type: Number,
        min: 0,
      },
      carbonate: {
        type: Number,
        min: 0,
      },
      bicarbonate: {
        type: Number,
        min: 0,
      },
      chloride: {
        type: Number,
        min: 0,
      },
      sulphate: {
        type: Number,
        min: 0,
      },
      manganese: {
        type: Number,
        min: 0,
      },
      nitrate: {
        type: Number,
        min: 0,
      },
      fluoride: {
        type: Number,
        min: 0,
      },
      silicate: {
        type: Number,
        min: 0,
      },
      phosphate: {
        type: Number,
        min: 0,
      },
      arsenic: {
        type: Number,
        min: 0,
      },
      copper: {
        type: Number,
        min: 0,
      },
      cadmium: {
        type: Number,
        min: 0,
      },
      selenium: {
        type: Number,
        min: 0,
      },
      mercury: {
        type: Number,
        min: 0,
      },
      lead: {
        type: Number,
        min: 0,
      },
      zinc: {
        type: Number,
        min: 0,
      },
      boron: {
        type: Number,
        min: 0,
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

  WaterReadingSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  WaterReadingSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  WaterReadingSchema.set('toJSON', {
    getters: true,
  });

  WaterReadingSchema.set('toObject', {
    getters: true,
  });

  return database.model('waterReading', WaterReadingSchema);
};
