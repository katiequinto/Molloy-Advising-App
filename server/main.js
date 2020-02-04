import { Meteor } from 'meteor/meteor';
import '../imports/collections/courses.js';

//console.log(process.env);
//process.env.MONGO_URL="mongodb://rich:7EhJM7hnV6dAPgwN@advisingmolloydb-b0iqm.mongodb.net:27017/admin"
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rich:7EhJM7hnV6dAPgwN@advisingmolloydb-b0iqm.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("molloyAdvising").collection("courses");
  // perform actions on the collection object
  client.close();
});
*/


Meteor.startup(() => {

/*
  Courses.insertMany([{
    _id: "5e2ee5791c9d440000e92df4",
    major_id: "1",
    course_id: "110",
    code: "CIS110",
    course_Name: "Database Design",
    course_Description: "Learn to connect tables"
  },
  {
    _id: "5e2e15321c9d4400009ee5bc",
    major_id: "2",
    course_id: "100",
    code: "CSC100",
    course_Name: "Programming I",
    course_Description: "Learn the basics of Javascript"
  },
  {
    _id: "5e2ee1251c9d440000e92df0",
    major_id: "2",
    course_id: "200",
    code: "CSC200",
    course_Name: "Programming II",
    course_Description: "Now the real fun begins"
  },
  {
    _id: "5e2ee49f1c9d440000e92df1",
    major_id: "2",
    course_id: "300",
    code: "CSC300",
    course_Name: "Programming III",
    course_Description: "now you get a 2nd horizontal monitor to work on now"
  },
  {
    _id: "5e2ee5a11c9d440000e92df5",
    major_id: "2",
    course_id: "420",
    code: "CSC110",
    course_Name: "Skynet world",
    course_Description: "You ready for a world of AIs"
  },
  {
    _id: "5e2ee7431c9d440000e92df6",
    major_id: "2",
    course_id: "364",
    code: "CSC364",
    course_Name: "Physics of Mario",
    course_Description: "Ya-hoo!"
  },
  {
    _id: "5e2ee8dc1c9d440000e92dfc",
    major_id: "3",
    course_id: "101",
    code: "MTH101",
    course_Name: "The Easy A",
    course_Description: "What's 1+1=?"
  },
  {
    _id: "5e2ee78a1c9d440000e92df7",
    major_id: "1",
    course_id: "112",
    code: "CIS112",
    course_Name: "Database Theory",
    course_Description: "Seriously, how do these tables connect?"
  },
  {
    _id: "5e2ee80a1c9d440000e92df8",
    major_id: "1",
    course_id: "203",
    code: "CIS203",
    course_Name: "Troubleshooting",
    course_Description: "Have you tried turning it off and on again?"
  },
  {
    _id: "5e2ee8421c9d440000e92df9",
    major_id: "1",
    course_id: "221",
    code: "CIS221",
    course_Name: "Networks I",
    course_Description: "The Seven layers of the OSI model are..."
  }]
)
*/
/*
  Meteor.publish('courses', function(per_page) {
    return Courses.find({}, { limit: per_page });
  });
  */
});
