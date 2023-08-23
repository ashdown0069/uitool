import { CardCircle } from '@atom/Card/CardCircle';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { useEffect, useState } from 'react';
import { pushEmptyObjToSrcAndLink } from '@store/slice/sliceEditPage';
import { CardSquareNomal } from '@atom/Card/CardSquareNormal';
import { CardSquareBig } from '@atom/Card/CardSquareBig';
import { CardSquareWide } from '@atom/Card/CardSquareWide';
import { CardSquareWideRow } from '@atom/Card/CardSquareWideRow';
interface Props {
  blockIndex: number;
  childrenBlockIndex?: number;
  contentLayout: number;
}

const cardComponentsMap = [
  '카드 컴포넌트 배열',
  CardCircle,
  CardSquareWide,
  CardSquareNomal,
  CardSquareBig,
  CardSquareWideRow,
];
export const list1 = ({
  blockIndex,
  childrenBlockIndex,
  contentLayout,
}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [editMode, setEditMode] = useState<boolean>(false);
  useEffect(() => {
    if (location.pathname.startsWith('/edit/')) {
      setEditMode(true);
    }
  }, []);
  console.log('contentLayout ====', contentLayout);
  let pageLinkData;
  if (childrenBlockIndex !== undefined) {
    pageLinkData = useSelector(
      (state: RootState) =>
        state.editPage.page[blockIndex].children[childrenBlockIndex].link
    );
  } else {
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
    <div className="relative flex items-center justify-center h-auto pt-10 pb-10">
      {blockIndex !== undefined &&
        childrenBlockIndex !== undefined &&
        pageLinkData.map((_: any, idx: number) => {
          const SelectedComponent = cardComponentsMap[contentLayout];
          return (
            <SelectedComponent
              key={idx}
              blockIndex={blockIndex}
              boxIndex={idx}
              childrenBlockIndex={childrenBlockIndex}
            />
          );
        })}
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
        pageLinkData.map((_: any, idx: number) => {
          const SelectedComponent = cardComponentsMap[contentLayout];
          return (
            <SelectedComponent
              key={idx}
              blockIndex={blockIndex}
              boxIndex={idx}
              childrenBlockIndex={childrenBlockIndex}
            />
          );
        })}
    </div>
  );
};
