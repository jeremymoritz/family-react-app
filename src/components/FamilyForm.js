import React, { useState } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';

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

    props.onFamilySubmit(famMember);
    setFamMember(emptyFamMember);
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
        <TextArea
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
