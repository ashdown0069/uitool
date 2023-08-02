import { AdminManageTab } from '@molecule/List/AdminManageTab';
import { WjHeader } from '@molecule/public/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AppDispatch } from '@store/store';
import { useDispatch } from 'react-redux';
import { initalizePagesInfo } from '@store/slice/slicePagesInfo';
export const AdminManage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const data = useLoaderData(); //loader 가 리턴한값 가져오기
  const currentPath = useLocation();

  useEffect(() => {
    if (data) {
      dispatch(initalizePagesInfo(data.pagesInfo));
      console.log('pagesInfo = ', data.pagesInfo);
      console.log('navigation = ', data.navigations);
    }
  }, [data]);

  useEffect(() => {
    currentPath.pathname === '/adminlist/page'
      ? navigate('/adminlist/page')
      : navigate('/adminlist/menu');
  }, []);
  return (
    <div className="w-[1220px] h-auto m-auto">
      <WjHeader />
      {/* Tab state로 하위 organ 컴포넌트 전환 */}
      <AdminManageTab
        LeftText={'메뉴 관리'}
        RightText={'페이지 관리'}
        LeftTo={'/adminlist/menu'}
        RightTo={'/adminlist/page'}
      />
      <Outlet />
    </div>
  );
};

export const AdminManageLoader = async () => {
  //추후 app.tsx 파일로 옮겨야함
  //db의 pageinfo 모두 가져오기
  const res = await fetch('http://localhost:5174/adminlist');
  if (!res.ok) {
    throw Error('fetching error, try again...');
  }

  const resData = await res.json();
  console.log('LOADE DATA', resData);
  return resData;
};
