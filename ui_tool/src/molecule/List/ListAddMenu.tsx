import { ButtonOutline } from '@atom/Button/ButtonOutline';
import { ModalAddMenu } from '@organism/Modal/ModalAddMenu';
import { blockModalToggle } from '@store/slice/sliceModalToggle';
import { AppDispatch, RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';

export const ListAddMenu = () => {
  const modalState = useSelector(
    (state: RootState) => state.modalToggle.modalState
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex flex-row justify-between pt-20 pb-11">
      <div className="flex flex-col">
        <h3 className=" text-h3">메뉴 설정</h3>
        <p className=" text-body3r">메뉴 항목과 구조를 설정해주세요.</p>
      </div>
      <ButtonOutline
        onClick={() => dispatch(blockModalToggle())}
        text={'메뉴 항목 추가'}
      />
      {modalState && <ModalAddMenu />}
    </div>
  );
};
