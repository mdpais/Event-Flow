import { gql } from '@apollo/client';

export const All_Users = gql`
query users {
  users {
    id
    userName
    email
    password
  }
}
`;

export const LOGGED_IN_USER = gql`
query LoggedinUser($userId: ID!) {
  user(userId: $userId) {
    _id
    userName
  }
}`;

export const ALL_EVENTS = gql`
query events {
  events {
    _id
    name
    description
    type
    location
    startDate
    endDate
    isPrivate
    createdBy {
      id
      userName
    }
    invitees {
      id
      userName
    }
    attendees {
      id
      userName
    }
    tasks {
      id
      title
      description
      deadline
      assignedTo {
        userName
      }
      completed
    }
  }
}`

export const EVENT_BY_ID = gql`
  query event($eventId: ID!) {
    event(id: $eventId) {
      _id
      name
      description
      startDate
      endDate
      type
      isPrivate
      location
      invitees {
        userName
        id
      }
      createdBy {
        userName
        id
      }
      attendees {
        userName
        id
      }
    }
  }
`;