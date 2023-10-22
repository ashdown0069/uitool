import { ImageBox } from '@atom/public/ImageBox';
import { CardEditor } from '@atom/public/CardEditor';
import type { CardProps } from 'types';

export const CardCircle = ({
  blockIndex,
  boxIndex,
  childrenBlockIndex,
}: CardProps) => {
  return (
    <>
      <div className="w-[144px] h-[174px] m-4  font-noto">
        <div className="mb-3 rounded-full w-[144px] h-[144px] bg-grayscale-200">
          {blockIndex !== undefined && (
            <ImageBox
              blockIndex={blockIndex}
              boxIndex={boxIndex}
              childrenBlockIndex={childrenBlockIndex}
              isCircle={true}
            />
          )}
        </div>
        <div>
          {blockIndex !== undefined && (
            <CardEditor
              blockIndex={blockIndex}
              boxIndex={boxIndex}
              childrenBlockIndex={childrenBlockIndex}
              shape="circle"
            />
          )}
        </div>
      </div>
    </>
  );
};
