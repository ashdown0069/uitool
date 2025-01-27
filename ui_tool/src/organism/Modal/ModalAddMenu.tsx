import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalCommon/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalCommon/ModalContainer';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { ModalTitle } from '@atom/Modal/ModalCommon/ModalTitle';
import { ModalAddMenuContent } from '@molecule/Modal/ModalAddMenuContent';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import { clearModalState, setIsParent } from '@store/slice/sliceModal';

export const ModalAddMenu = () => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  const dispath = useDispatch<AppDispatch>();
  useEffect(() => {
    //링크셋팅 렌더링 시에는 modal store 빈상태가 되어야함
    dispath(clearModalState());
    dispath(setIsParent(true));
  }, []);

  return (
    <>
      {createPortal(<ModalBackDrop />, modalElement)}
      {createPortal(
        <ModalContainer height="high">
          <ModalTitle title="메뉴 항목 추가" />
          <ModalAddMenuContent />
          <ModalButton method="POST" />
        </ModalContainer>,
        modalElement
      )}
    </>
  );
};
