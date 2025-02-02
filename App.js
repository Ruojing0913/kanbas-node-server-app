import express from 'express'
import cors from "cors";

import Hello from "./Hello.js"

import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";

const app = express()

app.use(cors());     

Lab5(app)

Hello(app)    

CourseRoutes(app);
ModuleRoutes(app);

app.listen(process.env.PORT || 4000)