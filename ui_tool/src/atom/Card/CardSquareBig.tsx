import { ImageBox } from '@atom/Edit/ImageBox';
import { CardEditor } from './CardEditor';
import type { CardProps } from 'types';

export const CardSquareBig = ({
  blockIndex,
  boxIndex,
  childrenBlockIndex,
}: CardProps) => {
  return (
    <div className="w-[360px] h-[433px] flex flex-col items-center m-5 font-noto">
      <div className="w-[360px] h-[270px] bg-grayscale-200 mb-5">
        {blockIndex !== undefined && (
          <ImageBox
            blockIndex={blockIndex}
            boxIndex={boxIndex}
            childrenBlockIndex={childrenBlockIndex}
            isCircle={false}
          />
        )}
      </div>
      <div>
        {blockIndex !== undefined && (
          <CardEditor
            blockIndex={blockIndex}
            boxIndex={boxIndex}
            childrenBlockIndex={childrenBlockIndex}
            shape="big"
          />
        )}
      </div>
    </div>
  );
};
