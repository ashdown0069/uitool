import { useImageAndLinkSetting } from '@hooks/useImageAndLinkSetting';
import { SquareBigProps } from 'types';
import { ImageBox } from '@atom/Edit/ImageBox';
import { CardEditor } from './CardEditor';
interface CardProps {
  blockIndex: number;
  boxIndex: number;
  childrenBlockIndex?: number;
}
export const CardSquareBig = ({
  blockIndex,
  boxIndex,
  childrenBlockIndex,
}: CardProps) => {
  return (
    <div className="w-[360px] h-[433px] flex flex-col items-center m-5 font-noto">
      <div className="w-[360px] h-[270px] bg-grayscale-200 mb-5">
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
            shape="big"
          />
        )}
      </div>
      {/* <p className="m-3 text-center font-bold text-[22px] leading-[25px]">
      [클래스]
      </p>
      <p className="relative m-2 text-left text-grayscale-800">
        <span className="absolute left-[-1rem] text-[17px] font-light leading-[25px] text-meaning">
          &#8226;
        </span>
        친구들과 함께 모여 교과과정에 필요한 핵심 과목을 집중적으로 관리
        받습니다. 전문 선생님의 학습 관리로 자기주도 학습을 성장시 킬 수
        있습니다.
      </p> */}
    </div>
  );
};
