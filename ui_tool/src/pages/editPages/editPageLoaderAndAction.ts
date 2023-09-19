import { redirect } from 'react-router-dom';

export const editPageLoader = async ({ params }: any) => {
  const res = await fetch(`http://localhost:5174/edit/${params.id}`);
  if (!res.ok) {
    throw Error('fetching error, try again...');
  }
  const resData = await res.json();
  console.log('PageData = ', resData);
  return resData;
  // return defer({ data: loadFn(params.id) });
};

export const editPageAction = async ({ request, params }: any) => {
  const data = await request.json(); //페이지 데이터
  console.log('action data', data);

  if (request.method === 'POST') {
    //db에 페이지 전송
    const res = await fetch(`http://localhost:5174/edit/${params.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw Error('fetching error, try again...');
    }

    //미정, 저장 후 디자인한 페이지로 redirect or 페이지 관리로 redirect
    const message = await res.json();
    console.log(message);
    return redirect('/adminlist/page');
  }
};
