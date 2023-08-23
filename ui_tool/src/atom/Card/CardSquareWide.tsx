import { SquareWideProps } from 'types';
import { ImageBox } from '@atom/Edit/ImageBox';
import { CardEditor } from './CardEditor';
interface CardProps {
  blockIndex: number;
  boxIndex: number;
  childrenBlockIndex?: number;
}
export const CardSquareWide = ({
  blockIndex,
  boxIndex,
  childrenBlockIndex,
}: CardProps) => {
  return (
    <div className="cursor-pointer w-[273.59px] h-[277.39px] flex flex-col flex-shrink-0 items-center m-2 font-noto">
      <div className="w-[157px] h-[157px] bg-grayscale-200 mb-5">
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
            shape="wide"
          />
        )}
      </div>
    </div>
  );
};
