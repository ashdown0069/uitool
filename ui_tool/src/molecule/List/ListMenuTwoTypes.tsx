import { ReactComponent as ArrowIcon } from '@assets/icon/icon_arrow.svg';
import { ReactComponent as SettingIcon } from '@assets/icon/icon_setting.svg';
import { ReactComponent as CloseIcon } from '@assets/icon/icon_close.svg';
import type { ListInnerData } from 'types';
import { useState } from 'react';
import { ListMenuSettingBlock } from './ListMenuSettingBlock';
import { useSelector, useDispatch } from 'react-redux';
import { deletePageData } from '@store/slice/sliceModal';

export const ListParentsMenu = ({ name, key }: ListInnerData) => {
  const dispatch = useDispatch();
  const pageDataId = useSelector((state:any) => state.modal.id);
  const [isToggle, setIsToggle] = useState(false);
  const toggle = () => setIsToggle(!isToggle);
  
  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
        dispatch(deletePageData());
    }
};
  return (
    <>
    <div className="w-[1150px] h-[70px] pb-0 flex flex-row content-center justify-between items-center bg-grayscale-0 border border-grayscale-300 rounded hover:bg-grayscale-50">
      <div className="w-[70px] h-[70px] items-center justify-center flex border-grayscale-300 border-r">
        <ArrowIcon />
      </div>
      <p className="ml-[20px] grow text-grayscale-600 text-body2m">{name}</p>
      <div onClick={toggle} className="w-[70px] h-[70px] items-center justify-center flex border-l border-grayscale-300">
        <SettingIcon />
      </div>
      <div onClick={handleDelete} className="w-[70px] h-[70px] items-center justify-center flex border-l border-grayscale-300">
        <CloseIcon />
      </div>
    </div>
      {isToggle && <ListMenuSettingBlock id={pageDataId}/>}
      </>
  );
};

export const ListChildrenMenu = ({ name, key }: ListInnerData) => {
  const [isToggle, setIsToggle] = useState(false);
  const toggle = () => setIsToggle(!isToggle);
  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      console.log('삭제');
    }
  };
  

  return (
    <>
    <div className="w-[1080px] h-[70px] pb-0 flex flex-row content-center justify-between items-center bg-grayscale-0 border border-grayscale-300 rounded hover:bg-grayscale-50">
      <p className="ml-[20px] grow text-grayscale-600 text-body2m">{name}</p>
      <div onClick={toggle} className="w-[70px] h-[70px] items-center justify-center flex border-l border-grayscale-300">
        <SettingIcon />
      </div>
      <div onClick={handleDelete} className="w-[70px] h-[70px] items-center justify-center flex border-l border-grayscale-300">
        <CloseIcon />
      </div>
    </div>
      {isToggle && <ListMenuSettingBlock />}
    </>
  );
};

//액티브 토글 로테이크 90Deg
/**
 * 블록에서 톱니를 클릭하면
 * 상세설정 열리고,
 * 상세설정에서 제목, 링크, 새창 열기를 수정할 수 있고,
 * 블록에서 Close를 누르면,
 * alert로 정말 삭제하겠습니까? 물어보고,
 * 확인을 누르면 삭제되고,
 * 취소를 누르면 삭제되지 않는다.
 */

//ModalLinkSettingContent
//<InputPageInfo type="title" inputWidth="short" placeholder="페이지명" />
//<InputPageInfo type="url" inputWidth="short" placeholder="pageURL" />
//새창열기