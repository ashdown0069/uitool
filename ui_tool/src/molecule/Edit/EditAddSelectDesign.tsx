import { ReactComponent as IconMaginStick } from '@assets/icon/icon_magicStick.svg';
import type { BlockIndex } from 'types';
import { ModalBlockDesign } from '@organism/Modal/ModalBlockDesign';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import {
  blockModalToggle,
  selectBlockIndex,
  selectchildrenBlockIndex,
  clearIndex,
} from '@store/slice/sliceModalToggle';

export const EditAddSelectDesign = ({
  blockIndex,
  childrenBlockIndex,
}: BlockIndex) => {
  const dispatch = useDispatch<AppDispatch>();
  const modalState = useSelector(
    (state: RootState) => state.modalToggle.modalState
  );
  const ReDesignSelect = () => {
    dispatch(clearIndex());
    dispatch(selectBlockIndex(blockIndex));
    if (childrenBlockIndex !== undefined) {
      dispatch(selectchildrenBlockIndex(childrenBlockIndex));
    }
    dispatch(blockModalToggle());
  };
  return (
    <>
      <div
        className={`min-h-[180px] max-h-[500px] h-full flex flex-col items-center justify-center border-2 border-dashed cursor-pointer select-none  bg-grayscale-50 text-grayscale-400 border-grayscale-800 hover:bg-gray-200`}
        onClick={ReDesignSelect}
      >
        <div className="flex flex-col items-center justify-center">
          <IconMaginStick />
          디자인을 선택하세요
        </div>
      </div>
      {modalState && <ModalBlockDesign />}
    </>
  );
};
