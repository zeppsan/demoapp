const insights = require('applicationinsights');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const connectionString = "InstrumentationKey=38d4d9b4-7108-4b8d-ac2a-bb8b2a79e898;IngestionEndpoint=https://northeurope-2.in.applicationinsights.azure.com/;LiveEndpoint=https://northeurope.livediagnostics.monitor.azure.com/"
const axios = require('axios');

insights.setup(connectionString)
        .setDistributedTracingMode(insights.DistributedTracingModes.AI_AND_W3C)
        .start();

app.use('/apicall', (req, res) => {
    res.send("asd");
});

app.use('/', (req, res) => {
    let customClient = new insights.TelemetryClient(connectionString);
    customClient.trackEvent({name: "my custom event"});
    res.send('Welcome to my website (DEV)!');
});


app.listen(port)