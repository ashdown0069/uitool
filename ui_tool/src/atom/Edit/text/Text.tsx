import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { textDefaultConfig } from '../../../types/TextDefaultConfig';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '@store/store';
import { updateSrc } from '@store/slice/sliceEditPage';
import type { IndexAndContentLayoutProps } from 'types';
import { TextEditorTemplateMap } from '@constant/index';

export const Text = ({
  blockIndex,
  contentLayout,
  childrenBlockIndex,
}: IndexAndContentLayoutProps) => {
  const dispatch = useDispatch();
  const fetchedContent = useSelector(
    (state: RootState) => state.editPage.page,
    shallowEqual
  );

  useEffect(() => {
    if (
      childrenBlockIndex === undefined &&
      !fetchedContent[blockIndex].src[0].src
    ) {
      // 레이아웃구조 X , 저장된 텍스트 X
      console.log('contentLayout ------', contentLayout);
      dispatch(
        updateSrc({
          index: blockIndex,
          src: {
            srcIndex: 0,
            src: TextEditorTemplateMap[contentLayout],
          },
        })
      );
    } else if (
      childrenBlockIndex !== undefined &&
      !fetchedContent[blockIndex].children[childrenBlockIndex]?.src[0]?.src
    ) {
      //레이아웃 중첩 구조, 저장된 텍스트 X
      dispatch(
        updateSrc({
          index: blockIndex,
          childrenBlockIndex: childrenBlockIndex,
          src: {
            srcIndex: 0,
            src: TextEditorTemplateMap[contentLayout],
          },
        })
      );
    }
  }, []);

  return (
    <div className="p-10">
      {((blockIndex !== undefined && fetchedContent[blockIndex].src[0].src) ||
        (blockIndex !== undefined &&
          childrenBlockIndex !== undefined &&
          fetchedContent[blockIndex].children[childrenBlockIndex].src[0]
            .src)) && (
        <CKEditor
          editor={Editor}
          config={textDefaultConfig}
          disabled={!location.pathname.startsWith('/edit/')}
          data={
            fetchedContent[blockIndex].src[0]?.src
              ? fetchedContent[blockIndex].src[0].src
              : childrenBlockIndex !== undefined &&
                fetchedContent[blockIndex].children[childrenBlockIndex]?.src[0]
                  ?.src
          }
          onChange={(_event: any, editor: any) => {
            const data = editor.getData();
            dispatch(
              updateSrc({
                index: blockIndex,
                childrenBlockIndex: childrenBlockIndex,
                src: {
                  srcIndex: 0,
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
