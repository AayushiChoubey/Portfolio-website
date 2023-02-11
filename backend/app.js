import express from 'express';
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import fs from "fs";

export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());


import {userRouter} from './routes/User.js';

app.use(express.json());
app.use("/api/v1", userRouter);

app.use(bodyParser.json())