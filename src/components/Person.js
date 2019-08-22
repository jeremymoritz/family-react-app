import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ firstName, dob, bio, onDeleteClick }) => {
  function zeroPad(number, digits = 2) {
    const pad = '0'.repeat(digits);

    return `${pad}${number}`.slice(-digits);
  }

  function getAgeFromDob() {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  function getImgUrl() {
    if (!(firstName && dob)) {
      return null;
    }

    const imgPath = 'http://moritzfamily.com/img/family';

    return `${imgPath}/${firstName.toLowerCase()}-${zeroPad(getAgeFromDob())}.jpg`;
  }

  return (
    <article className="person">
      <section>
        <h3>{firstName}</h3>
        <h4>{dob}</h4>
        <p>{bio}</p>
        <button className="delete" onClick={onDeleteClick}>
          &times;
        </button>
      </section>
      <aside>{getImgUrl() ? <img src={getImgUrl()} alt={firstName} /> : ''}</aside>
    </article>
  );
};

Person.propTypes = {
  firstName: PropTypes.string.isRequired,
  dob: PropTypes.string,
  bio: PropTypes.string,
  onDeleteClick: PropTypes.func.isRequired
};

export default Person;
