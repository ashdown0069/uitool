export const AdminMangeMenuAction = async ({ request }: any) => {
  console.log('------------action in');
  const data = await request.json();
  console.log('request =', data);
  if (request.method === 'PUT') {
    const res = await fetch('http://localhost:5174/adminlist/menu', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    });
    if (!res.ok) {
      throw Error('fetching error, try again...');
    }
    const updatedData = await res.json();
    return updatedData.data;
  } else if (request.method === 'POST') {
    const res = await fetch('http://localhost:5174/adminlist/menu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    });
    if (!res.ok) {
      throw Error('fetching error, try again...');
    }
    const updatedData = await res.json();
    console.log(updatedData.data);
    return updatedData.data;
  } else if (request.method === 'DELETE') {
    const res = await fetch('http://localhost:5174/adminlist/menu', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    });
    if (!res.ok) {
      throw Error('fetching error, try again...');
    }
    const deletedAfterData = await res.json();
    console.log(deletedAfterData.data);
    return deletedAfterData.data;
  }
};
