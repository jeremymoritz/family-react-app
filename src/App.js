import React, { useState, useEffect } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'; // this adds ALL brands! -- don't do this in prod
import { faPencilAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';

// My components
import Person from './components/Person';
import FamilyForm from './components/FamilyForm';
import {
  getFamilyMembers,
  postFamilyMember,
  deleteFamilyMember,
  putFamilyMember
} from './tools/dbApi';

library.add(fab, faPencilAlt, faEye);

const App = () => {
  let starterFam = [];
  const [family, setFamily] = useState(starterFam);
  const [editingIds, setEditingIds] = useState([]);

  useEffect(() => {
    getFamilyMembers().then(setFamily);
  }, []);

  function handleFamDelete(famMember) {
    deleteFamilyMember(famMember).then(setFamily);
  }

  function handleFamPut(editedFamMember, callBackFunction) {
    putFamilyMember(editedFamMember).then(returnedFamilyMembers => {
      setFamily(returnedFamilyMembers);

      if (typeof callBackFunction === 'function') {
        callBackFunction(editedFamMember);
        console.log(editedFamMember);
      }
    });
  }

  function handleEditClick(famMember) {
    setEditingIds(_.xor(editingIds, [famMember.id]));
  }

  function renderFamilyMember(famMember) {
    return (
      <Person
        familyMember={famMember}
        key={famMember.id}
        onDeleteClick={() => handleFamDelete(famMember)}
        onEditClick={() => handleEditClick(famMember)}
        editMode={editingIds.includes(famMember.id)}
        onFamPut={handleFamPut}
      />
    );
  }

  function handleFamSubmit(newFamilyMember, callBackFunction) {
    postFamilyMember(newFamilyMember).then(setFamily);

    if (typeof callBackFunction === 'function') {
      callBackFunction();
    }
  }

  return (
    <main className="App">
      <h1>The Moritz Family</h1>
      <section className="family-bios">{family.map(renderFamilyMember)}</section>
      <FamilyForm onFamilySubmit={handleFamSubmit} />
    </main>
  );
};

export default App;
