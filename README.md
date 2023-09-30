# Mini-Football App API

React Front-end : https://github.com/footballApp-frontend

## Overview
A simple extensible JSON API developed using TypeScript, NodeJS (Express). Utilized multiple libraries to implement features such as image uploading. Dockerized application for easy deployment. 

---

<b>WIP : This application can evolve as an app that manages players and teams for a football game / football app. At the moment there is no database and the information that is registered is stored in memory.

---
### 🔥 Features 
 - Register a new player by specifying role, image and name.
 - Return a list of players.
 - Get details about a player.

### ⌚ Planned Features
- <b>Implement database storage to introduce data durability.
- Register a team.
- Manage players in the team.
- Alter formation for a team and assign players in slots based on their role.
- Return information about the formation of the team

### 🛒 Improvements after application becomes more complex
- Using dedicated controller classes for endpoints and passing in interfaces in their constructors that they can call internally.
- Writing tests for the services, endpoints and utility functions.
- Changing image upload storage location from filesystem to an external blob storage resulting in more scalability as the webserver will be stateless and multiple instances can use access the external blob storage. 


## Env Variables

To deploy this application, set:
```PORT -> Controls the port on which the server listens```
```NODE_ENV -> development | production```

## Schema for API 

### <b><span style="color:#f64">POST</span> /players  
 Content-Type : multipart/form-data


Request Body:

- displayName (string): `The display name of the player.`
- position (string): `The position of the player. Allowed values are "Goalkeeper," "Defender," "Mid-Fielder," or "Striker."`
- profileImg (Image File Binary): `The profile image of the player.`

Example Request Body:

```json
{
    "displayName": "John Doe",
    "position": "Striker",

    "profileImg": 'BINARY'
}
```

RESPONSE:

```json
{
    "message": "Added new player with id: 1",
   
}
```
---

<span style="color:green">GET</span> /players/{id}   

```json
{
    "id" : 3,
    "displayName": "John Doe",
    "position": "Striker",

    "profileImg": "www.Link/To/Image.png"
}

```
---


<span style="color:green">GET</span> /players/ 

```json

[
    {
    "id" : 3,
    "displayName": "John Doe",
    "position": "Striker",

    "profileImg": "www.Link/To/Image.png"
},
{
    "id" : 4,
    "displayName": "Man Sullivan",
    "position": "Defender",

    "profileImg": "www.Link/To/Image2.png"
}
]
``````