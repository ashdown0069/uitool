import { ImageBox } from '@atom/Edit/ImageBox';
import type { ImageProps } from 'types';
export const Image6 = ({ blockIndex, childrenBlockIndex }: ImageProps) => {
  return (
    <div className="flex items-center justify-center h-auto gap-3 mx-auto overflow-hidden w-fit">
      {Array.from({ length: 5 }, (_, boxIdx) => (
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
