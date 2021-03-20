DROP TABLE IF EXISTS incident_types CASCADE;

CREATE TABLE incident_types (
  id SERIAL PRIMARY KEY NOT NULL,
  incident_type VARCHAR(255) NOT NULL
);