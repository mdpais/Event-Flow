import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { ALL_EVENTS } from '../utils/queries';

import { useMutation } from '@apollo/client';

import bulmaCalendar from "bulma-calendar";

import { CREATE_TASK } from '../utils/mutations';

// Initialize all input of date type.
const calendars = bulmaCalendar.attach('[type="date"]');

// Loop on each calendar initialized
calendars.forEach(calendar => {
    // Add listener to select event
    calendar.on('select', date => {
        console.log(date);
    });
});

// To access to bulmaCalendar instance of an element
const element = document.querySelector('#my-element');
if (element) {
    // bulmaCalendar instance is available as element.bulmaCalendar
    element.bulmaCalendar.on('select', datepicker => {
        console.log(datepicker.data.value());
    });
}

const CreateTask = () => {
    const { loading, data } = useQuery(ALL_EVENTS);
    const events = data?.events || [];
    return (
        <div class="hero-body is-justify-content-center is-align-items-center">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Event</label>
                </div>
                <div class="field-body">
                    <div class="field">           
                        <div class="select is-normal is-primary">
                            <select>
                                <option>Select your Event</option>
                                <OwnedEvents events= {events} />
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Assigned To</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input is-primary" type="text" placeholder="assignee"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Event Title</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input is-primary" type="text" placeholder="event title"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Task</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input is-primary" type="text" placeholder="input task"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-horizontal">
                <div class="calendar">
                    <label for="date" className='event-date'>Deadline</label>
                    <input type="date" data-display-mode="inline" data-is-range="true" data-close-on-select="false"></input>
                </div>
            </div>
            <div class="field is-horizontal is-justify-content-center is-align-items-center">
                <div class="field-label">
                     </div>
                    <div class="field-body">
                       <div class="field">
                          <div class="control">
                            <button class="button is-primary">
                                Create Task
                            </button>
                          </div>
                       </div>
                       <div class="field">
                          <div class="control">
                            <button class="button is-primary">
                                Cancel
                            </button>
                          </div>
                       </div>
                   </div>
                </div>
            </div>
            
    )
}
const OwnedEvents = ({ events }) => {
    if (!events.length) {
      return <p>No events available</p>;
    }
  
    return (
      <>
        {events &&
          events.map((event) => (
            <>
            {(event.isCreated = userID) 
            ? <option id={event._id}>{event.name}</option>
            :""}
           </>
          ))}
      </>
    )
  }

export default CreateTask;
