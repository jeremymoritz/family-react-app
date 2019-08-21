import React, { useState } from 'react';
import TextInput from './TextInput';

const emptyFamMember = {
  id: null,
  firstName: '',
  dob: '',
  bio: ''
};

function FamilyForm(props) {
  const [famMember, setFamMember] = useState(emptyFamMember);

  function handleSubmit(event) {
    event.preventDefault();

    const newId = Math.floor(Math.random() * 99);

    props.onFamilySubmit({ ...famMember, id: newId });
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setFamMember({ ...famMember, [name]: value });
  }

  return (
    <section>
      <h2>Add a Family Member</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="First Name"
          name="firstName"
          onChange={handleChange}
          placeholder="First Name"
          value={famMember.firstName}
        />
        <TextInput
          label="Date of Birth"
          name="dob"
          onChange={handleChange}
          placeholder="YYYY-MM-DD"
          value={famMember.dob}
        />
        <TextInput
          label="Bio"
          name="bio"
          onChange={handleChange}
          placeholder="Bio"
          value={famMember.bio}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default FamilyForm;
