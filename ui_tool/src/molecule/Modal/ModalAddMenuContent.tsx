import { InputPageInfo } from '@atom/Input/InputPageInfo';
import { InputPageSelector } from '@atom/Input/InputPageSelector';
export const ModalAddMenuContent = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <InputPageInfo
            type="addMenu"
            inputWidth="short"
            placeholder="메뉴 항목 이름"
          />
        </div>
        <div>
          <InputPageInfo
            type="addMenuContent"
            inputWidth="short"
            placeholder="메뉴 설명"
          />
        </div>
        <div>
          <InputPageSelector />
        </div>
      </div>
    </>
  );
};
