import { ImageBox } from '@atom/Edit/ImageBox';
import type { BlockIndex } from 'types';
export const Image5 = ({ blockIndex, childrenBlockIndex }: BlockIndex) => {
  return (
    <div className="flex items-center justify-center h-auto gap-5 mx-auto overflow-hidden w-fit">
      {Array.from({ length: 4 }, (_, boxIdx) => (
        <ImageBox
          boxIndex={boxIdx}
          blockIndex={blockIndex}
          childrenBlockIndex={childrenBlockIndex}
          isCircle={true}
        />
      ))}
    </div>
  );
};
