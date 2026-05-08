import { Job } from "../models/job.js";

const createJob = async (req, res, next) => {
  try {
     const {jobTitle, jobDescription, salary, location, jobType} = req.body

    // console.log(req.body)

    if(!jobTitle || !jobDescription) throw new Error("job title and description are required.")

    let job = await Job.create({
        ...req.body
    })

    console.log(job)

    return res.status(200).json({
        status:true,
        message  :"job added successfully"
    })
  } catch (error) {
    next(error);
  }
};

const getSingleJob = (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
};

const getAllJobs = async (req, res, next) => {
  try {

    let allJobs = await Job.find()

    return res.status(200).json({
        status : true,
        message :"all jobs retrievel",
        data: allJobs
    })

  } catch (error) {
    next(error);
  }
};

const updateJob = async (req, res, next) => {

    // console.log(req.params.id) 

    
    try {
      const id = req.params.id

    //   console.log(req.body)


      const job = await Job.findOne({_id: id})

      if(job) {
        const updateJob = await Job.findByIdAndUpdate(id,{...req.body})
    }
    console.log(updateJob)

// console.log(job)



    return res.status(200).json({
        status:true,
        message : "job update successfully",
        data : job
    })
  } catch (error) {
    next(error);
  }
};

const deleteJob = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

export { createJob, getSingleJob, getAllJobs, updateJob, deleteJob };
