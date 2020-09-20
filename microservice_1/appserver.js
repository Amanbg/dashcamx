const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const port = process.argv.slice(2)[0];
const app = express();
app.use(bodyParser.json());

const URL = `http://localhost:${port}`

app.post('/login', (req, res) => {
    request.post({
        headers: {
            "content-type": "application/json"
        },
        url: `${URL}/login/`,
        body: {
            type: 'LOGIN',
            imei: 12345678
        }
    }, (err, response, body) => {
        if (!err) {

            res.status(202).send({ message: `${req.body.imei} logged in successfully` });
        } else {
            res.status(400).send({ problem: `Login responded with issue ${err}` });
        }
    })
});


app.post('/alarm', (req, res) => {
    request.post({
        headers: {
            "content-type": "application/json"
        },
        url: `${URL}/alarm`,
        body: {
            type: "ALARM",
            alarm_type: "CRASH",
            alarm_time: "2020-08-18 16:45:35",
            latitude: 32.378903,
            longitude: -122.457324,
            file_list: ["a.mp4", "b.mp4"]
        }
    }, (err, response, body) => {
        if (!err) {

            res.status(202).send({ message: `${req.body.type} Alarm triggered` });
        } else {
            res.status(400).send({ problem: `Alarm responded with issue ${err}` });
        }
    })
});


app.post('/location', (req, res) => {
    request.post({
        headers: {
            "content-type": "application/json"
        },
        url: `${URL}/location`,
        body: {
            type: "LOCATION",
            location_time: "2020-08-18 16:45:35",
            latitude: 32.378903,
            longitude: -122.457324
        }
    }, (err, response, body) => {
        if (!err) {

            res.status(202).send({ message: `Location with latitude ${req.body.latitude} & longitude ${req.body.longitude} captured.` });
        } else {
            res.status(400).send({ problem: `Location captured responded with issue ${err}` });
        }
    })
});


app.post('/video', (req, res) => {
    request.post({
        headers: {
            "content-type": "application/json"
        },
        url: `${URL}/video`,
        body: {
            imei: 12345678,
            filename: "sample.mp4",
            data: video_data
        }
    }, (err, response, body) => {
        if (!err) {

            res.status(202).send({ message: `${req.body.filename} video uploaded` });
        } else {
            res.status(400).send({ problem: `Video upload responded with issue ${err}` });
        }
    })
});


console.log(`microservice_1 listening on port ${port}`);
app.listen(port);