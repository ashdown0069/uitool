import { ImageBox } from './ImageBox';
interface ImageProps {
  blockIndex: number;
  childrenBlockIndex?: number;
}
export const Image2 = ({ blockIndex, childrenBlockIndex }: ImageProps) => {
  return (
    <div className="w-[100%] h-auto mx-auto flex justify-center items-center gap-5 overflow-hidden">
      <ImageBox
        // height="300px"
        boxIndex={0}
        blockIndex={blockIndex}
        childrenBlockIndex={childrenBlockIndex}
      />
      <ImageBox
        // height="300px"
        boxIndex={1}
        blockIndex={blockIndex}
        childrenBlockIndex={childrenBlockIndex}
      />
    </div>
  );
};
