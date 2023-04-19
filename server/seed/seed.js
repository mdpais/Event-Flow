const db = require('../config/connection');
const { User, Event, Task } = require('../models');
const userSeeds = require('./users.json');
const eventSeeds = require('./events.json');
const taskSeeds = require('./tasks.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Event.deleteMany({});
        await Task.deleteMany({});

        const sampleUser = await User.create(userSeeds);
        const events = await Event.create(eventSeeds);
        const tasks = await Task.create(taskSeeds);

        process.exit(0);
    } catch (err) {
        throw err;
    }
}
)