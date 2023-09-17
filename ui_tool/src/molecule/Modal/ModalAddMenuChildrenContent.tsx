import { InputPageInfo } from '@atom/Input/InputPageInfo';
import { InputPageSelector } from '@atom/Input/InputPageSelector';
export const ModalAddMenuChildrenContent = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <InputPageInfo
            type="addMenu"
            inputWidth="short"
            placeholder="하위 메뉴 항목 이름"
          />
        </div>
        <div>
          <InputPageSelector />
        </div>
      </div>
    </>
  );
};
