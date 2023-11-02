import { initalize } from '@store/slice/sliceModal';
import { AppDispatch, RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultDropDownList } from '@constant/index';

interface DropDownMenuListProps {
  onCancel: () => void;
  onSelect: (id: number, title: string, url: string) => void;
}
export const DropDownMenuListPublic = ({
  onCancel,
  onSelect,
}: DropDownMenuListProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const pagesinfo = useSelector((state: RootState) => state.pagesinfo);
  console.log(pagesinfo);
  const handleDropDownList = async (el: any) => {
    dispatch(initalize({ id: el.id, title: el.title, url: el.path }));
    if (onSelect) {
      onSelect(el.id, el.title, el.path);
    }
    onCancel();
  };
  return (
    <div
      className="custom__scrollbar absolute z-30 overflow-y-auto w-[520px] h-[262px] rounded-[10px] border-[0.8px] border-grayscale-300 bg-grayscale-50
      "
    >
      <div className="m-4 text-body4m text-grayscale-800">
        링크할 페이지를 선택하세요
      </div>
      <div className="m-3 ml-4 text-body4m text-grayscale-300">공통 페이지</div>
      <ul>
        {DefaultDropDownList.map((el) => (
          <li
            key={el.id}
            className="m-2 ml-6 cursor-pointer text-body4m hover:text-primary-950"
            onClick={() => handleDropDownList(el)}
          >
            {el.title} - {el.path}
          </li>
        ))}
      </ul>
      <div className="m-1 ml-4 text-body4m text-grayscale-300">
        사용자 추가 페이지
      </div>
      <ul>
        {pagesinfo.map((el) => (
          <li
            key={el.id}
            className="m-2 ml-6 cursor-pointer text-body4m hover:text-primary-950"
            onClick={() => handleDropDownList(el)}
          >
            {el.title} - {el.path}
          </li>
        ))}
      </ul>
    </div>
  );
};

//backend DB 수정되면 사용자 추가 페이지 살리기
