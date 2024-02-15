const Event = require("../models/eventModel");

const createEvent = async (req, res) => {
  try {
    console.log(req.body);
    const { title, DeadlineDate, description, category, image, link } =
      req.body;

    if (
      !title ||
      !DeadlineDate ||
      !description ||
      !category ||
      !image ||
      !link
    ) {
      return res
        .status(401)
        .json({ success: false, message: "Enter the required credentials" });
    }

    const event = await Event.findOne({ title, createdBy: req.user._id });

    if (event) {
      return res
        .status(401)
        .json({ success: false, message: "Event already present" });
    } else {
      const newEvent = await Event.create({
        title,
        DeadlineDate,
        description,
        category,
        image,
        createdBy: req.user._id,
        link,
      });

      return res.status(200).json({
        success: true,
        message: "Event created successfully",
        newEvent,
      });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Internal Server error" });
  }
};

const getEvent = async (req, res) => {
  try {
    const allEvents = await Event.find({ status: "approved" });
    if (!allEvents) {
      return res
        .status(401)
        .json({ success: false, message: "Events not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully fetched all events",
      allEvents,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Internal sever error" });
  }
};

const dashboardEvents = async (req, res) => {
  try {
    const allEvents = await Event.find({ status: "inVerification" });

    if (!allEvents || allEvents.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Events not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully fetched requested events",
      allEvents,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const rejectedEvents = async (req, res) => {
  try {
    const allEvents = await Event.find({ status: "rejected" });
    if (!allEvents) {
      return res
        .status(401)
        .json({ success: false, message: "Events not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully fetched rejected events",
      allEvents,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Internal sever error" });
  }
};

const updateEvents = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ success: false, message: "ID not found" });
    }

    const event = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
      useFindAndModify: false,
    });

    if (!event) {
      return res
        .status(401)
        .json({ success: false, message: "Event not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Event updated successfully", event });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Internal server error" });
  }
};

const deleteEvents = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(401).json({ success: false, message: "ID not found" });
    }

    const event = await Event.findOne({ _id: id });

    if (!event) {
      return res
        .status(401)
        .json({ success: false, message: "Event not found" });
    }

    event = await Event.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: "Event deleted successfully", event });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createEvent,
  getEvent,
  deleteEvents,
  rejectedEvents,
  updateEvents,
  dashboardEvents,
};
