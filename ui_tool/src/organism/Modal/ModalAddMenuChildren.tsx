import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalCommon/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalCommon/ModalContainer';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { ModalTitle } from '@atom/Modal/ModalCommon/ModalTitle';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import {
  clearModalState,
  initalize,
  setIsParent,
} from '@store/slice/sliceModal';
import { ModalAddMenuChildrenContent } from '@molecule/Modal/ModalAddMenuChildrenContent';

export const ModalAddMenuChildren = ({ id }: any) => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  const dispath = useDispatch<AppDispatch>();
  useEffect(() => {
    //링크셋팅 렌더링 시에는 modal store 빈상태가 되어야함
    dispath(clearModalState());
    dispath(setIsParent(false));
    dispath(initalize({ id: id }));
  }, []);

  return (
    <>
      {createPortal(<ModalBackDrop />, modalElement)}
      {createPortal(
        <ModalContainer height="low">
          <ModalTitle title="하위 메뉴 항목 추가" />
          <ModalAddMenuChildrenContent />
          <ModalButton method="POST" />
        </ModalContainer>,
        modalElement
      )}
    </>
  );
};
