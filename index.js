'use strict';

// Generally called a handler
// has 2 parameters
// event: Always the ONE param you're sending in.
// context:

const AWS = require('aws-sdk');

exports.handler = async (event) => {


  const s3 = new AWS.s3();
  //s3.upload();
  console.log(JSON.stringify(event, undefined, 2));

  const result = event.a + event.b;

  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };
  return response;
};
