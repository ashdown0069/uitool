import { ModalBlockDesignSmallBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignSmallBox';
import type { BlockDesignContentList } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateTypeAndContentLayout } from '@store/slice/sliceEditPage';
import { blockModalToggle } from '@store/slice/sliceModalToggle';
export const LineContent = ({
  list,
  type,
}: {
  list: BlockDesignContentList[] | undefined;
  type: string;
}) => {
  const { selectedBlockIndex, selectedchildrenBlockIndex } = useSelector(
    (state: RootState) => state.modalToggle
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleDispatch = (contentLayout: number, type: string) => {
    dispatch(
      updateTypeAndContentLayout({
        index: selectedBlockIndex,
        childrenBlockIndex: selectedchildrenBlockIndex,
        type,
        contentLayout,
      })
    );
    dispatch(blockModalToggle());
  };

  return (
    <>
      {list !== undefined &&
        list.length !== 0 &&
        list.map((el: any) => (
          <span
            key={el.id}
            onClick={() => handleDispatch(el.contentLayout, type)}
          >
            <ModalBlockDesignSmallBox>
              {el.svgEl.ReactComponent()}
            </ModalBlockDesignSmallBox>
          </span>
        ))}
    </>
  );
};
