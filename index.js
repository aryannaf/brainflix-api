const express = require('express');
const app = express();
const fs = require('fs');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const videoRoutes = require('./routes/videos');
app.use('/videos', videoRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})