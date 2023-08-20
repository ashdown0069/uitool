import { CardCircle } from '@atom/Card/CardCircle';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { v4 as uuidv4 } from 'uuid';

export const list1 = ({ blockIndex }: { blockIndex: number }) => {
  const pageLinkData = useSelector(
    (state: RootState) => state.editPage.page[blockIndex].link
  );
  return (
    <div className="flex items-center justify-center h-auto pt-20 pb-20">
      {blockIndex !== undefined &&
        pageLinkData.map((_, idx) => (
          <CardCircle key={idx} blockIndex={blockIndex} boxIndex={idx} />
        ))}
    </div>
  );
};
