const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
        type: String,
        required: 'Thought is Required',
        validate: [({ length }) => 1 <= length <= 280, 'Password should be 1-280 characters long.']
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
          },

          username: {
              type: String,
              required: 'Username is Required'
          },
          reactions: [{
            text: String,
            postedBy: {
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
            }
            }]
          
    },
    {
        toJSON: {
          virtuals: true
        },
        id: false
      }
);

const reactionsCount = ThoughtSchema.virtual('reaction').get(function() {
    return this.reactions.length;
  });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;