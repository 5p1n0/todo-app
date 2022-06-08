# To Do
A simple to-do app

# REST API
The REST API is described below

## Notes requests

### Request - Get all notes

Returns all notes from the user of the provided token

`GET https://luca.tech-challenges.toduba.it/api/notes`
`Authorization: bearer token`

### Response

    HTTP/1.1 200 OK
    Server: nginx/1.18.0 (Ubuntu)
    Date: Wed, 08 Jun 2022 19:22:24 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 256
    Connection: close
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    ETag: W/"100-Yijt+LzCFO6aPimdHhVgjJXsDuE"

    [
      {
        "id": 1,
        "title": "First note!",
        "content": "Super interesting text",
        "date": "2022-06-08T15:16:02.000Z",
        "userid": 1
      }
    ]
    
### Request - Get a note title and content

Return a specific note title and content

`GET https://luca.tech-challenges.toduba.it/api/notes/:id`
`Authorization: bearer token`

### Response 

    HTTP/1.1 200 OK
    Server: nginx/1.18.0 (Ubuntu)
    Date: Wed, 08 Jun 2022 19:48:14 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 43
    Connection: close
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    ETag: W/"2b-dDj/fRPsM7u3C3MDa0BDNPCklzE"

    [
      {
        "title": "Test",
        "content": "Hello World!"
      }
    ]
    
### Request - Add a note

`POST https://luca.tech-challenges.toduba.it/api/notes`
`Content-Type: application/json`
`Authorization: bearer token`

    {
        "title": "New note!",
        "content": "New text!",
        "date": "2022-06-06 12:03:03"

    }
    
### Response

    HTTP/1.1 201 Created
    Server: nginx/1.18.0 (Ubuntu)
    Date: Wed, 08 Jun 2022 20:00:43 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 91
    Connection: close
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    ETag: W/"5b-vIM1mmMDmY4D+bfno1kO/9s4UAo"

    {
      "fieldCount": 0,
      "affectedRows": 1,
      "insertId": 0,
      "info": "",
      "serverStatus": 2,
      "warningStatus": 0
    }
    
### Request - Update note contents  

`PUT https://luca.tech-challenges.toduba.it/api/notes/:id`
`content-type: application/json`
`Authorization: bearer token`

    {
        "title": "New (UPDATED) note!",
        "content": "New (UPDATED) text!",
        "date": "2022-06-06 12:03:03"
    }

### Response

    HTTP/1.1 200 OK
    Server: nginx/1.18.0 (Ubuntu)
    Date: Wed, 08 Jun 2022 20:05:18 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 147
    Connection: close
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    ETag: W/"93-ZV1nZM15DiIAPeFLx234FRCv9Qw"

    {
      "fieldCount": 0,
      "affectedRows": 1,
      "insertId": 0,
      "info": "Rows matched: 1  Changed: 1  Warnings: 0",
      "serverStatus": 2,
      "warningStatus": 0,
      "changedRows": 1
    }
    
### Request - Delete a note

`DELETE https://luca.tech-challenges.toduba.it/api/notes/:id`
`Authorization: bearer token`

### Response

    HTTP/1.1 204 No Content
    Server: nginx/1.18.0 (Ubuntu)
    Date: Wed, 08 Jun 2022 20:08:51 GMT
    Connection: close
    X-Powered-By: Express
    Access-Control-Allow-Origin: *

## Users requests

### Request - Sign Up

`POST https://luca.tech-challenges.toduba.it/api/users/`
`Content-Type: application/json`

    {
        "username": "user",
        "password": "password1234."
    }
    
### Response

    HTTP/1.1 201 Created
    Server: nginx/1.18.0 (Ubuntu)
    Date: Wed, 08 Jun 2022 20:15:56 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 91
    Connection: close
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    ETag: W/"5b-vIM1mmMDmY4D+bfno1kO/9s4UAo"

    {
      "fieldCount": 0,
      "affectedRows": 1,
      "insertId": 0,
      "info": "",
      "serverStatus": 2,
      "warningStatus": 0
    }

### Request - Log In

`POST https://luca.tech-challenges.toduba.it/api/users/`
`Content-Type: application/json`

    {
        "username": "user",
        "password": "password1234."
    }

### Response

    HTTP/1.1 200 OK
    Server: nginx/1.18.0 (Ubuntu)
    Date: Wed, 08 Jun 2022 20:18:13 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 191
    Connection: close
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    ETag: W/"bf-qc7VyTjIIC4iLgVVc/WYH6cQSvA"

    {
      "token": token,
      "username": "user"
    }
