import { useNavigate } from 'react-router-dom';

export const ButtonLogin = () => {
  const navigate = useNavigate();
  return (
    <button
      className="w-[394px] h-[57px] rounded-[10px] bg-primary-950 text-grayscale-0 hover:bg-primary-700"
      onClick={() => navigate('/adminlist')}
    >
      로그인
    </button>
  );
};
