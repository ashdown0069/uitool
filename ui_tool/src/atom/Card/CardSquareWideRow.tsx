import { ImageBox } from '@atom/Edit/ImageBox';
import { CardEditor } from './CardEditor';
import type { CardProps } from 'types';

export const CardSquareWideRow = ({
  blockIndex,
  boxIndex,
  childrenBlockIndex,
}: CardProps) => {
  return (
    <div className="cursor-pointer w-[500px] h-fit flex flex-shrink-0 items-center m-2 font-noto">
      <div className="w-[250px] h-[150px] bg-grayscale-200 mb-5">
        {blockIndex !== undefined && (
          <ImageBox
            blockIndex={blockIndex}
            boxIndex={boxIndex}
            childrenBlockIndex={childrenBlockIndex}
            isCircle={false}
          />
        )}
      </div>
      <div className="h-full m-0 mb-auto">
        {blockIndex !== undefined && (
          <CardEditor
            blockIndex={blockIndex}
            boxIndex={boxIndex}
            childrenBlockIndex={childrenBlockIndex}
            shape="default"
          />
        )}
      </div>
    </div>
  );
};
