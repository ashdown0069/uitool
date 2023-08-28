import { ImageBox } from '@atom/Edit/ImageBox';
import type { BlockIndex } from 'types';
export const Image1 = ({ blockIndex, childrenBlockIndex }: BlockIndex) => {
  return (
    <div className="flex items-center justify-center h-auto gap-5 mx-auto overflow-hidden w-fit">
      <ImageBox
        boxIndex={0}
        blockIndex={blockIndex}
        childrenBlockIndex={childrenBlockIndex}
      />
    </div>
  );
};
