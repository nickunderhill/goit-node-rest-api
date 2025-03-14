# Node.js REST API - Домашнє завдання 5

This is a simple Node.js REST API for managing contacts. It allows you to
create, read, update, and delete contacts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/nickunderhill/goit-node-rest-api
   cd goit-node-rest-api
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASS=your_database_password
   JWT_SECRET=your_jwt_secret
   ```

## Usage

Start the server:

```sh
npm start
```

The server will be running on http://localhost:3000.

## API Endpoints

### Contacts

- **GET /api/contacts**: Get all contacts
- **GET /api/contacts/:id**: Get a contact by ID
- **POST /api/contacts**: Create a new contact
- **PUT /api/contacts/:id**: Update a contact by ID
- **PATCH /api/contacts/:id/favorite**: Update the favorite status of a contact
- **DELETE /api/contacts/:id**: Delete a contact by ID

### Authentication

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Log in a user
- **POST /api/auth/logout**: Log out a user
- **GET /api/auth/current**: Current user information
- **PATCH /api/auth/avatars**: Update user avatar

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. You need to include the
token in the `Authorization` header of your requests to protected endpoints.

### Register

```sh
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d '{
  "email": "user@example.com",
  "password": "password"
}'
```

### Login

```sh
curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{
  "email": "user@example.com",
  "password": "password"
}'
```

The response will include a JWT token:

```json
{
  "token": "your_jwt_token",
  "user": {
    "email": "user@example.com",
    "subscription": "starter"
  }
}
```

### Protected Endpoints

Include the token in the `Authorization` header for protected endpoints:

```sh
curl -X GET http://localhost:3000/api/contacts -H "Authorization: Bearer your_jwt_token"
```

### Update Avatar

To update the user's avatar, use the `/api/auth/avatars` endpoint with a `PATCH`
request. The request should include the avatar file in the `multipart/form-data`
format and the JWT token in the `Authorization` header.

```sh
curl -X PATCH http://localhost:3000/api/auth/avatars -H "Authorization: Bearer your_jwt_token" -F "avatar=@path_to_your_avatar_file"
```

The response will include the new avatar URL:

```json
{
  "avatarURL": "/avatars/your_avatar_filename"
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for
details.
