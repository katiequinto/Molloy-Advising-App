import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CourseResults from './course_results';
import '../CSS/main';
import '../CSS/media';
import '../CSS/login';
import '../CSS/logout';

class CourseSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isResultsVisible: false
    };
  }

  render() {
    return(
      <div>
    <table id="courseSearchTable">
      <tbody>
              <tr>
                  <td className="cstTitle"><label>Term :</label></td>
                  <td>
                      <select className="cstSelect">
                          <option value="2020 Spring - All Terms">2020 Spring - All Terms</option>
                          <option value="2020 Winter Intersession">2020 Winter Intersession</option>
                          <option value="2019 Fall Session 2">2019 Fall Session 2</option>
                          <option value="2019 Fall Session 1">2019 Fall Session 1</option>
                          <option value="2019 Fall">2019 Fall</option>
                      </select>
                  </td>
              </tr>
              <tr>
                  <td className="cstTitle">Subject :</td>
                  <td>
                      <select className="cstSelect">
                          <option value="ALL">ALL</option>
                          <option value="Accounting">Accounting</option>
                          <option value="American Sign Language">American Sign Language</option>
                          <option value="Arabic">Arabic</option>
                          <option value="Art">Art</option>
                          <option value="Biology">Biology</option>
                          <option value="Business">Business</option>
                          <option value="Business Law">Business Law</option>
                          <option value="Cardiovascular Technology">Cardiovascular Technology</option>
                          <option value="Chemistry">Chemistry</option>
                          <option value="Clin Mental Health Counseling">Clin Mental Health Counseling</option>
                          <option value="Communication Arts">Communication Arts</option>
                          <option value="Computer Information Systems">Computer Information Systems</option>
                          <option value="Computer Science">Computer Science</option>
                          <option value="Core">Core</option>
                          <option value="Criminal Justice">Criminal Justice</option>
                          <option value="Earth Science">Earth Science</option>
                          <option value="Economics">Economics</option>
                          <option value="Education">Education</option>
                          <option value="English">English</option>
                          <option value="English as a Second Language">English as a Second Language</option>
                          <option value="Environmental Science">Environmental Science</option>
                          <option value="Ethics">Ethics</option>
                          <option value="Finance">Finance</option>
                          <option value="First Year Studies Program">First Year Studies Program</option>
                          <option value="French">French</option>
                          <option value="Geography">Geography</option>
                          <option value="Gerontology">Gerontology</option>
                          <option value="Health Service Leadership">Health Service Leadership</option>
                          <option value="History">History</option>
                          <option value="Honors">Honors</option>
                          <option value="Interdisciplinary Studies">Interdisciplinary Studies</option>
                          <option value="Italian">Italian</option>
                          <option value="Legal Studies">Legal Studies</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Mathematics">Mathematics</option>
                          <option value="Music">Music</option>
                          <option value="New Media">New Media</option>
                          <option value="Nuclear Medicine Technology">Nuclear Medicine Technology</option>
                          <option value="Nursing">Nursing</option>
                          <option value="Philosophy">Philosophy</option>
                          <option value="Physical Education">Physical Education</option>
                          <option value="Physics">Physics</option>
                          <option value="Political Science">Political Science</option>
                          <option value="Psychology">Psychology</option>
                          <option value="Respiratory Care">Respiratory Care</option>
                          <option value="Social Work">Social Work</option>
                          <option value="Sociology">Sociology</option>
                          <option value="Spanish">Spanish</option>
                          <option value="Speech-Language Pathology/Audi">Speech-Language Pathology/Audi</option>
                          <option value="St. Thomas Aquinas Program">St. Thomas Aquinas Program</option>
                          <option value="Study Abroad Program">Study Abroad Program</option>
                          <option value="Theatre Arts">Theatre Arts</option>
                          <option value="Theology and Religious Studies">Theology and Religious Studies</option>

                      </select>
                  </td>
              </tr>
              <tr>
                  <td className="cstTitle">Title :</td>
                  <td>
                      <input type="text" className="cstInput" />
                  </td>
              </tr>
              <tr>
                  <td className="cstTitle">Course Code :</td>
                  <td>
                      <input type="text" className="cstInput" />
                  </td>
              </tr>
          </tbody>
    </table>
      <div className="searchButtonDiv">
          <Button
          id="submitButton"
          variant="contained"
          color="primary"
          onClick={() => this.setState({ isResultsVisible: true })}>
          Search
          </Button>
      </div>
      { this.state.isResultsVisible ? <CourseResults /> : null }
    </div>
    )
  }
  }


export default CourseSearch;
