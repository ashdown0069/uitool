import { initalize } from '@store/slice/sliceModal';
import { AppDispatch, RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultDropDownList } from '@constant/index';

export const DropDownMenuList = ({ onCancel }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const pagesinfo = useSelector((state: RootState) => state.pagesinfo);
  const handleDropDownList = async (el: any) => {
    dispatch(initalize({ title: el.title, url: el.path }));
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
        {pagesinfo !== undefined &&
          pagesinfo.map((el) => (
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
