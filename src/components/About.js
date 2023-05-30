import React from 'react';
import '../css/about.css'; // Import the CSS file

const About = (props) => {
    
const containerStyle = {
    '--bg-color': props.theme === 'light' ? 'white' : 'grey',
    '--text-color': props.theme === 'light' ? '#042743' : 'white',
  };

  return (
    <div style={containerStyle} className="about-container">
      <h2 className="about-heading">About Us</h2>
      <p className="about-paragraph">Welcome to TextUtils! This app allows you to perform various text-related operations and analysis. Whether you need to count characters, words, or sentences, convert text case, remove extra spaces, or generate Lorem Ipsum text, TextUtils has got you covered.</p>
      <p className="about-paragraph">TextUtils is designed to be user-friendly and intuitive. Simply enter your text in the provided input field, select the desired operation, and let TextUtils handle the rest.</p>
      <p className="about-paragraph">TextUtils is developed using React and powered by various libraries and tools to ensure a smooth and efficient text processing experience. Feel free to explore the app and make the most out of its features.</p>
      <p className="about-paragraph">If you have any feedback, suggestions, or issues, please don't hesitate to <span className="about-bold-text">reach out to us</span>. We value your input and strive to continuously improve TextUtils to meet your text manipulation needs.</p>
      <p className="about-paragraph">Thank you for using TextUtils!</p>
    </div>
  );
}

export default About;
