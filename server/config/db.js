/**
 * File: db.js
 * Name: Saqib Hasan Siddiqi
 * Id: 301237796
 * Web App: Midterm- Book list
 */
module.exports = {
  //local MongoDB deployment ->
  //"URI": "mongodb+srv://SaqibSiddiqi:siddiqi@midterm.u4hou.mongodb.net/Midterm?retryWrites=true&w=majority"
  //using heroku
  "URI":  process.env.MONGODB_URI
};
