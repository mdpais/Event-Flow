# Event-Flow

# the result of login 
{
  "data": {
    "login": {
      "user": {
        "userName": "shaimaa",
        "id": "6439ccd32242e41ae7545ef7"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoic2hhaW1hYUBtYWlsLmNvbSIsIl9pZCI6IjY0MzljY2QzMjI0MmU0MWFlNzU0NWVmNyJ9LCJpYXQiOjE2ODE1OTU5NDUsImV4cCI6MTY4MjQ1OTk0NX0.UfcjHk8p0DvIH9jZMLa_6I-IkJqN2XjKDrNO8BxGPqs"
    }
  }
}

# the result of add user
{
  "data": {
    "login": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoic2hhaW1hYTJAbWFpbC5jb20iLCJfaWQiOiI2NDM5Y2U1MmU0NjgwYmZjM2RiYmYyOTQifSwiaWF0IjoxNjgxNTY2NzY4LCJleHAiOjE2ODE1NzM5Njh9.gZgZt7K78jy7_F3FzliljNVHwPOjcqNRRb8lnJ9_h7o",
      "user": {
        "id": "6439ce52e4680bfc3dbbf294"
      }
    }
  }
}

## The input of create event 
{"input": {
    "name": "yasmeen Birthday",
  "description": "",
  "startDate": "4/15/2023",
  "endDate": "4/15/2023",
  "location": "Mcdonlad",
  "type": "personal",
  "isPrivate":true,
  "createdBy": "6439ce52e4680bfc3dbbf294",
  "invitees": ["6439ce52e4680bfc3dbbf294"],
  "attendees": [],
  "tasks":[]
  
}
}
## The result of create event
{
  "data": {
    "createEvent": {
      "_id": "643ac0ad8e06857904e30a80",
      "name": "My Birthday",
      "description": "",
      "startDate": "4/15/2023",
      "endDate": "4/15/2023",
      "type": "personal",
      "isPrivate": true,
      "location": "Mcdonlad",
      "createdBy": {
        "id": "6439ce52e4680bfc3dbbf294",
        "userName": "shaimaa2",
        "email": "shaimaa2@mail.com",
        "password": "$2b$10$bZ6Ww6FIWY40Ppj4NkWyBOsB8XDncz3dcVjj66Ie8Z3a94WyT8pP2",
        "pendingEvents": [],
        "acceptedEvents": []
      },
      "attendees": [],
      "invitees": [
        {
          "id": "6439ce52e4680bfc3dbbf294",
          "userName": "shaimaa2",
          "email": "shaimaa2@mail.com",
          "password": "$2b$10$bZ6Ww6FIWY40Ppj4NkWyBOsB8XDncz3dcVjj66Ie8Z3a94WyT8pP2"
        }
      ],
      "tasks": []
    }
  }

}

# getEVent By ID

