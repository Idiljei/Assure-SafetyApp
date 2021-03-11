DROP TABLE IF EXISTS emergency_contacts ON CASCADE;

CREATE TABLE emergency_contacts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone_number CHAR(10) NOT NULL
);