const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/weekday-classes', async (req, res) => {
    console.log('Request received'); 
    try {
        const response = await axios.get('https://alignballetmethod.com/product/weekday-main-location-open-adult-los-angeles-ballet-classes/');
        const html = response.data;
        const $ = cheerio.load(html);

        const classes = [];
        $('#day-month-time-level-instructor option').each((index, element) => {
            const classText = $(element).text();
            const classValue = $(element).val();
            if (classValue) {
                classes.push({ text: classText, value: classValue });
            }
        });

        res.json(classes); 
    } catch (error) {
        console.error('Error fetching classes:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/api/weekdend-classes', async (req, res) => {
    console.log('Request received'); 
    try {
        const response = await axios.get('https://alignballetmethod.com/product/weekend-main-location-open-adult-los-angeles-ballet-classes/');
        const html = response.data;
        const $ = cheerio.load(html);

        const classes = [];
        $('#day-month-time-level-instructor option').each((index, element) => {
            const classText = $(element).text();
            const classValue = $(element).val();
            if (classValue) {
                classes.push({ text: classText, value: classValue });
            }
        });

        res.json(classes); 
    } catch (error) {
        console.error('Error fetching classes:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});