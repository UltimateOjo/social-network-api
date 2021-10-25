const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: 'Reaction is Required',
        validate: [({ length }) => length <= 280, 'Cannon exceed 280 characters.']
      },
      username: {
        type: String,
        required: 'Username is required'
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
  }  
);

const Reaction = model('Reaction', reactionSchema );

module.exports = Reaction;