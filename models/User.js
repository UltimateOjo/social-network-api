const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
      type: String,
      trim: true,
      required: 'First Name is Required',
      unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: 'Email is Required',
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
      },
      thoughts: [{
        text: String,
        postedBy: {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }
      }],
        friends: [{
          text: String,
            postedBy: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
    }]
},
{
    toJSON: {
      virtuals: true
    },
    id: false
  });

  const friendsCount = UserSchema.virtual('name').get(function() {
    return this.friends.length;
  });

const User = model('User', UserSchema);

module.exports = User;