const dbServerUrl = 'http://localhost:2345';
const familyUrl = `${dbServerUrl}/familyMembers`;

export async function getFamilyMembers() {
  const response = await fetch(familyUrl);

  if (response.ok) {
    return await response.json();
  }
}

export async function postFamilyMember(newFamilyMember) {
  const response = await fetch(familyUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newFamilyMember)
  });

  if (response.ok) {
    return await getFamilyMembers();
  }
}

export async function putFamilyMember(familyMemberToEdit) {
  const response = await fetch(`${familyUrl}/${familyMemberToEdit.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(familyMemberToEdit)
  });

  if (response.ok) {
    return await getFamilyMembers();
  }
}

export async function deleteFamilyMember(familyMemberToDelete) {
  const idToDelete = familyMemberToDelete.id;
  const response = await fetch(`${familyUrl}/${idToDelete}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: familyMemberToDelete.id })
  });

  if (response.ok) {
    console.log(response);

    return await getFamilyMembers();
  }
}
