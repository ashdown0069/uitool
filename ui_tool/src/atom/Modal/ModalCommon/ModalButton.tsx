import { useSubmit, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { AppDispatch, RootState } from '@store/store';
import { useDispatch } from 'react-redux';
import { updateLink } from '@store/slice/sliceEditPage';
import { closeAll } from '@store/slice/sliceModalToggle';
import type { ModalButtonProps } from 'types';

export const ModalButton = ({
  method,
  boxIndex,
  blockIndex,
  childrenBlockIndex,
}: ModalButtonProps) => {
  const submit = useSubmit();
  const location = useLocation();
  const data = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch<AppDispatch>();
  const submitHandler = () => {
    const url = location.pathname;
    console.log(url);
    // '/adminList/page' 페이지 action 함수로 전달 -> db저장 -> 리덕스 스토어 업데이트

    if (method === 'PUT' || method === 'POST') {
      submit(data, {
        method: method,
        action: url,
        encType: 'application/json',
      });
    } else if (method === 'Dispatch') {
      dispatch(
        updateLink({
          index: blockIndex,
          childrenBlockIndex: childrenBlockIndex,
          link: { link: data.url, linkIndex: boxIndex },
        })
      );
    }

    dispatch(closeAll());
  };

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
