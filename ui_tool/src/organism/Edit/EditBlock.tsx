import {
  EditAddBlockHereTop,
  EditAddBlockHereBottom,
} from '@molecule/Edit/EditAddBlockHere';
import { EditGroupContainer } from '@molecule/Edit/EditGroupContainer';
import { EditToolsBox } from '@molecule/Edit/EditToolsBox';
import { EditBlockProps } from '@types/index';

export const EditBlock = ({
  children,
  onClickTop,
  onClickBottom,
  index,
}: EditBlockProps) => {
  return (
    <EditGroupContainer>
      <EditAddBlockHereTop onClick={onClickTop} />
      {children}
      <EditToolsBox blockIndex={index} />
      <EditAddBlockHereBottom onClick={onClickBottom} />
    </EditGroupContainer>
  );
};
