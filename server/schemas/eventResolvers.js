const { Event } = require("../models");
const eventResolvers = {
    Query: {
        events: async () => {
            const events = await Event.find().populate('createdBy attendees invitees tasks');
            return events;
        },

        event: async (parent, { id }) => {
            const event = await Event.findById(id).populate('createdBy attendees invitees tasks');
            return event;
        },
    },
    Mutation: {
        createEvent: async (parent, { title, description, startDate, endDate, location }, context) => {

            if (!context.user) {
                throw new Error('Authentication required.');
            }
            const event = new Event({
                title,
                description,
                startDate,
                endDate,
                location,
                owner: currentUser._id,
                guests: [],
                tasks: []
            });
            await event.save();
            return event;
        },

        createEvent2: async (parent, { input }, context) => {
            if (!context.user) {
                throw new Error('Authentication required.');
            }
            const event = await Event.create(input);
            await event.populate('createdBy attendees invitees tasks').execPopulate();
            return event;
        },

        updateEvent: async (_, { id, title, description, startDate, endDate, location }, context) => {
            if (!context.user) {
                throw new Error('Authentication required.');
            }

            const event = await Event.findById(id);
            if (!event) {
                throw new Error('Event not found.');
            }
            if (!event.owner.equals(currentUser._id)) {
                throw new Error('Only the owner of the event can update it.');
            }
            if (title) {
                event.title = title;
            }
            if (description) {
                event.description = description;
            }
            if (startDate) {
                event.startDate = startDate;
            }
            if (endDate) {
                event.endDate = endDate;
            }
            if (location) {
                event.location = location;
            }
            await event.save();
            return event;
        },

        updateEvent2: async (parent, { id, input }, context) => {
            if (!context.user) {
                throw new Error('Authentication required.');
            }
            const event = await Event.findById(id);
            if (!event) {
                throw new Error('Event not found.');
            }
            if (!event.owner.equals(context.user._id)) {
                throw new Error('Only the owner of the event can update it.');
            }
            const updatedEvent = await Event.findByIdAndUpdate(id, input, { new: true }).populate('createdBy attendees invitees tasks');
            return updatedEvent;
        },


        deleteEvent: async (parent, { id }, context) => {
            if (!context.user) {
                throw new Error('Authentication required.');
            }
            const event = await Event.findById(id);
            if (!event) {
                throw new Error('Event not found.');
            }
            if (!event.owner.equals(context.user._id)) {
                throw new Error('Only the owner of the event can delete it.');
            }

            const deletedEvent = await Event.findByIdAndDelete(id).populate('createdBy attendees invitees tasks');

            return deletedEvent;
        },
    }
};
module.exports = eventResolvers;
