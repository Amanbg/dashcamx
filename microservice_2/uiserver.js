const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const port = process.argv.slice(2)[0];
const app = express();
app.use(bodyParser.json());



const URL = `http://localhost://${port}`

app.get('/alarms', (req, res) => {
    console.log('Returning alarms list');
    const alarms = res.body.alarms;
    res.send(alarms);
});

app.get('/alarms/:starttime/:endtime/:alarmtype', (req, res) => {
    console.log('Returning alarms within given start time, end time and alarm type');
    const alarms = res.body.alarms;
    res.send(alarms);
});

app.get('/videos', (req, res) => {
    console.log('Returning recorded videos list');
    const videos = res.body.videos;
    res.send(videos);
});


console.log(`microservice_2 listening on port ${port}`);
app.listen(port);