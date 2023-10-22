import { useState } from 'react';
import { ModalBlockDesignLargeBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignLargeBox';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { blockModalToggle } from '@store/slice/sliceModalToggle';
import { tableLayout } from '@store/slice/sliceTable';
import { updateTypeAndContentLayout } from '@store/slice/sliceEditPage';
import type { BlockDesignSelectedType } from 'types';
import type { Cell } from 'types';

export const TableContent = ({ type }: BlockDesignSelectedType) => {
  const [clickedCell, setClickedCell] = useState<Cell | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { selectedBlockIndex, selectedchildrenBlockIndex } = useSelector(
    (state: RootState) => state.modalToggle
  );
  const handleCellClick = (row: number, col: number) => {
    setClickedCell({ row, col });
    dispatch(
      updateTypeAndContentLayout({
        index: selectedBlockIndex,
        childrenBlockIndex: selectedchildrenBlockIndex,
        type,
        contentLayout: 1,
      })
    );
    dispatch(tableLayout({ row: row, col: col }));
    dispatch(blockModalToggle());
  };

  const isCellClicked = (row: number, col: number) => {
    if (!clickedCell) return false;
    return row <= clickedCell.row && col <= clickedCell.col;
  };
  return (
    <ModalBlockDesignLargeBox>
      <div className="fixed mb-4 text-center top-32 text-body1m">
        {clickedCell
          ? `${clickedCell.row + 1} X ${clickedCell.col + 1}`
          : `${8} X ${5}`}
      </div>
      {Array.from({ length: 8 }, (_, row) => (
        <div key={row}>
          {Array.from({ length: 5 }, (_, col) => (
            <div
              key={col}
              className={`w-[98px] h-[72px] border-2 border-dashed border-gray-300 m-2 ${
                isCellClicked(row, col) ? 'bg-primary-100' : ''
              }`}
              onClick={() => handleCellClick(row, col)}
              onMouseEnter={() => setClickedCell({ row, col })}
              onMouseLeave={() => setClickedCell(null)}
            ></div>
          ))}
        </div>
      ))}
    </ModalBlockDesignLargeBox>
  );
};
