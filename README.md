# Expense Tracker

## Project Description
The Expense Tracker is a web-based application designed to help users manage and monitor their personal finances effectively. This tool allows users to track their income and expenses, categorize transactions, and visualize their spending patterns through intuitive charts and reports.

## Project Objectives

- Create a user-friendly interface for managing daily financial transactions
- Enable users to add, edit, and delete income and expense entries
- Implement transaction categorization for better expense organization
- Provide visual representations of spending patterns through charts
- Calculate and display budget summaries and financial insights
- Ensure data persistence and security
- Support multiple users with secure authentication
- Generate downloadable reports for financial analysis

## Features
- Income and expense tracking
- Category management
- Budget planning
- Data visualization
- Report generation
- Secure user authentication
- Mobile-responsive design

This project aims to help users make informed financial decisions by providing a clear overview of their spending habits and financial status.


## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Installation Steps
1. Clone the repository:
```bash
git clone https://github.com/buddshashita24/expense-tracker.git
cd expense-tracker
```

2. Install dependencies:
```bash
npm install
```


3. Start the development server:
    for frontend:  npm run dev
    for backend:  npx nodemon
```

The application will be available at `http://localhost:5000`


## API Documentation

### Authentication Endpoints

#### POST /api/auth/register
- Register a new user
- Body: `{ "username": "string", "email": "string", "password": "string" }`
- Returns: User object with JWT token

#### POST /api/auth/login
- Login existing user
- Body: `{ "email": "string", "password": "string" }`
- Returns: JWT token

### Transaction Endpoints

#### GET /api/transactions
- Retrieve all transactions for authenticated user
- Headers: Authorization Bearer token
- Returns: Array of transaction objects

#### POST /api/transactions
- Create new transaction
- Headers: Authorization Bearer token
- Body: `{ "amount": "number", "category": "string", "type": "income|expense", "date": "date" }`
- Returns: Created transaction object

#### PUT /api/transactions/:id
- Update existing transaction
- Headers: Authorization Bearer token
- Params: transaction ID
- Returns: Updated transaction object

#### DELETE /api/transactions/:id
- Delete transaction
- Headers: Authorization Bearer token
- Params: transaction ID
- Returns: Success message

### Category Endpoints

#### GET /api/categories
- Retrieve all categories
- Headers: Authorization Bearer token
- Returns: Array of category objects

#### POST /api/categories
- Create new category
- Headers: Authorization Bearer token
- Body: `{ "name": "string", "type": "income|expense" }`
- Returns: Created category object