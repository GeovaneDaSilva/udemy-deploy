
"use strict";
const axios = require('axios');
const Time = require('../database/model/time')

const getTime = async(req, res) => {

  try {

    res.json({
      ok: true,
      msg: 'Deploy IS READY IN JENKINS --ALRIGHT!',
    })
  } catch (error) {
    console.log(error);
    return error
  }

}



module.exports = {
  getTime
};

