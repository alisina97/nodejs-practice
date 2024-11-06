require("dotenv").config;

const jwt = require("jsonwebtoken");

const authenticateToken = require("./utilities");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Task = require("./models/task.model");

const app = express();

app.use(cors({origin: "*"}));