import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import type { BlockDesignContent } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateTypeAndContentLayout } from '@store/slice/sliceEditPage';
import { blockModalToggle, clearIndex } from '@store/slice/sliceModalToggle';
export const ImageContent = ({ list, type }: any) => {
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
      {list.length === 0 && <div>Loading...</div>}
      {list.length !== 0 &&
        list.map((el: any) => (
          <span
            key={el.id}
            onClick={() => handleDispatch(el.contentLayout, type)}
          >
            <ModalBlockDesignMediumBox key={el.id}>
              {el.svgEl.ReactComponent()}
            </ModalBlockDesignMediumBox>
          </span>
        ))}
    </>
  );
};
