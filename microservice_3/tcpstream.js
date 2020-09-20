const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const port = process.argv.slice(2)[0];

const socketIo = require("socket.io");

const io = socketIo(server);

const URL = `http://localhost:${port}`;

io.on("connection", (socket) => {
    console.log("connection made");
    sendMessageToDashcam(socket);

    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
});

const sendMessageToDashcam = socket => {

    app.post('/config', (req, res) => {
        request.post({
            headers: {
                "content-type": "application/json"
            },
            url: `${URL}/config`,
            body: {
                type: "COMMAND",
                imei: 12345678,
                command: "Reboot"
            }
        }, (err, response, body) => {
            if (!err) {
                res.status(202).send({ message: `${req.body.imei} configured` });
            } else {
                res.status(400).send({ problem: `${imei} configuration responded with issue ${err}` });
            }
        })
    });
    socket.emit("/config", response);
}


console.log(`microservice_3 listening on port ${port}`);
app.listen(port);