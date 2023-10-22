import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalCommon/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalCommon/ModalContainer';
import { ModalDuplicationContent } from '@molecule/Modal/ModalDuplicationContent';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { ModalTitle } from '@atom/Modal/ModalCommon/ModalTitle';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';
import { initalize, clearModalState } from '@store/slice/sliceModal';
import { ModalIdProps } from '@types/index';

export const ModalDuplication = ({ id }: ModalIdProps) => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  const pageData = useSelector((state: RootState) => state.pagesinfo);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (pageData) {
      const modalData = pageData.find((el) => el.id === id);
      if (modalData)
        dispatch(
          initalize({
            id: modalData.id,
            title: modalData.title,
            url: modalData.path,
          })
        );
    }

    return () => {
      console.log('cleanup');
      dispatch(clearModalState());
    };
  }, []);
  return (
    <>
      {createPortal(<ModalBackDrop />, modalElement)}
      {createPortal(
        <ModalContainer height="low">
          <ModalTitle title="페이지 복제" />
          <ModalDuplicationContent />
          <ModalButton method="POST" />
        </ModalContainer>,
        modalElement
      )}
    </>
  );
};
