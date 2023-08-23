import { AddBlock } from 'types';

export const EditAddBlockHereTop = ({ onClick }: AddBlock) => {
  return (
    <div className="absolute z-20 flex-col items-center hidden w-full group-hover:flex">
      <div className="w-full border-b-2 border-dashed border-grayscale-700 " />
      <button
        onClick={onClick}
        className=" relative bottom-[27px] w-[246px] h-[54px] text-center bg-grayscale-600 text-grayscale-0 text-body1m rounded-full"
      >
        + 여기에 블록 추가
      </button>
    </div>
  );
};

export const EditAddBlockHereBottom = ({ onClick }: AddBlock) => {
  return (
    <div className="absolute bottom-0 z-20 flex-col items-center hidden w-full group-hover:flex">
      <button
        onClick={onClick}
        className=" relative top-[27px] w-[246px] h-[54px] text-center bg-grayscale-600 text-grayscale-0 text-body1m rounded-full"
      >
        + 여기에 블록 추가
      </button>
      <div className="w-full border-t-2 border-dashed border-grayscale-700 " />
    </div>
  );
};
