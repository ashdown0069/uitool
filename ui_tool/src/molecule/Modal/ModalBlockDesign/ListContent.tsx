import type { BlockDesignContent } from 'types';
import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateTypeAndContentLayout } from '@store/slice/sliceEditPage';
import { blockModalToggle } from '@store/slice/sliceModalToggle';
export const ListContent = ({
  list,
  type,
}: {
  list: BlockDesignContent[];
  type: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedBlockIndex, selectedchildrenBlockIndex } = useSelector(
    (state: RootState) => state.modalToggle
  );
  const handleDispatch = (contentLayout: number, type: string) => {
    if (selectedchildrenBlockIndex !== undefined) {
      dispatch(
        updateTypeAndContentLayout({
          index: selectedBlockIndex,
          childrenBlockIndex: selectedchildrenBlockIndex,
          type,
          contentLayout,
        })
      );
    } else {
      //중첩구조 아닐시
      dispatch(
        updateTypeAndContentLayout({
          index: selectedBlockIndex,
          type,
          contentLayout,
        })
      );
    }
    dispatch(blockModalToggle());
  };
  return (
    <>
      {list.length !== 0 &&
        list.map((el: any) => (
          <span
            key={el.id}
            onClick={() => handleDispatch(el.contentLayout, type)}
            className="w-fit h-fit"
          >
            <ModalBlockDesignMediumBox>
              {el.svgEl.ReactComponent()}
            </ModalBlockDesignMediumBox>
          </span>
        ))}
    </>
  );
};
