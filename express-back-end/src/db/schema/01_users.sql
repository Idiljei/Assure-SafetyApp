DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR (255) NOT NULL,
  phone_number VARCHAR(13) NOT NULL,
  date_of_birth VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  current_location VARCHAR(255) NOT NULL,
  img VARCHAR(255) NOT NULL
)

-- GRANT ALL PRIVILEGES ON TABLE users TO spice;
-- grant all on sequence posts_id_seq to spice;