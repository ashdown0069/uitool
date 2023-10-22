export const AdminManageLoader = async () => {
  //db의 pageinfo 모두 가져오기
  const res = await fetch('http://localhost:5174/adminlist');
  if (!res.ok) {
    throw Error('fetching error, try again...');
  }
  const resData = await res.json();
  return resData;
};
