import { ChipGray, ChipOrange, ChipWhite } from '@atom/public/Chip';
import { CheckBox } from '@atom/public/CheckBox';
import type { ListProps } from 'types';
import { ModalDetail } from '@organism/Modal/ModalDetail';
import { ModalDuplication } from '@organism/Modal/ModalDuplication';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { ModalDetailOpen, ModalDuplOpen } from '@store/slice/sliceModalToggle';

/**list atom : 최상위 div w-1220px 수정해야 할 듯 */
export const ListPage = ({ id, title, date, path, category }: ListProps) => {
  const modalDetailState = useSelector(
    (state: RootState) => state.modalToggle.modalDetailState
  );
  const modalDuplState = useSelector(
    (state: RootState) => state.modalToggle.modalDuplState
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="w-[1220px] justify-between bg-grayscale-0 border-y border-grayscale-300 px-5 py-4 relative flex flex-row content-center items-center text-center">
      <div className=" basis-1/12">
        <CheckBox checked={false} onChange={() => {}} />
      </div>
      <p className="basis-3/12">
        <a target="_blank" href={`/${path.slice(1)}`}>
          {title}
        </a>
      </p>
      <p className="basis-3/12">{path}</p>
      <div className="basis-1/12">
        <ChipGray text={category} />
      </div>
      <p className="basis-3/12">{date}</p>
      <div className="flex flex-row gap-2 basis-2/12">
        <ChipWhite text="상세" onClick={() => dispatch(ModalDetailOpen(id))} />
        {modalDetailState === id && <ModalDetail id={id} />}
        <ChipWhite text="복제" onClick={() => dispatch(ModalDuplOpen(id))} />
        {modalDuplState === id && <ModalDuplication id={id} />}
        <Link to={`/edit/${id}`}>
          <ChipOrange text="디자인" />
        </Link>
      </div>
    </div>
  );
};
