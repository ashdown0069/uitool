export const AdminMangePageAction = async ({ request }: any) => {
  //모달에서 확인 버튼 클릭시 데이터 넘어옴
  const data = await request.json();
  if (request.method === 'PUT') {
    //db에 데이터 변경 요청
    const res = await fetch('http://localhost:5174/adminlist/page', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw Error('fetching error, try again...');
    }
    //변경된 값 가져와서 다시 디스패치
    const updatedData = await res.json();
    return updatedData.data;
    // dispatch
  } else if (request.method === 'POST') {
    //db에 데이터 복제 요청
    const res = await fetch('http://localhost:5174/adminlist/page', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), //찾는 데이터 아이디로 추후 교체
    });
    if (!res.ok) {
      throw Error('fetching error, try again...');
    }

    const updatedData = await res.json();

    return updatedData.data;
  }
};
