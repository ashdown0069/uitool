import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { textDefaultConfig } from './TextDefalutConfig';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '@store/store';
import { updateSrc } from '@store/slice/sliceEditPage';

const templateContent = [
  '템플릿 추가는 이 배열에 작성',
  `<p style="text-align:center;"><span style="color:hsl(210,75%,60%);">Lorem Ipsum is simply dummy</span></p><p style="text-align:center;"><span class="text-big"><strong>Lorem Ipsum has been the industry's standard</strong></span></p><p style="text-align:center;">when an unknown printer took a galley of type and scrambled it to make a type specimen book.&nbsp;</p><p style="text-align:center;">It has survived not only five centuries, but also the leap into electronic typesetting</p>`,
  `<p style="text-align:center;"><span class="text-huge"><strong>Lorem Ipsum</strong></span></p><p style="text-align:center;">when an unknown printer took a galley of type and scrambled it to make a type specimen book.&nbsp;</p><p style="text-align:center;">It has survived not only five centuries, but also the leap into electronic typesetting</p>`,
  `<p style="text-align:center;"><span class="text-huge"><strong>Lorem Ipsum has been&nbsp;</strong></span><br><span class="text-huge"><strong>the industry's standard</strong></span></p>`,
  `<p style="text-align:center;"><span class="text-big"><strong>Lorem Ipsum has been the industry's standard</strong></span></p><p style="text-align:center;">when an unknown printer took a galley of type and scrambled it to make&nbsp;<br>a type specimen book. It has survived not only five centuries, but also&nbsp;<br>the leap into electronic typesetting</p><p style="text-align:center;"><a href="#"><span class="text-big" style="background-color:hsl(0, 0%, 30%);color:hsl(0, 0%, 100%);"><strong>임시 링크</strong></span></a></p>`,
  `<p style="text-align:center;">when an unknownwhen an unknown printer took a galley of&nbsp;<br>type and scrambled it to make a type specimen book.&nbsp;<br><br>It has survived not only five centuries, but also&nbsp;<br>the leap into electronic typesetting</p>`,
  `<p><span style="color:hsl(210,75%,60%);">Lorem Ipsum is simply dummy</span></p><p><span class="text-big"><strong>Lorem Ipsum has been the industry's standard</strong></span></p><p><a href="#"><span class="text-big" style="background-color:hsl(30, 75%, 60%);color:hsl(0, 0%, 100%);"><strong>임시 링크</strong></span></a></p>`,
];
interface Props {
  blockIndex: number;
  contentLayout: number;
  childrenBlockIndex?: number;
}
export const Text1 = ({
  blockIndex,
  contentLayout,
  childrenBlockIndex,
}: Props) => {
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
            src: templateContent[contentLayout],
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
            src: templateContent[contentLayout],
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
              : fetchedContent[blockIndex].children[childrenBlockIndex]?.src[0]
                  ?.src
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
