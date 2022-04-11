# Digimon Cyber Sleuth API 

### Heroku Link: https://digimon-cyber-sleuth-api-nak.herokuapp.com/digi/


A REST API built with Mongoose, MongoDB, Express, Javascript, HTML, CSS and RESTful routes that shows the digimon and thier traits from the video-game Digimon Story: Cyber Sleuth

## Description

This project uses Schemas and Models to take and format JSON information that is then seeded into a database. That database is then used to build an API that can be accessed through multiple link routes.

## Instructions

1) Clone down this repo.
2) Install dependencies.
3) Seed the database.
4) Start server link.
5) Either view the API info through a browser for the seeded information or manipulate the information through apps like Postman or Insomnia.

## Clone repository

```
git clone https://github.com/NasimAkbor/Digimon-Cyber-Sleuth-API
```

## Install Dependencies

```
npm install 
```

## Seed the data

```
npm run db:seed
```

## Connect to server
```
npm run start
````

## API Endpoints
#### IN BROWSER ONLY GET COMMANDS WILL WORK
In an app like Postman you can run the rest of the commands to manipulate the API.

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | /digi/             | This is the API root.   |
| GET    | /digi/digimon   | Retrieves all Digimon and API info. |
| GET    | /digi/digimon/name/:name| Retrieves one episode.  |
| GET    | /digi/digimon/att/:attribute| Retrieves all digimon with the same attribute.  |
| GET    | /digi/digimon/stage/:stage| Retrieves all digimon of the same stage.  |
| GET    | /digi/digimon/num/:num| Retrieves a specific Digimon based on its numbered position in the API  |
| POST  | /digi/digimon   | Creates a Digimon based on the JSON body submitted   |
| PUT    | /digi/digimon/name/:name| Updates a Digimon's object file based on the JSON submitted.    |
| DELETE | /digi/digimon/name/:name | Deletes the digimon object by name    |
