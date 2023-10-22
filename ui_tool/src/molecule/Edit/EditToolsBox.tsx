import { ReactComponent as IconPencil } from '@assets/icon/icon_EditPencil.svg';
import { ReactComponent as IconReset } from '@assets/icon/icon_EditReset.svg';
import { ReactComponent as IconUp } from '@assets/icon/icon_EditUp.svg';
import { ReactComponent as IconDown } from '@assets/icon/icon_EditDown.svg';
import { ReactComponent as IconTrashCan } from '@assets/icon/icon_EditTrashCan.svg';
import { ToolsPropsType } from 'types';
import {
  moveUpBlock,
  moveDownBlock,
  deleteBlock,
  setToInitialBlock,
} from '@store/slice/sliceEditPage';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { ModalBlockDesign } from '@organism/Modal/ModalBlockDesign';
import {
  blockModalToggle,
  selectBlockIndex,
  clearIndex,
} from '@store/slice/sliceModalToggle';
import { pushEmptyObjToSrcAndLink } from '@store/slice/sliceEditPage';
/** onClick 설정 필요 */
export const EditToolsBox = ({ blockIndex }: ToolsPropsType) => {
  const dispatch = useDispatch<AppDispatch>();

  const pageData = useSelector((state: RootState) => state.editPage);
  const modalState = useSelector(
    (state: RootState) => state.modalToggle.modalState
  );

  const AddList = (blockIndex: number) => {
    dispatch(pushEmptyObjToSrcAndLink({ index: blockIndex }));
  };

  const Write = (blockIndex: number) => {};
  const ReDesignSelect = () => {
    dispatch(clearIndex());
    dispatch(selectBlockIndex(blockIndex));
    dispatch(blockModalToggle());
  };
  const MoveUp = (blockIndex: number) => {
    console.log('moveup', blockIndex);
    if (blockIndex === 0) return;
    dispatch(moveUpBlock({ index: blockIndex }));
  };
  const MoveDown = (blockIndex: number) => {
    console.log('movedown', blockIndex);
    if (blockIndex >= pageData.page.length) return;
    dispatch(moveDownBlock({ index: blockIndex }));
  };
  const Trash = (blockIndex: number) => {
    if (pageData.page.length === 1) {
      dispatch(
        setToInitialBlock({
          index: 0,
        })
      );
    } else if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deleteBlock({ index: blockIndex }));
    }
  };

  return (
    <div className="absolute top-[15px] right-[50px] w-[246px] h-[54px] rounded-full bg-grayscale-600 hidden group-hover:flex z-20 justify-evenly pr-4 pl-4">
      {pageData.page[blockIndex].type === 'list' ? (
        <button
          className="absolute -left-28 w-[90px] h-full bg-grayscale-600 rounded-3xl text-grayscale-0 text-body2r hover:text-primary-900"
          onClick={() => AddList(blockIndex)}
        >
          ADD
        </button>
      ) : null}
      {/* <button onClick={() => console.log('write')}>
        <IconPencil className="fill-white hover:fill-primary-900" />
      </button> */}
      <button onClick={() => ReDesignSelect()}>
        <IconReset className="fill-white hover:fill-primary-900" />
      </button>
      <button onClick={() => MoveUp(blockIndex)}>
        <IconUp className="fill-white hover:fill-primary-900" />
      </button>
      <button onClick={() => MoveDown(blockIndex)}>
        <IconDown className="fill-white hover:fill-primary-900" />
      </button>
      <button onClick={() => Trash(blockIndex)}>
        <IconTrashCan className="fill-white hover:fill-primary-900" />
      </button>
      {modalState && <ModalBlockDesign />}
    </div>
  );
};
