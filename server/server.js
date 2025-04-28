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
app.listen(port, function() {
  console.log("Server is running on port " + port);
});