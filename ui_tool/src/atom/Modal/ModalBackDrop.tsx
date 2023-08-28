import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import { closeAll } from '@store/slice/sliceModalToggle';
export const ModalBackDrop = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      className="fixed top-0 left-0 z-10 w-screen h-screen backdrop-brightness-75"
      onClick={() => dispatch(closeAll())}
    />
  );
};
