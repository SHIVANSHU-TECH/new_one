const Jobs = require("../models/opportunitySchema");

const createJobs = async (req, res) => {
  try {
    const { title, DeadlineDate, description, companyName, link } = req.body;

    if (!title || !DeadlineDate || !description || !companyName || !link) {
      return res
        .status(401)
        .json({ success: false, message: "Enter the required credentials" });
    }

    const job = await Jobs.findOne({ title, createdBy: req.user._id });

    if (job) {
      return res
        .status(401)
        .json({ success: false, message: "Job opportunity already present" });
    } else {
      const newJob = await Jobs.create({
        title,
        DeadlineDate,
        description,
        companyName,
        link,
        createdBy: req.user._id,
      });

      return res.status(200).json({
        success: true,
        message: "Job opportunity created successfully",
        newJob,
      });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Internal Server error" });
  }
};

const getJobs = async (req, res) => {
  try {
    const allJobs = await Jobs.find({ status: "approved" });
    if (!allJobs) {
      return res
        .status(401)
        .json({ success: false, message: "Jobs not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully fetched all jobs",
      allJobs,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Internal sever error" });
  }
};

const dashboardJobs = async (req, res) => {
  try {
    const allJobs = await Jobs.find({ status: "inVerification" });
    if (!allJobs) {
      return res
        .status(401)
        .json({ success: false, message: "Jobs not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully fetched requested jobs",
      allJobs,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Internal sever error" });
  }
};
const rejectedJobs = async (req, res) => {
  try {
    const allJobs = await Jobs.find({ status: "rejected" });
    if (!allJobs) {
      return res
        .status(401)
        .json({ success: false, message: "Jobs not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully fetched rejected jobs",
      allJobs,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Internal sever error" });
  }
};

const updateJobs = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ success: false, message: "ID not found" });
    }

    const job = await Jobs.findByIdAndUpdate(id, req.body, {
      new: true,
      useFindAndModify: false,
    });

    if (!job) {
      return res.status(401).json({ success: false, message: "Job not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Job updated successfully", job });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Internal server error" });
  }
};

const deleteJob = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(401).json({ success: false, message: "ID not found" });
    }

    const job = await Jobs.findOne({ _id: id });

    if (!job) {
      return res.status(401).json({ success: false, message: "Job not found" });
    }

    job = await Jobs.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: "Job deleted successfully", job });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createJobs,
  deleteJob,
  updateJobs,
  getJobs,
  rejectedJobs,
  dashboardJobs,
};
