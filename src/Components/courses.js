import './styles/courses.css'

import tutor1 from "./images/tutor1.jpeg"
import tutor2 from "./images/tutor2.jpeg"
import tutor3 from "./images/tutor3.jpeg"
import tutor4 from "./images/tutor4.jpeg"
import course_img1 from "./images/course_img1.png"
import course_img2 from "./images/course_img2.png"
import course_img3 from "./images/course_img3.png"
import course_img4 from "./images/course_img4.jpeg"
import course_img5 from "./images/course_img5.png"
import course_img6 from "./images/course_img6.jpeg"
import course_img7 from "./images/course_img7.png"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const courses = [
    {
      title: 'Javascript',
      duration: '3h 30m',
      level: 'Beginner',
      rating: 2.5,
      subscribers: '9,300',
      imageSrc: course_img1,
      tutor: {
        name: 'Ravi',
        avatar: tutor1
      }
    },
    {
      title: 'Data Structure',
      duration: '2h 15m',
      level: 'Advance',
      rating: 3.9,
      subscribers: '7,800',
      imageSrc: course_img2,
      tutor: {
        name: 'Sam',
        avatar: tutor2
      }
    },
    {
      title: 'OOPs using Java',
      duration: '1h 30m',
      level: 'Beginner',
      rating: 4.1,
      subscribers: '8,245',
      imageSrc: course_img3,
      tutor: {
        name: 'Vijay',
        avatar: tutor3
      }
    },
    {
      title: 'Machine Learning',
      duration: '2h 30m',
      level: 'Intermediate',
      rating: 4.5,
      subscribers: '3,245',
      imageSrc: course_img4,
      tutor: {
        name: 'Arya',
        avatar: tutor4
      }
    },
    {
      title: 'React JS',
      duration: '2h 30m',
      level: 'Intermediate',
      rating: 4.6,
      subscribers: '3,245',
      imageSrc: course_img5,
      tutor: {
        name: 'Arya',
        avatar: tutor4
      }
    },
    {
      title: 'Algorithms',
      duration: '2h 30m',
      level: 'Intermediate',
      rating: 4.5,
      subscribers: '3,245',
      imageSrc: course_img6,
      tutor: {
        name: 'Arya',
        avatar: tutor4
      }
    },
    {
      title: 'SQL',
      duration: '2h 30m',
      level: 'Intermediate',
      rating: 4.5,
      subscribers: '3,245',
      imageSrc: course_img7,
      tutor: {
        name: 'Arya',
        avatar: tutor4
      }
    }
  ];
  const coursesToShow = searchQuery
    ? courses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : courses;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>

      <div className="course-box">
        <div className="course-bar">
          <p className="course-text">Courses</p>
          <div className="search-box">
            <input
              className="input-search-box"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
      <div className="JavaScript-lesson-section">
      <select className='filter-box' >
          <option>Filter</option>
          <option >Subject</option>
          <option>Level of Difficulty</option>
          <option>Price</option>
          <option>Duration</option>
          <option>Ratings and Reviews</option>
        </select>
      <br/><br /><br></br>
      </div>
        <div className="course-Scroll">
          <div className="carousel-container">
            {coursesToShow.map((course, index) => (
              <div className="courses-card" key={index}>
                <Link to="/details1">
                  <div className="card-header">
                    <img
                      src={course.imageSrc}
                      className="card-img-top"
                      alt="Course"
                    />
                  </div>
                  <div className="card-body">
                    <div className="tutotrs-role">
                      <p>{course.title}</p>
                    </div>
                    <div className="level">
                      <i className="far fa-clock"></i>
                      {course.duration}&nbsp;&nbsp;&nbsp;
                      <i className="fad fa-signal-alt"></i>
                      {course.level}
                    </div>
                  </div>
                  <div className="card-footer">
                    <img
                      src={course.tutor.avatar}
                      className="card-footer-tutors-img"
                      alt="Tutor"
                    />
                    <p className="tutors-name">{course.tutor.name}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

  );
}

export default Courses;
