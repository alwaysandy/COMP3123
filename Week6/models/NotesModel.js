const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription: {
        type:String,
        required: true
    },
    priority: {
        type: String,
        required: true,
        enum: ['LOW', 'MEDIUM', 'HIGH']
    },
    dateAdded: {
        type: Date,
        required: true
    },
    dateUpdated: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('NotesModel', noteSchema)