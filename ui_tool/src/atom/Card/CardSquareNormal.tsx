import type { SquareNoramlProps } from 'types';
import { CardBox } from './CardBox';
interface CardProps {
  blockIndex: number;
  boxIndex: number;
}
export const CardSquareNomal = ({ blockIndex, boxIndex }: CardProps) => {
  return (
    <div className="w-[192px] h-[302px] m-2 cursor-pointer font-noto">
      <div className="w-[192px] h-[182px] bg-grayscale-200 mb-5">
        <CardBox isCircle={false} blockIndex={blockIndex} boxIndex={boxIndex} />
      </div>
      <p className="m-3 text-center text-[20px] font-light text-primary-700 leading-8">
        1:1방문
      </p>
      <p className="m-2 text-center text-[15px] font-bold leading-5">
        주 1회 / 과목당 10분
      </p>
      <p className="m-2 text-center leading-5 text-[15px] text-grayscale-800">
        학습관리 및 상담
      </p>
    </div>
  );
};
