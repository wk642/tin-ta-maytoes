import express, { json } from "express";
import cors from "cors";
import pgPromise from "pg-promise";

const app = express();
const port = 5000;

app.use(cors());
app.use(json());

// connect to database
const pgp = pgPromise();
const db = pgp("postgres://tpl622_6@localhost:5432/tintamaytoes");

// Testing to make sure it connects to the back end
app.get("/test-connection", function(req, res) {
  res.json("Welcome! Back end to Tin - Ta - Maytoes is now connected");
});

// GET one thread by id - /threads/id
app.get('/threads/:id', async (req, res) => {
  // Get the id of the thread and parse it from string to integer 
  const threadId = parseInt(req.params.id);

  try {
    // Fetch the thread
    const threadResult = await db.query('SELECT * FROM threads WHERE id = $1', [threadId]);
    const thread = threadResult[0];

    if (!thread) {
      return res.status(404).json({ error: 'Thread not found' });
    }

    // Fetch the question for the thread
    const threadQuestion = await db.query(
      `SELECT questions.*, threadquestions.choice_id, threadquestions.created_at as question_created_at, threadquestions.answered_at
       FROM threadquestions threadquestions
       JOIN questions questions ON threadquestions.question_id = questions.id
       WHERE threadquestions.thread_id = $1
       ORDER BY threadquestions.created_at`,
      [threadId]
    );
    const questions = threadQuestion;

    // Fetch the choices for the for the question
    for (const question of questions) {
      const threadChoices = await db.query(
        'SELECT * FROM choices WHERE question_id = $1',
        [question.id]
      );
      question.choices = threadChoices;
    }

    // Combine the questions and  choices
    const response = {
      ...thread,
      questions,
    };

    // Send the response back
    res.json(response);
  } catch (error) {
    console.error('Error fetching thread:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, function() {
  console.log("Server is running on port " + port);
});