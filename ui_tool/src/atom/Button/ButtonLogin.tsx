import { useNavigate } from 'react-router-dom';

export const ButtonLogin = () => {
  const navigate = useNavigate();
  return (
    <button
      className="w-[394px] h-[57px] rounded-[10px] bg-primary-950 text-grayscale-0 hover:bg-primary-700"
      onClick={() => navigate('/adminlist')}
    >
      {/* 로그인 */}
      로그인 구현X 이 버튼을 누르면 다음페이지로 넘어갑니다
    </button>
  );
};
