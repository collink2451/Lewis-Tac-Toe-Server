const { pool } = require('../db');

const incrementScore = async (username) => {
  await pool.query(
    'INSERT INTO leaderboard (username, score) VALUES (?, 1) ON DUPLICATE KEY UPDATE score = score + 1',
    [username]
  );
};

const findAll = async () => {
  const [rows] = await pool.query('SELECT username, score FROM leaderboard ORDER BY score DESC');
  return rows;
};

module.exports = { incrementScore, findAll };
