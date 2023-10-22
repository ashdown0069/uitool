import { ImageBox } from '@atom/public/ImageBox';
import type { BlockIndex } from 'types';
export const Image3 = ({ blockIndex, childrenBlockIndex }: BlockIndex) => {
  return (
    <div className="flex items-center justify-center h-auto gap-5 mx-auto overflow-hidden w-fit">
      {Array.from({ length: 3 }, (_, boxIdx) => (
        <ImageBox
          boxIndex={boxIdx}
          blockIndex={blockIndex}
          childrenBlockIndex={childrenBlockIndex}
        />
      ))}
    </div>
  );
};
