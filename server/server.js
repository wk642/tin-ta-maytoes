import express, { json } from "express";
import cors from "cors";
import pgPromise from "pg-promise";
import 'dotenv/config';

const app = express();
const port = 5000;

app.use(cors());
app.use(json());

// connect to database
const pgp = pgPromise();
console.log("db_url", process.env_TINTAMAYTOES_DB_URL);
const db = pgp(process.env.TINTAMAYTOES_DB_URL);

// Testing to make sure it connects to the back end
app.get("/test-connection", function(req, res) {
  res.json("Welcome! Back end to Tin - Ta - Maytoes is now connected");
});

// GET one thread by id - /threads/id
// Get the id of the thread and parse it from string to integer 
// Fetch the thread
// Fetch the question for the thread
// Fetch the choices for the for the question
// Combine the questions and  choices
// Send the response back

// GET a random question with ID 4 or 5
app.get("/initialQuestion", async (req, res) => {
  const initialQuestionIds = [4, 5];
  const randomId = initialQuestionIds[Math.floor(Math.random() * initialQuestionIds.length)];

  try {
    const question = await db.one("SELECT id, text FROM questions WHERE id = $1", [randomId]);
    res.json(question);
  } catch (error) {
    console.error("Error fetching random initial question:", error);
    res.status(500).json({ error: "Failed to fetch question" });
  }
});

// GET all the questions for scenario list
app.get("/allquestions", async (req, res) => {
  try {
    const questions = await db.manyOrNone("SELECT text FROM questions");
    res.json(questions.map(questions => questions.text)); 
  } catch (error) {
    console.error("Error fetching all questions:", error);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

// // GET a specific question and the choices - ScenarioGamePlay
app.get("/questions/:id", async (req, res) => {
  const questionId = parseInt(req.params.id);

  if (isNaN(questionId)) {
    return res.status(400).json({ error: "Invalid question ID" });
  }

  try {
    const question = await db.oneOrNone("SELECT id, text FROM questions WHERE id = $1", [questionId]);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    const choices = await db.many(
      `SELECT id, text, value
       FROM choices
       WHERE question_id = $1
       ORDER BY RANDOM()
       LIMIT 2`,
      [questionId]
    );

    res.json({ question, choices });
  } catch (error) {
    console.error(`Error fetching question ${questionId}:`, error);
    res.status(500).json({ error: `Failed to fetch question ${questionId}` });
  }
});

app.listen(port, function() {
  console.log("Server is running on port " + port);
});