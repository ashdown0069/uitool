import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalCommon/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalCommon/ModalContainer';
import { ModalLinkSettingContent } from '@molecule/Modal/ModalLinkSettingContent';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { ModalTitle } from '@atom/Modal/ModalCommon/ModalTitle';
import { clearModalState } from '@store/slice/sliceModal';
import { AppDispatch } from '@store/store';
import { useDispatch } from 'react-redux';
interface props {
  boxIndex: number;
  blockIndex: number;
  childrenBlockIndex?: number;
}

export const ModalLinkSetting = ({
  boxIndex,
  blockIndex,
  childrenBlockIndex,
}: props) => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  const dispath = useDispatch<AppDispatch>();
  useEffect(() => {
    //링크셋팅 렌더링 시에는 modal store 빈상태가 되어야함
    const clearState = async () => {
      dispath(clearModalState());
    };
    clearState();
  }, []);

  return (
    <>
      {createPortal(<ModalBackDrop />, modalElement)}
      {createPortal(
        <ModalContainer height="high">
          <ModalTitle title="링크 설정" />
          <ModalLinkSettingContent />
          <ModalButton
            method="Dispatch"
            boxIndex={boxIndex}
            blockIndex={blockIndex}
            childrenBlockIndex={childrenBlockIndex}
          />
        </ModalContainer>,
        modalElement
      )}
    </>
  );
};
