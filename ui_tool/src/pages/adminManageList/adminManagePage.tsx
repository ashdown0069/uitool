import { ManagePageTable } from '@organism/Management/ManagementPageTable';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import { useActionData } from 'react-router-dom';
import { useEffect } from 'react';
import { initalizePagesInfo } from '@store/slice/slicePagesInfo';
export const AdminManagePage = () => {
  const data = useActionData();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    //db에 업데이트 후 리턴한값으로 다시 상태관리
    dispatch(initalizePagesInfo(data));
  }, [data, dispatch, initalizePagesInfo]);

  return (
    <div className="w-[1220px] h-auto">
      <ManagePageTable />
    </div>
  );
};

export const AdminMangePageAction = async ({ request }: any) => {
  //추후 커스텀훅으로 대체 예정
  // const dispatch = useDispatch<AppDispatch>();
  //모달에서 확인 버튼 클릭시 데이터 넘어옴
  const data = await request.json();
  // console.log(data);
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
    //변경된 값 가져와서 다시 디스패치
    const updatedData = await res.json();
    console.log(updatedData.data);
    return updatedData.data;
    // dispatch
  }
  // return redirect('/adminlist/page');
};
