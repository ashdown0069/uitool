import { PlusOutlined } from '@ant-design/icons';

interface index {
  index: number;
  onClick: () => void;
}
export const ListAddMenuChildren = ({ index, onClick }: index) => {
  return (
    <>
      {index !== undefined && (
        <div
          onClick={onClick}
          className="w-[1080px] h-[70px] pb-0 flex flex-row content-center justify-center items-center bg-grayscale-100 border border-grayscale-300 rounded hover:bg-grayscale-200 cursor-pointer"
        >
          <PlusOutlined style={{ fontSize: '30px', color: '#666' }} />
        </div>
      )}
    </>
  );
};
