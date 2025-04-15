import express, { json } from "express";
import cors from "cors";
import pgPromise from "pg-promise";

const app = express();
const port = 5000;