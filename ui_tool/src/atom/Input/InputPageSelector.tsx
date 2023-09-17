import { useState, useEffect } from 'react';
import { ReactComponent as ArrowIcon } from '@assets/icon/icon_arrow.svg';
import { DropDownMenuList } from './InputPageSelectorDropDown';
import { AppDispatch, RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';
export const InputPageSelector = ({ defaultValue = undefined }: any) => {
  const [dropdown, setDropDown] = useState(false);
  const title = useSelector((state: RootState) => state.modal.title);
  const dropDownToggle = () => {
    setDropDown((prev) => !prev);
  };
  return (
    <div className="relative m-3">
      <div onClick={dropDownToggle} className="cursor-pointer">
        <input
          type="url"
          value={title}
          disabled={true}
          // defaultValue={defaultValue}
          placeholder="페이지 주소"
          className="w-[576px] h-[48px] rounded-[10px] bg-grayscale-50 placeholder:text-grayscale-300 pl-3 pr-12 text-body4r cursor-pointer"
        />
        <div className="absolute inset-y-0 inline rotate-90 h-fit w-fit right-3 top-1">
          <ArrowIcon />
        </div>
      </div>
      {dropdown && <DropDownMenuList onCancel={dropDownToggle} />}
    </div>
  );
};
