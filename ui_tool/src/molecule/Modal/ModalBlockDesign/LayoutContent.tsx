import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateTypeAndContentLayout } from '@store/slice/sliceEditPage';
import { blockModalToggle } from '@store/slice/sliceModalToggle';
import type { BlockDesignContentList } from 'types';
export const LayoutContent = ({
  list,
  type,
}: {
  list: BlockDesignContentList[] | undefined;
  type: string;
}) => {
  const blockIndex = useSelector(
    (state: RootState) => state.modalToggle.selectedBlockIndex
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleDispatch = (
    contentLayout: number,
    numberOfLayouts: number,
    childrenContainerClassName: string,
    childrenClassName: string,
    type: string
  ) => {
    dispatch(
      updateTypeAndContentLayout({
        index: blockIndex,
        type,
        contentLayout,
        childrenContainerClassName,
        childrenClassName,
        numberOfLayouts,
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
            onClick={() =>
              handleDispatch(
                el.contentLayout,
                el.numberOfLayouts,
                el.childrenContainerClassName,
                el.childrenClassName,
                type
              )
            }
          >
            <ModalBlockDesignMediumBox key={el.id}>
              {el.svgEl.ReactComponent()}
            </ModalBlockDesignMediumBox>
          </span>
        ))}
    </>
  );
};
