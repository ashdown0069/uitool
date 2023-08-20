import { EditAddSelectDesign } from '@molecule/Edit/EditAddSelectDesign';
import { AppDispatch } from '@store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateBlockForNestedLayout } from '@store/slice/sliceEditPage';
export const Layout1 = ({ blockIndex }: { blockIndex: number }) => {
  return (
    <div className="flex flex-row w-full h-full gap-5 p-10">
      <div className="w-1/2 p-2 border-2">
        <EditAddSelectDesign blockIndex={blockIndex} />
      </div>
      <div className="w-1/2 p-2 border-2">
        <EditAddSelectDesign blockIndex={blockIndex} />
      </div>
    </div>
  );
};
