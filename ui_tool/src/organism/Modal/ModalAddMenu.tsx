import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalCommon/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalCommon/ModalContainer';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { usePreventMouseWheel } from '@hooks/usePreventMouseWheel';
import { ModalTitle } from '@atom/Modal/ModalCommon/ModalTitle';
import { ModalAddMenuContent } from '@molecule/Modal/ModalAddMenuContent';
interface props {
  onCancel: () => void;
}

export const ModalAddMenu = ({ onCancel }: props) => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  usePreventMouseWheel();

  const formData = {
    menuName: '',
    menuUrl: '',
    isParent: false,
  };

  return (
    <>
      {createPortal(<ModalBackDrop onCancel={onCancel} />, modalElement)}
      {createPortal(
        <ModalContainer height="low">
          <ModalTitle title="메뉴 항목 추가" />
          <div className='flex px-5'>
            <input name='isParent' type="radio" id='카테고리' value={1} />
            <label htmlFor="카테고리" className="pl-3 text-body4m">
              카테고리
            </label>
            <input name='isParent' className='ml-5' type="radio" id='종속페이지' value={0} />
            <label htmlFor="종속페이지" className="pl-3 text-body4m">
              종속페이지
            </label>
          </div>
          <ModalAddMenuContent />
          <ModalButton onCancel={onCancel} method="POST" />
        </ModalContainer>,
        modalElement
      )}
    </>
  );
};
