import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateSrc } from '@store/slice/sliceEditPage';
import { useEffect } from 'react';
import { textDefaultConfig } from '../../types/TextDefaultConfig';
import type { CardEditorProps } from 'types';
import { CardEditorTemplateMap } from '@constant/index';

export const CardEditor = ({
  blockIndex,
  boxIndex,
  childrenBlockIndex,
  shape,
}: CardEditorProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const fetchedContent = useSelector(
    (state: RootState) => state.editPage.page,
    shallowEqual
  );

  useEffect(() => {
    if (childrenBlockIndex === undefined) {
      // 레이아웃구조 X , 저장된 텍스트 X
      dispatch(
        updateSrc({
          index: blockIndex,
          src: {
            srcIndex: boxIndex,
            src: CardEditorTemplateMap[shape],
          },
        })
      );
    } else if (childrenBlockIndex !== undefined) {
      //레이아웃 중첩 구조, 저장된 텍스트 X
      dispatch(
        updateSrc({
          index: blockIndex,
          childrenBlockIndex: childrenBlockIndex,
          src: {
            srcIndex: boxIndex,
            src: CardEditorTemplateMap[shape],
          },
        })
      );
    }
  }, []);

  return (
    <div>
      {(blockIndex !== undefined || childrenBlockIndex !== undefined) && (
        <CKEditor
          editor={Editor}
          config={textDefaultConfig}
          disabled={!location.pathname.startsWith('/edit/')}
          data={
            fetchedContent[blockIndex].src[boxIndex]?.src
              ? fetchedContent[blockIndex].src[boxIndex]?.src
              : childrenBlockIndex !== undefined &&
                fetchedContent[blockIndex].children[childrenBlockIndex]?.src[
                  boxIndex
                ]?.src
          }
          onChange={(_event: any, editor: any) => {
            const data = editor.getData();
            dispatch(
              updateSrc({
                index: blockIndex,
                childrenBlockIndex: childrenBlockIndex,
                src: {
                  srcIndex: boxIndex,
                  src: data,
                },
              })
            );
          }}
        />
      )}
    </div>
  );
};
