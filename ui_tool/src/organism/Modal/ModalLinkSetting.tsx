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
import { BlockIndex } from '@types/index';

interface ModalLinkSettingProps extends BlockIndex {
  boxIndex: number;
}

export const ModalLinkSetting = ({
  boxIndex,
  blockIndex,
  childrenBlockIndex,
}: ModalLinkSettingProps) => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  const dispath = useDispatch<AppDispatch>();
  useEffect(() => {
    //링크셋팅 렌더링 시에는 modal store 빈상태가 되어야함
    dispath(clearModalState());
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
