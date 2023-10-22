import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import {
  setTitle,
  setUrl,
  setDuplTitle,
  setDuplUrl,
  setAddMenuTitle,
  setAddMenuContent,
} from '@store/slice/sliceModal';
import type { InputPageProps } from 'types';

export const InputPageInfo = ({
  type,
  inputWidth,
  placeholder,
  defaultValue,
}: InputPageProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputMap = {
      title: setTitle,
      url: setUrl,
      duplTitle: setDuplTitle,
      duplUrl: setDuplUrl,
      addMenu: setAddMenuTitle,
      addMenuContent: setAddMenuContent,
    };
    const dispathFn = inputMap[type];
    dispatch(dispathFn(e.target.value));
  };

  return (
    <input
      type="text"
      defaultValue={defaultValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={`${
        inputWidth === 'short' ? 'w-[576px]' : 'w-[943px]'
      } h-[48px] rounded-[10px] bg-grayscale-50 placeholder:text-grayscale-300 pl-3 text-body4r m-3`}
    />
  );
};
