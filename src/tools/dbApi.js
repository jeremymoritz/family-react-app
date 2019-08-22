const dbServerUrl = 'http://localhost:2345/family/';

export async function getFamily() {
  const response = await fetch(dbServerUrl);

  if (response.ok) {
    return await response.json();
  }
}
