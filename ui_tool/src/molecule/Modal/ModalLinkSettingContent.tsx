import { useState } from 'react';
import { InputPageSelector } from '@atom/Input/InputPageSelector';
import { InputPageInfo } from '@atom/Input/InputPageInfo';
import { ModalRadio } from '@atom/Modal/ModalCommon/ModalRadio';

export const ModalLinkSettingContent = () => {
  const [selectedOption, setSelectedOption] = useState('noLink');

  const handleRadioChange = (event: any) => {
    setSelectedOption(() => event.target.value);
  };

  return (
    <div className="flex flex-col m-3 mt-0 grow">
      <div className="mt-4 mb-4 gorw-0 shrink-0">
        <ModalRadio
          id="noLink"
          value="noLink"
          name="linksetting"
          label="링크없음"
          onClick={handleRadioChange}
        />
      </div>
      <div className="h-[90px]">
        <ModalRadio
          id="internalLink"
          value="internalLink"
          name="linksetting"
          label="내부 페이지 링크"
          onClick={handleRadioChange}
        />
        <div
          className={`${
            selectedOption === 'internalLink' ? '' : 'pointer-events-none'
          }`}
        >
          <InputPageSelector />
        </div>
      </div>
      <div className="h-[90px]">
        <ModalRadio
          id="setUrl"
          value="setUrl"
          name="linksetting"
          label="URL 입력"
          onClick={handleRadioChange}
        />
        <div
          className={`${
            selectedOption === 'setUrl' ? '' : 'pointer-events-none'
          }`}
        >
          <InputPageInfo
            type="url"
            inputWidth="short"
            placeholder="http:// , https:// 시작되는 링크 주소 입력"
          />
        </div>
      </div>
    </div>
  );
};
