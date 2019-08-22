import React, { useState, useEffect } from 'react';
import './App.scss';
import Person from './components/Person';
import FamilyForm from './components/FamilyForm';
import { getFamily } from './tools/dbApi';

const App = () => {
  let starterFam = [];
  const [family, setFamily] = useState(starterFam);

  useEffect(() => {
    getFamily().then(setFamily);
  }, []);

  function renderFamilyMember(famMember) {
    return <Person {...famMember} key={famMember.id} />;
  }

  function handleFamSubmit(newFamilyMember) {
    setFamily([...family, newFamilyMember]);
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
