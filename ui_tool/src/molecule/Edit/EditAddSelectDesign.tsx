import { ReactComponent as IconMaginStick } from '@assets/icon/icon_magicStick.svg';
import type { AddBlock } from 'types';
import { useEffect, useState } from 'react';
import { ModalBlockDesign } from '@organism/Modal/ModalBlockDesign';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import {
  blockModalToggle,
  selectBlockIndex,
  selectchildrenBlockIndex,
  clearIndex,
} from '@store/slice/sliceModalToggle';
interface EditAddSelectDesignProps {
  blockIndex: number;
  childrenBlockIndex?: number;
}

export const EditAddSelectDesign = ({
  blockIndex,
  childrenBlockIndex,
}: EditAddSelectDesignProps) => {
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
  // if (!location.pathname.startsWith('/edit/')) {
  //   return (null);
  // }
  return (
    <div
      onClick={ReDesignSelect}
      className="min-h-[160px] max-h-[300px] h-full cursor-pointer select-none flex flex-col bg-grayscale-50 text-grayscale-400 items-center justify-center border-dashed border-2 border-grayscale-800 hover:bg-gray-200"
    >
      <IconMaginStick />
      디자인을 선택하세요
      {modalState && <ModalBlockDesign />}
    </div>
  );
};
