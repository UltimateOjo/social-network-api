const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const { Reaction, Thought, User } = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Notedb', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

//API Routes
app.get('/api/users', (req, res) => {
  User.find({})
    .then(dbNote => {
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get('/api/users:id', ({ params, body }, res) => {
  User.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'Invalid' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post('/api/users', (req, res) => {
  User.find({})
    .then(dbNote => {
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.put('/api/users:id', ({ params }, res) => {
  User.findOneAndDelete({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.delete('/api/users:id', ({ params }, res) => {
  User.findOneAndDelete({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post('/api/users/:userId/friends/:friendId', ({ params }, res) => {
  User.findOneAndDelete({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
}); 

app.delete('/api/users/:userId/friends/:friendId', ({ params }, res) => {
  User.findOneAndDelete({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
}); 

app.get('/api/thoughts', (req, res) => {
  Thought.find({})
    .then(dbNote => {
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get('/api/thoughts:id', ({ params, body }, res) => {
  Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'Invalid' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post('/api/thoughts', (req, res) => {
  Thought.find({})
    .then(dbNote => {
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.put('/api/thoughts:id', ({ params }, res) => {
  Thought.findOneAndDelete({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.delete('/api/thoughts:id', ({ params }, res) => {
  Thought.findOneAndDelete({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post('/api/thoughts/:thoughtId/reactions', ({ params }, res) => {
  Thought.findOneAndDelete({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
}); 

app.delete('/api/thoughts/:thoughtId/reactions', ({ params }, res) => {
  Thought.findOneAndDelete({ _id: params.id })
    .then(dbNote => {
      if (!dbNote) {
        res.json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
}); 



//

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });