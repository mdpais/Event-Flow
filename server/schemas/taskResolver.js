const { Event, Task, User } = require("../models");
const taskResolvers = {
  Query: {
    tasks: async () => {
      return await Task.find().populate("assignedTo").populate("event");
    },

    task: async (parent, { id }) => {
      return await Task.findById(id).populate("assignedTo").populate("event");
    },
  },
  Mutation: {
    createTask: async (
      parent,
      { title, description, assignedTo, deadline, event },
      context
    ) => {
      try {
        const task = await Task.create({
          title,
          description,
          assignedTo,
          deadline,
          event,
        });

        await User.findByIdAndUpdate(assignedTo, { $push: { tasks: task } });
        await Event.findByIdAndUpdate(event, { $push: { tasks: task } });
        return task;
      } catch (err) {
        throw new Error(err);
      }
    },

    updateTask: async (
      parent,
      { id, title, description, assignedTo, deadline, event },
      context
    ) => {
      try {
        if (!context.user) {
          throw new Error("Authentication required.");
        }
        const task = await Task.findByIdAndUpdate(
          id,
          { title, description, assignedTo, deadline, event },
          { new: true }
        ).populate("assignedTo event");

        if (!task) {
          throw new Error("Task not found");
        }

        return task;
      } catch (err) {
        throw new Error(err);
      }
      // updateTask: async (
      //   parent,
      //   { id, title, description, assignedTo, deadline, status, event },
      //   context
      // ) => {
      //   if (!context.user) {
      //     throw new Error("Authentication required.");
      //   }
      //   const task = await Task.findById(id);
      //   if (!task) {
      //     throw new Error("Task not found.");
      //   }
      //   if (!task.assignedTo.equals(currentUser._id)) {
      //     throw new Error("Only the assigned user can update the task.");
      //   }
      // },
    },
  },
};

module.exports = taskResolvers;
