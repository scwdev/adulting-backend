const { Schema, model } = require("mongoose")

const taskSchema = new Schema(
    {
        username: {type: String, required: true},
        name: {type: String, required: true},
        frequency: {type: Number, default: 7},
        lastDone: Number,
        tags: [String],
        checklist: [{name: String, checked: {type: Boolean, default: false}}]
    },
    {timestamps: true}
)

const Task = model("Task", taskSchema)

module.exports = Task