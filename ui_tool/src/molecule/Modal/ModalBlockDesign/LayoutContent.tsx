import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateTypeAndContentLayout } from '@store/slice/sliceEditPage';
import { blockModalToggle } from '@store/slice/sliceModalToggle';
export const LayoutContent = ({ list, type }: any) => {
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
      {list.length === 0 && <div>Loading...</div>}
      {list.length !== 0 &&
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
