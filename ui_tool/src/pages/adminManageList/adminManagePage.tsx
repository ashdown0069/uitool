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
