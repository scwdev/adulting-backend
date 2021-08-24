const { Schema, model } = require("mongoose")

const taskSchema = new Schema(
    {
        username: {type: String, required: true},
        name: {type: String, required: true},
        frequency: {
            number: Number,
            multiplier: Number
        },
        lastDone: Number,
        tags: [String],
        checklist: [String]
    },
    {timestamps: true}
)

const Task = model("Task", taskSchema)

module.exports = Task