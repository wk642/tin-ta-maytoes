-- create database

-- DROP the database first in case there's an existing one
DROP DATABASE tintamaytoes;

-- CREATE the database 
CREATE DATABASE tintamaytoes;

-- connect to the database
\connect tintamaytoes;

-- CREATE tables
-- ROUNDS tables
CREATE TABLE IF NOT EXISTS rounds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  points INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- FAVORITES tables
CREATE TABLE IF NOT EXISTS favscenarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  favorites BOOLEAN, 
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)