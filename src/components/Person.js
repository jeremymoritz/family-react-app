import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FamilyForm from './FamilyForm';

function Person({ familyMember, onDeleteClick, onEditClick, onFamPut, editMode = false }) {
  const { firstName, dob, hobbies } = familyMember;

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

    return `http://moritzfamily.com/img/family/${firstName.toLowerCase()}-${zeroPad(
      getAgeFromDob()
    )}.jpg`;
  }

  function familyMemberInfo() {
    return (
      <>
        <h3>{firstName}</h3>
        <h4>{dob}</h4>
        <p>
          <strong>Hobbies:</strong> {hobbies}
        </p>
        <button className="delete" onClick={onDeleteClick}>
          &times;
        </button>
      </>
    );
  }

  return (
    <article className="person">
      <section>
        <FontAwesomeIcon
          icon={editMode ? 'eye' : 'pencil-alt'}
          className="edit-btn"
          onClick={onEditClick}
        />
        {editMode ? (
          <FamilyForm onFamilySubmit={onFamPut} famMemberToEdit={familyMember} />
        ) : (
          familyMemberInfo()
        )}
      </section>
      <aside>{getImgUrl() ? <img src={getImgUrl()} alt={firstName} /> : ''}</aside>
    </article>
  );
}

Person.propTypes = {
  familyMember: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string.isRequired,
    dob: PropTypes.string,
    hobbies: PropTypes.string
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onFamPut: PropTypes.func.isRequired,
  editMode: PropTypes.bool
};

export default Person;
