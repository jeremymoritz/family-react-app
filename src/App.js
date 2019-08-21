import React, { useState } from 'react';
import './App.scss';
import Person from './components/Person';
import FamilyForm from './components/FamilyForm';

const App = () => {
  const starterFam = [
    { id: 1, firstName: 'Jeremy', dob: '1981-06-30', bio: 'Loves Christine' },
    { id: 2, firstName: 'Christine', dob: '1981-03-17', bio: 'Loves Jeremy' }
  ];
  const [family, setFamily] = useState(starterFam);

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
