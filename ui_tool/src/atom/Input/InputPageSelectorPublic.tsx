import { useState, ChangeEvent } from 'react';
import { ReactComponent as ArrowIcon } from '@assets/icon/icon_arrow.svg';
import { DropDownMenuListPublic } from './InputPageSelectorDropDownPublic';

interface InputPageSelectorProps {
  defaultValue: string;
  onChangeUrl: (url: string) => void;
}

export const InputPageSelector = ({
  defaultValue,
  onChangeUrl,
}: InputPageSelectorProps) => {
  const [dropdown, setDropDown] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const dropDownToggle = () => {
    setDropDown((prev) => !prev);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChangeUrl) {
      onChangeUrl(e.target.value);
    }
  };
  const handleSelectUrl = (id: number, title: string, url: string) => {
    setValue(url);
    if (onChangeUrl) {
      onChangeUrl(url);
    }
  };
  return (
    <div className="relative m-3">
      <div onClick={dropDownToggle} className="cursor-pointer">
        <input
          type="url"
          value={value}
          onChange={handleInputChange}
          disabled={true}
          placeholder="페이지 주소"
          className="w-[576px] h-[48px] rounded-[10px] bg-grayscale-50 placeholder:text-grayscale-300 pl-3 pr-12 text-body4r cursor-pointer"
        />
        <div className="absolute inset-y-0 inline rotate-90 h-fit w-fit right-3 top-1">
          <ArrowIcon />
        </div>
      </div>
      {dropdown && (
        <DropDownMenuListPublic
          onCancel={dropDownToggle}
          onSelect={handleSelectUrl}
        />
      )}
    </div>
  );
};
