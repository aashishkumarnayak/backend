

# Yoga Classes Admission System

This project implements a simple admission system for Yoga classes, including a user registration form and a payment system.

## Live Project Link

[Live Link](https://yoga-classes-addmission-form.netlify.app/)

## Project Demo Video 

[Demo Video](https://drive.google.com/file/d/11Y8mai3JOy05sRaYWynLf5q18NObd41A/view?usp=drive_link)




## Database Schema

The MongoDB database schema consists of two collections: `User` and `Payment`.

### User Collection

- `_id`: ObjectId (Primary Key)
- `fullName`: String
- `dateOfBirth`: Date
- `gender`: String
- `contactNumber`: String
- `emailAddress`: String (Unique)
- `address`: String
- `preferredBatch`: String

### Payment Collection

- `_id`: ObjectId (Primary Key)
- `user`: ObjectId (Foreign Key referencing User._id)
- `amount`: Number
- `status`: String (Enum: 'success', 'pending', 'failed', Default: 'pending')
- `timestamp`: Date

## ER Diagram Explanation

The ER (Entity-Relationship) diagram illustrates the relationships between the `User` and `Payment` collections.

- **User Collection:**
  - Each user is uniquely identified by an `_id` (ObjectId) acting as the primary key.
  - User information includes full name, date of birth, gender, contact number, email address, address, and preferred batch.
  - The `preferredBatch` field indicates the user's choice of yoga class batch.

- **Payment Collection:**
  - Each payment is uniquely identified by an `_id` (ObjectId) acting as the primary key.
  - The `user` field is a foreign key referencing the `User._id`, establishing a relationship between the two collections.
  - Additional payment details include the payment amount, status (success, pending, failed), and a timestamp.

## ER Diagram
```
+-------------------+          +-------------------+
|       User        |          |      Payment      |
+-------------------+          +-------------------+
| _id: ObjectId (PK)|1---*     | _id: ObjectId (PK)|
| fullName: String  |<-------1 | user: ObjectId (FK)|
| dateOfBirth: Date |          | amount: Number    |
| gender: String    |          | status: String    |
| contactNumber: String |      | timestamp: Date   |
| emailAddress: String   |      +-------------------+
| address: String   |
| preferredBatch: String |
+-------------------+
```


## Backend (Node.js with Express and MongoDB)

The backend is built using Node.js, Express, and MongoDB. The server code is available in the `server` directory.

### Setting up the Backend

1. Install dependencies: `npm install`
2. Run the server: `npm start`

## Frontend (React)

The frontend is implemented using React. The client code is available in the `client` directory.

### Setting up the Frontend

1. Install dependencies: `npm install`
2. Run the development server: `npm start`

## Usage

1. Open the frontend in your browser and fill out the registration form.
2. Upon successful registration, you will be redirected to the payment page.
3. Complete the payment process.



