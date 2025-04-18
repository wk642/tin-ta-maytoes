-- create database

-- DROP the database first in case there's an existing one
DROP DATABASE tintamaytoes;

-- CREATE the database 
CREATE DATABASE tintamaytoes;

-- connect to the database
\connect tintamaytoes;

-- CREATE tables
-- threads

CREATE TABLE threads (
	id serial4 NOT NULL,
	favorites bool DEFAULT false NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	completed_at timestamptz NULL,
	player_name varchar NOT NULL,
	CONSTRAINT threads_pk PRIMARY KEY (id)
);


-- questions

CREATE TABLE questions (
	id serial4 NOT NULL,
	"text" varchar NOT NULL,
	CONSTRAINT questions_pk PRIMARY KEY (id)
);


-- choices

CREATE TABLE choices (
	id serial4 NOT NULL,
	question_id int4 NOT NULL,
	"text" varchar NOT NULL,
	value int4 NOT NULL,
	CONSTRAINT choices_pk PRIMARY KEY (id),
	CONSTRAINT choices_questions_fk FOREIGN KEY (question_id) REFERENCES public.questions(id)
);


-- followup

CREATE TABLE followup (
	choice_id int4 NOT NULL,
	question_id int4 NOT NULL,
	CONSTRAINT followup_choices_fk FOREIGN KEY (choice_id) REFERENCES public.choices(id),
	CONSTRAINT followup_questions_fk FOREIGN KEY (question_id) REFERENCES public.questions(id)
);


-- threadquestions

CREATE TABLE threadquestions (
	thread_id int4 NOT NULL,
	question_id int4 NOT NULL,
	choice_id int4 NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	answered_at timestamptz NULL,
	CONSTRAINT threadquestions_choices_fk FOREIGN KEY (choice_id) REFERENCES public.choices(id),
	CONSTRAINT threadquestions_questions_fk FOREIGN KEY (question_id) REFERENCES public.questions(id),
	CONSTRAINT threadquestions_threads_fk FOREIGN KEY (thread_id) REFERENCES public.threads(id)
);