import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const CourseDetail = ({ course }) => {
  const { _id, course_id, subject_id, course_Name, course_Description } = course;

  return (
      <tr>
        <td><label className="subjectId">{subject_id}{course_id}</label></td>
        <td><label className="courseName">{course_Name}</label></td>
        <td><label className="courseDescription">{course_Description}</label></td>
        <td className="addButton"><Button variant="outlined" color="primary">Add</Button></td>
      </tr>
  );
};

export default CourseDetail;
