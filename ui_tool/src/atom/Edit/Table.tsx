import { AppDispatch, RootState } from '@store/store';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useState, useRef } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { textDefaultConfig } from '@atom/Edit/text/TextDefalutConfig';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { updateSrc } from '@store/slice/sliceEditPage';

interface Props {
  blockIndex: number;
  childrenBlockIndex?: number;
}
export const Table = ({ blockIndex, childrenBlockIndex }: Props) => {
  const editorRef = useRef(null);
  const [tableData, setTableData] = useState<any>('');
  const tableInfo = useSelector((state: RootState) => state.table);
  const dispatch = useDispatch<AppDispatch>();
  const fetchedContent = useSelector(
    (state: RootState) => state.editPage.page[blockIndex],
    shallowEqual
  );
  const handleEditorReady = (editor: any) => {
    if (fetchedContent.src[0].src) {
      setTableData(() => fetchedContent.src[0].src);
    } else if (
      childrenBlockIndex !== undefined &&
      fetchedContent.children[childrenBlockIndex].src[0].src
    ) {
      setTableData(
        () => fetchedContent.children[childrenBlockIndex].src[0].src
      );
    } else {
      editorRef.current = editor;

      editor.model.change((writer) => {
        const table = writer.createElement('table', {
          headingRows: tableInfo.row,
          headingColumns: tableInfo.col,
        });

        for (let i = 0; i <= tableInfo.col; i++) {
          const row = writer.createElement('tableRow');

          for (let j = 0; j <= tableInfo.row; j++) {
            const cellContent = writer.createText(`Cell ${i + 1}, ${j + 1}`);
            const tableCell = writer.createElement(
              'tableCell',
              {},
              cellContent
            );
            writer.append(tableCell, row);
          }

          writer.append(row, table);
        }

        editor.model.insertContent(table);
      });
    }
  };
  return (
    <div className="pt-20 pb-20">
      {blockIndex === undefined && <div>Loading...</div>}
      {blockIndex !== undefined && (
        <CKEditor
          editor={Editor}
          config={textDefaultConfig}
          disabled={!location.pathname.startsWith('/edit/')}
          data={tableData}
          onReady={handleEditorReady}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            console.log(data);
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
          ref={editorRef}
        />
      )}
    </div>
  );
};
