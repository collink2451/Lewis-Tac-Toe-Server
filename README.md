# Tic-Tac-Toe Server

Node.js/Express backend for the Tic-Tac-Toe game. Manages a persistent leaderboard stored in MySQL. Pairs with the [tictactoe-client](../tictactoe-client) frontend.

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/scoreboard` | Increment a user's score |
| `GET` | `/api/scoreboard` | Get the full leaderboard |

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MySQL (via mysql2)

## Setup

### Requirements

- Node.js 18+
- MySQL instance with the following table:

```sql
CREATE TABLE leaderboard (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    score INT NOT NULL DEFAULT 0
);
```

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory:

```env
PORT=3000
MYSQL_HOST=localhost
MYSQL_USER=your_mysql_user
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=tictactoe
```

3. Start the server:

```bash
npm start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the server |
