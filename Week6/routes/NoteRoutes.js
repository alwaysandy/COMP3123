const noteModel = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
noteRoutes.post('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    const note = new noteModel(req.body.content);
    note.save().then((data) => {
        return res.sendStatus(201);
    }).catch((err) => {
        return res.status(500).send(err);
    });
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRoutes.get('/notes', (req, res) => {
    //TODO - Write your code here to returns all note
    noteModel.find({}).exec()
        .then((data) => {
            return res.send(data)
        })
        .catch((err) => {
            return res.status(500).send(err)
        });
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get('/notes/:noteId', (req, res) => {
    //TODO - Write your code here to return onlt one note using noteid
    noteModel.findById(req.params.noteId).exec()
        .then((data) => {
            return res.send(data)
        })
        .catch((err) => {
            return res.status(500).send(err)
        });
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    noteModel.findByIdAndUpdate(req.params.noteId, req.body.content).exec()
        .then(() => {
            return res.sendStatus(204);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete('/notes/:noteId', (req, res) => {
    //TODO - Write your code here to delete the note using noteid
    noteModel.findByIdAndDelete(req.params.noteId).exec()
        .then(() => {
            return res.sendStatus(204);
        })
        .catch((err) => {
            return res.status(500).send(err);
        });
});

module.exports = noteRoutes;
