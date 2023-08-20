import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { textDefaultConfig } from './TextDefalutConfig';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '@store/store';
import { updateSrc } from '@store/slice/sliceEditPage';

const templateContent = `<p style="text-align:center;"><span style="color:hsl(210,75%,60%);">Lorem Ipsum is simply dummy</span></p><p style="text-align:center;"><span class="text-big"><strong>Lorem Ipsum has been the industry's standard</strong></span></p><p style="text-align:center;">when an unknown printer took a galley of type and scrambled it to make a type specimen book.&nbsp;</p><p style="text-align:center;">It has survived not only five centuries, but also the leap into electronic typesetting</p>`;
interface Props {
  blockIndex: number;
  childrenBlockIndex?: number;
}
export const Text1 = ({ blockIndex, childrenBlockIndex }: Props) => {
  const dispatch = useDispatch();
  const fetchedContent = useSelector(
    (state: RootState) => state.editPage.page[blockIndex],
    shallowEqual
  );
  // console.log('fetchedContent= ', fetchedContent);
  // const content = fetchedContent.src ? fetchedContent.src : templateContent;
  // console.log(fetchedContent[blockIndex].src[0].src);
  useEffect(() => {
    if (childrenBlockIndex === null && !fetchedContent.src[0].src) {
      // 레이아웃구조 X , 저장된 텍스트 X
      dispatch(
        updateSrc({
          index: blockIndex,
          src: {
            srcIndex: 0,
            src: templateContent,
          },
        })
      );
    } else if (
      childrenBlockIndex !== null &&
      !fetchedContent.children[childrenBlockIndex].src[0].src
    ) {
      //레이아웃 중첩 구조, 저장된 텍스트 X
      dispatch(
        updateSrc({
          index: blockIndex,
          childrenBlockIndex: childrenBlockIndex,
          src: {
            srcIndex: 0,
            src: templateContent,
          },
        })
      );
    }
  }, []);

  return (
    <div className="p-10">
      {((fetchedContent.src && fetchedContent.src[0].src) ||
        fetchedContent.children[childrenBlockIndex].src[0].src) && (
        <CKEditor
          editor={Editor}
          config={textDefaultConfig}
          disabled={!location.pathname.startsWith('/edit/')}
          data={
            fetchedContent.src[0].src
              ? fetchedContent.src[0].src
              : fetchedContent.children[childrenBlockIndex].src[0].src
          }
          onChange={(event: any, editor: any) => {
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
