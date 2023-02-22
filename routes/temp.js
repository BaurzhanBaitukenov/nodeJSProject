const express = require("express");
const axios = require("axios");
const router = express.Router();

router
    .route("/")
    .get((req, res) => res.render('temp.ejs'))
    .post((req, res) => {
        const listUsers = async () => {
            try {
                const axiosResponse = await axios.get('http://api.ipstack.com/check?access_key=09b3fec099cf59bb0b9954a94ad25b47');
                res.send("<h1></h1>" +
                    "<p style='font-size:100px; '> Your country code: "+JSON.stringify(axiosResponse.data.country_code)+"</p>" +
                    "<p style='font-size:100px; '>And now we know your country</p>>" +
                    "<a href='temp'>Go back</a>");

            } catch (err) {
                console.error(err);

            }
        };

        listUsers();
    })

module.exports = router;


module.exports = router;
// module.exports = router;

