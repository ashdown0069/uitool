import { ImageBox } from './ImageBox';
interface ImageProps {
  blockIndex: number;
  childrenBlockIndex?: number;
}
export const Image3 = ({ blockIndex, childrenBlockIndex }: ImageProps) => {
  return (
    <div className="flex items-center justify-center h-auto gap-5 mx-auto overflow-hidden w-fit">
      {Array.from({ length: 3 }, (_, boxIdx) => (
        <ImageBox
          boxIndex={boxIdx}
          blockIndex={blockIndex}
          childrenBlockIndex={childrenBlockIndex}
        />
      ))}
      {/* <ImageBox
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
      <ImageBox
        // height="300px"
        boxIndex={2}
        blockIndex={blockIndex}
        childrenBlockIndex={childrenBlockIndex}
      /> */}
    </div>
  );
};
