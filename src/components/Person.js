import React from 'react';

const Person = props => {
  return (
    <article className="person">
      <h3>{props.firstName}</h3>
      <h4>{props.dob}</h4>
      <h5>{props.bio}</h5>
    </article>
  );
};

export default Person;
