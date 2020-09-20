const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const port = process.argv.slice(2)[0];
const app = express();
app.use(bodyParser.json());



const URL = `http://localhost://${port}`
const DATABASE_SERVICE = `http://localhost:8083`

app.get('/alarms', (req, res) => {
    console.log('Returning alarms list');
    request.get({
        headers: {
            "content-type": "application/json"
        },
        url: `${DATABASE_SERVICE}/alarms`
    }, (err, response, body) => {
        if (!err) {

            res.status(200).send({ message: `Get all Alarms list`, data: res.body.alarms });
        } else {
            res.status(400).send({ problem: `Alarms with issue ${err}` });
        }
    })
});

app.get('/alarms/:starttime/:endtime/:alarmtype', (req, res) => {
    console.log('Returning alarms within given start time, end time and alarm type');
    
    request.get({
        headers: {
            "content-type": "application/json"
        },
        url: `${DATABASE_SERVICE}/alarms`,
        qs: { starttime: starttime, endtime: endtime, alarmtype: alarmtype }
    }, (err, response, body) => {
        if (!err) {
        	const filteredAlarms = res.body.alarms;
            res.status(200).send({ message: `Get filtered Alarms`, data: filteredAlarms });
        } else {
            res.status(400).send({ problem: `Alarms with issue ${err}` });
        }
    })
});

app.get('/videos', (req, res) => {
    console.log('Returning recorded videos list');
    request.get({
        headers: {
            "content-type": "application/json"
        },
        url: `${DATABASE_SERVICE}/videos`
    }, (err, response, body) => {
        if (!err) {
        	const videos = res.body.videos;
            res.status(200).send({ message: `Get recorded videos`, data: videos });
        } else {
            res.status(400).send({ problem: `Videos with issue ${err}` });
        }
    })
});


console.log(`microservice_2 listening on port ${port}`);
app.listen(port);