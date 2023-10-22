import { InputPageSelector } from '@atom/Input/InputPageSelectorPublic';
import { InputFormPublic } from '@atom/Input/InputFormPublic';
import { CheckBox } from '@atom/public/CheckBox';
import { useDispatch } from 'react-redux';
import {
  setTitle,
  setUrl,
  setBlankOption,
} from '@store/slice/sliceNavigations';
import { ChangeEvent, useEffect, useState } from 'react';
import { ButtonOutline } from '@atom/Button/ButtonOutline';
import { useSubmit } from 'react-router-dom';
import { ListMenuSettingBlockProps } from '@types/index';

export const ListMenuSettingBlock = ({
  id,
  idx,
  name,
  path,
  isParent,
}: ListMenuSettingBlockProps) => {
  const [checked, setChecked] = useState(false);
  const [changeTitle, setChangeTitle] = useState(name);
  const [changeUrl, setChangeUrl] = useState(path);
  const dispatch = useDispatch();

  const submit = useSubmit();

  const handleBlankOptionChange = (isChecked: boolean) => {
    setChecked(isChecked);
    // dispatch(setBlankOption());
  };

  //id 받아야함.
  const handleTitleChange = () => {
    if (window.confirm('확인을 누르면 입력하신 내용으로 수정됩니다.')) {
      const submitData = {
        id: id,
        idx: idx,
        title: changeTitle,
        url: changeUrl,
      };
      submit(submitData, {
        method: 'PUT',
        action: '/adminlist/menu',
        encType: 'application/json',
      });
    }
  };

  useEffect(() => {
    dispatch(
      setTitle({ isParent: isParent, id: id, idx: idx, title: changeTitle })
    );
    dispatch(setUrl(changeUrl));
    dispatch(setBlankOption());
  }, [changeTitle, changeUrl, checked]);

  /**
   * isParent true 일때
   * 1단 [id]로 접근
   * isParam false 일때
   * 2단 [id][idx]로 접근
   */
  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setChangeTitle(event?.target.value);
  };
  return (
    <div className="bg-white w-[1080px] h-[180px] border-grayscale-300 border rounded items-center p-4 float-right">
      <label className="text-body2m text-grayscale-600">제목</label>
      <InputFormPublic
        type={'title'}
        inputWidth={'long'}
        placeholder={''}
        defaultValue={name}
        onChangeValue={handleTitle}
      />
      <div className="flex items-center">
        <label className="text-body2m text-grayscale-600">링크</label>
        <InputPageSelector defaultValue={path} onChangeUrl={setChangeUrl} />
        {/* <InputPageSelector defaultValue={path} /> */}
        <CheckBox checked={checked} onChange={handleBlankOptionChange} />
        <label className="ml-3 grow text-body2m text-grayscale-600">
          새창 열기
        </label>
        <ButtonOutline text={'저장하기'} onClick={handleTitleChange} />
      </div>
    </div>
  );
};
