import { useSubmit, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { AppDispatch, RootState } from '@store/store';
import { useDispatch } from 'react-redux';
import { updateLink } from '@store/slice/sliceEditPage';
import { closeAll } from '@store/slice/sliceModalToggle';
interface ModalButtonProps {
  method: 'PUT' | 'POST' | 'Dispatch';
  boxIndex?: number;
  blockIndex?: number;
  childrenBlockIndex?: number;
}

export const ModalButton = ({
  method,
  boxIndex,
  blockIndex,
  childrenBlockIndex,
}: ModalButtonProps) => {
  const submit = useSubmit();
  const location = useLocation();
  const data = useSelector((state: RootState) => state.modal);
  console.log(boxIndex, blockIndex);
  const dispatch = useDispatch<AppDispatch>();
  const submitHandler = () => {
    const url = location.pathname;
    console.log(url);
    // '/adminList/page' 페이지 action 함수로 전달 -> db저장 -> 리덕스 스토어 업데이트

    if (method === 'PUT' || method === 'POST') {
      submit(data, {
        method: method,
        action: '/adminlist/page', // 메뉴관리 페이지관리에서 사용하도록 url설정
        encType: 'application/json',
      });
    } else if (method === 'Dispatch') {
      console.log(data.url, boxIndex);
      //edit page에서 사용 , index 부분 나중에 블럭 인덱스로 바꿔야함
      dispatch(
        updateLink({
          index: blockIndex,
          childrenBlockIndex: childrenBlockIndex,
          link: { link: data.url, linkIndex: boxIndex },
        })
      );
    }

    console.log(data);
    dispatch(closeAll());
  };

  // if (!boxIndex) return <div>Loading...</div>;
  return (
    <div className="w-[614px] h-[53px] flex">
      <button
        className="text-grayscale-0 bg-grayscale-800 grow text-body1B rounded-bl-[10px] hover:bg-grayscale-700"
        onClick={() => dispatch(closeAll())}
      >
        닫기
      </button>
      <button
        className="text-grayscale-0 bg-primary-950 grow text-body1B rounded-br-[10px] hover:bg-primary-800"
        onClick={submitHandler}
      >
        확인
      </button>
    </div>
  );
};
