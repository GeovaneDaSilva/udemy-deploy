
"use strict";
const axios = require('axios');
const Time = require('../database/model/time')

const getTime = async(req, res) => {

  try {

    res.json({
      ok: true,
      msg: 'Deployment is success --HEROKU!',
    })
  } catch (error) {
    console.log(error);
    return error
  }

}



module.exports = {
  getTime
};

