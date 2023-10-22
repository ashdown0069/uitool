import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalCommon/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalCommon/ModalContainer';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { ModalTitle } from '@atom/Modal/ModalCommon/ModalTitle';
import { ModalDetailContent } from '@molecule/Modal/ModalDetailContent';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { clearModalState, initalize } from '@store/slice/sliceModal';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ModalIdProps } from '@types/index';

export const ModalDetail = ({ id }: ModalIdProps) => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  const pageData = useSelector((state: RootState) => state.pagesinfo);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    //id값을 통해 pages store에서 제목과 경로값 조회 ->
    //modal store 상태값 설정
    if (pageData) {
      const modalData = pageData.find((el) => el.id === id);
      if (modalData) {
        dispatch(
          initalize({
            id: modalData?.id,
            title: modalData?.title,
            url: modalData?.path,
          })
        );
      }
    }

    return () => {
      console.log('cleanup');
      dispatch(clearModalState());
    };
  }, []);
  return (
    <>
      {createPortal(<ModalBackDrop />, modalElement)}
      {pageData &&
        createPortal(
          <ModalContainer height="low">
            <ModalTitle title="페이지 상세" />
            <ModalDetailContent />
            <ModalButton method="PUT" />
          </ModalContainer>,
          modalElement
        )}
    </>
  );
};
