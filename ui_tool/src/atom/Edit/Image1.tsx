import { ImageBox } from './ImageBox';
interface ImageProps {
  blockIndex: number;
  childrenBlockIndex?: number;
}
export const Image1 = ({ blockIndex, childrenBlockIndex }: ImageProps) => {
  return (
    <div className="flex items-center justify-center h-auto gap-5 mx-auto overflow-hidden w-fit">
      <ImageBox
        // height="300px"
        boxIndex={0}
        blockIndex={blockIndex}
        childrenBlockIndex={childrenBlockIndex}
      />
    </div>
  );
};
