import { CardCircle } from '@atom/Card/CardCircle';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { pushEmptyObjToSrcAndLink } from '@store/slice/sliceEditPage';
interface Props {
  blockIndex: number;
  childrenBlockIndex?: number;
}
export const list1 = ({ blockIndex, childrenBlockIndex }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [editMode, setEditMode] = useState<boolean>(false);
  useEffect(() => {
    if (location.pathname.startsWith('/edit/')) {
      setEditMode(true);
    }
  }, []);

  let pageLinkData;
  if (childrenBlockIndex !== undefined) {
    pageLinkData = useSelector(
      (state: RootState) =>
        state.editPage.page[blockIndex].children[childrenBlockIndex].link
    );
  } else if (blockIndex !== undefined) {
    pageLinkData = useSelector(
      (state: RootState) => state.editPage.page[blockIndex].link
    );
  }

  const AddList = (blockIndex: number, childrenBlockIndex: number) => {
    dispatch(
      pushEmptyObjToSrcAndLink({
        index: blockIndex,
        childrenBlockIndex: childrenBlockIndex,
      })
    );
  };

  return (
    <div className="flex items-center justify-center h-auto pt-20 pb-20">
      {blockIndex !== undefined &&
        childrenBlockIndex !== undefined &&
        pageLinkData.map((_: any, idx: number) => (
          <CardCircle
            key={idx}
            blockIndex={blockIndex}
            boxIndex={idx}
            childrenBlockIndex={childrenBlockIndex}
          />
        ))}
      {editMode &&
        blockIndex !== undefined &&
        childrenBlockIndex !== undefined && (
          <button
            onClick={() => AddList(blockIndex, childrenBlockIndex)}
            className="absolute top-10 left-3 w-[90px] h-[30px] z-20 bg-grayscale-600 rounded-3xl text-grayscale-0 text-body2r hover:text-primary-900"
          >
            ADD
          </button>
        )}
      {blockIndex !== undefined &&
        childrenBlockIndex === undefined &&
        pageLinkData.map((_: any, idx: number) => (
          <CardCircle key={idx} blockIndex={blockIndex} boxIndex={idx} />
        ))}
    </div>
  );
};
