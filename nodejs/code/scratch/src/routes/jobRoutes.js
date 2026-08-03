import express from 'express'
import { createJob, getAllJobs, updateJob } from '../controllers/jobController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const jobRoute = express.Router()

// api/user
jobRoute.post("/", authMiddleware, createJob)
jobRoute.get("/", getAllJobs )
jobRoute.put("/:id",authMiddleware, updateJob )




// jobRoute.delete("/", updateUser )


export default jobRoute