import { InputLogin } from '@atom/Input/InputLogin';
import { ButtonLogin } from '@atom/Button/ButtonLogin';
import { ReactComponent as Wjlogo } from '@assets/Wjlogo.svg';
export const AdminLogin = () => {
  return (
    <div className="w-[394px] m-auto mt-20">
      <div className="flex justify-center">
        <Wjlogo />
      </div>
      <InputLogin type="Email" />
      <InputLogin type="Password" />
      <div className="flex justify-between mt-5 mb-14">
        <a href="#" className="text-body5r text-grayscale-600">
          계정 만들기
        </a>
        <a href="#" className="text-body5r text-grayscale-600">
          비밀번호를 잊어버리셨나요?
        </a>
      </div>
      <ButtonLogin />
      <p className="mt-6 text-center">로그인 버튼을 바로 클릭하세요</p>
    </div>
  );
};
