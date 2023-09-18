import { AdabtiveTab } from '@molecule/Edit/EditAdabtiveTab';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EditPageDataType } from 'types';
import { GridContainer } from '@atom/public/GridContainer';
import { Image1 } from '@atom/Edit/image/Image1';
import { Image2 } from '@atom/Edit/image/Image2';
import { Image3 } from '@atom/Edit/image/Image3';
import { Image4 } from '@atom/Edit/image/Image4';
import { Image5 } from '@atom/Edit/image/Image5';
import { Image6 } from '@atom/Edit/image/Image6';
import { Line1 } from '@atom/Edit/line/line1';
import { Line2 } from '@atom/Edit/line/line2';
import { Line3 } from '@atom/Edit/line/line3';
import { Line4 } from '@atom/Edit/line/line4';
import { Line5 } from '@atom/Edit/line/line5';
import { Line6 } from '@atom/Edit/line/line6';
import { Line7 } from '@atom/Edit/line/line7';
import { Line8 } from '@atom/Edit/line/line8';
import { Line9 } from '@atom/Edit/line/line9';
import { Line10 } from '@atom/Edit/line/line10';
import { Text } from '@atom/Edit/text/Text';
import { CardList } from '@atom/Edit/list/CardList';
import { Table } from '@atom/Edit/Table';

import {
  setInitialState,
  putNewBlockBottom,
  putNewBlockTop,
} from '@store/slice/sliceEditPage';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { EditBlock } from '@organism/Edit/EditBlock';
import { EditAddSelectDesign } from '@molecule/Edit/EditAddSelectDesign';
import { PageNavigation } from '@organism/Nav/Navigation';
import { Footer } from '@organism/Nav/Footer';
import { setEditMode } from '@store/slice/sliceEditMode';

export const LAYOUT_COMPONENT: any = {
  initial: {
    layout0: EditAddSelectDesign,
  },
  image: {
    layout1: Image1,
    layout2: Image2,
    layout3: Image3,
    layout4: Image4,
    layout5: Image5,
    layout6: Image6,
  },
  line: {
    layout1: Line1,
    layout2: Line2,
    layout3: Line3,
    layout4: Line4,
    layout5: Line5,
    layout6: Line6,
    layout7: Line7,
    layout8: Line8,
    layout9: Line9,
    layout10: Line10,
  },
  text: {
    layout1: Text,
  },
  list: {
    layout1: CardList,
  },
  table: {
    layout1: Table,
  },
};
export const EditPage = () => {
  const [activeTab, setActiveTab] = useState<string>('desktop');
  const loadedData: any = useLoaderData();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(
      setInitialState({
        page: loadedData.pageData.page,
        pageInfo: loadedData.pageData.pageInfo,
      })
    );
  }, [dispatch]);

  const pageData = useSelector(
    (state: RootState) => state.editPage,
    shallowEqual
  );
  // console.log(pageData);
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };
  const handleEditAddBlockHere = (i: number) => {
    dispatch(putNewBlockTop({ index: i }));
  };

  const handleEditAddBlockBottom = (i: number) => {
    dispatch(putNewBlockBottom({ index: i }));
  };

  return (
    <>
      {pageData && (
        <div className="z-10 w-screen h-auto">
          <AdabtiveTab onTabChange={handleTabChange} />
          <GridContainer
            deviceWidth={
              activeTab === 'desktop'
                ? 1220
                : activeTab === 'tablet'
                ? 785
                : activeTab === 'mobile'
                ? 375
                : 0
            }
          >
            {activeTab === 'desktop' && <PageNavigation />}

            {pageData.page.map((block: any, idx: any) => {
              if (block.type === 'layout') {
                //블럭디자인 추가에서 레이아웃 선택 O
                return (
                  <div
                    key={idx}
                    className={activeTab !== 'desktop' ? 'mt-24' : ''}
                  >
                    <EditBlock
                      onClickTop={() => handleEditAddBlockHere(idx)}
                      onClickBottom={() => handleEditAddBlockBottom(idx)}
                      index={idx}
                      key={idx}
                    >
                      <div
                        className={`grid gap-3 items-center ${block.childrenContainerClassName}`}
                      >
                        {block.children.map(
                          (childrenBlock: any, childrenIdx: any) => {
                            const Component =
                              LAYOUT_COMPONENT[childrenBlock.type][
                                `layout${
                                  childrenBlock.type === 'text'
                                    ? '1'
                                    : childrenBlock.type === 'list'
                                    ? '1'
                                    : childrenBlock.contentLayout
                                }`
                              ];

                            return (
                              <div
                                className={`${childrenBlock.className}`}
                                key={childrenIdx}
                              >
                                <Component
                                  key={childrenIdx}
                                  blockIndex={idx}
                                  childrenBlockIndex={childrenIdx}
                                  contentLayout={childrenBlock.contentLayout}
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </EditBlock>
                  </div>
                );
              } else {
                //블럭디자인 추가에서 레이아웃 선택 X
                const Component =
                  LAYOUT_COMPONENT[block.type][
                    `layout${
                      block.type === 'text'
                        ? '1'
                        : block.type === 'list'
                        ? '1'
                        : block.contentLayout
                    }`
                  ];
                return (
                  <div
                    key={idx}
                    className={activeTab !== 'desktop' ? 'mt-24' : ''}
                  >
                    <EditBlock
                      onClickTop={() => handleEditAddBlockHere(idx)}
                      onClickBottom={() => handleEditAddBlockBottom(idx)}
                      index={idx}
                      key={idx}
                    >
                      <Component
                        key={idx}
                        blockIndex={idx}
                        contentLayout={block.contentLayout}
                      />
                    </EditBlock>
                  </div>
                );
              }
            })}
            {activeTab === 'desktop' && <Footer />}
          </GridContainer>
        </div>
      )}
    </>
  );
};
