import React, { useState } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';

const emptyFamMember = {
  id: null,
  firstName: '',
  dob: '',
  hobbies: ''
};

function FamilyForm({ onFamilySubmit, famMemberToEdit = null }) {
  const [famMember, setFamMember] = useState(famMemberToEdit || emptyFamMember);

  function resetForm() {
    setFamMember(famMemberToEdit || emptyFamMember);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onFamilySubmit(famMember, () => {
      resetForm(famMember);
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFamMember({ ...famMember, [name]: value });
  }

  return (
    <section>
      <h2>{famMemberToEdit ? `Edit ${famMemberToEdit.firstName}` : 'Add a Family Member'}</h2>
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
          label="Hobbies"
          name="hobbies"
          onChange={handleChange}
          placeholder="Hobbies"
          value={famMember.hobbies}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default FamilyForm;
