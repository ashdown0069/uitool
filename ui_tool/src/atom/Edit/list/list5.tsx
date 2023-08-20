import { CardSquareWideRow } from '@atom/Card/CardSquareWideRow';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';

export const list5 = ({ blockIndex }: { blockIndex: number }) => {
  const pageLinkData = useSelector(
    (state: RootState) => state.editPage.page[blockIndex].link
  );

  return (
    <div className="flex items-center justify-center h-auto pt-20 pb-20">
      {blockIndex !== undefined &&
        pageLinkData.map((_, idx) => (
          <CardSquareWideRow key={idx} blockIndex={blockIndex} boxIndex={idx} />
        ))}
    </div>
  );
};
