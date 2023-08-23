import { ImageBox } from './ImageBox';
interface ImageProps {
  blockIndex: number;
  childrenBlockIndex?: number;
}
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
      {/* <ImageBox
        boxIndex={0}
        blockIndex={blockIndex}
        childrenBlockIndex={childrenBlockIndex}
        isCircle={true}
      />
      <ImageBox
        boxIndex={1}
        blockIndex={blockIndex}
        childrenBlockIndex={childrenBlockIndex}
        isCircle={true}
      />
      <ImageBox
        boxIndex={2}
        blockIndex={blockIndex}
        childrenBlockIndex={childrenBlockIndex}
        isCircle={true}
      />
      <ImageBox
        boxIndex={3}
        blockIndex={blockIndex}
        childrenBlockIndex={childrenBlockIndex}
        isCircle={true}
      />
      <ImageBox
        boxIndex={4}
        blockIndex={blockIndex}
        childrenBlockIndex={childrenBlockIndex}
        isCircle={true}
      /> */}
    </div>
  );
};
