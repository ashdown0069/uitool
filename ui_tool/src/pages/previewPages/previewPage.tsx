import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GridContainer } from '@atom/public/GridContainer';
import { Image1 } from '@atom/Edit/image/Image1';
import { Image2 } from '@atom/Edit/image/Image2';
import { Image3 } from '@atom/Edit/image/Image3';
import { Image4 } from '@atom/Edit/image/Image4';
import { Image5 } from '@atom/Edit/image/Image5';
import { Image6 } from '@atom/Edit/image/Image6';
import {
  Line1,
  Line2,
  Line3,
  Line4,
  Line5,
  Line6,
  Line7,
  Line8,
  Line9,
  Line10,
} from '@atom/Edit/line/line';
import { Text } from '@atom/Edit/text/Text';
import { CardList } from '@atom/Edit/card/CardList';
import { Table } from '@atom/Edit/Table';
import { setInitialState } from '@store/slice/sliceEditPage';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { PageNavigation } from '@organism/Nav/Navigation';
import { Footer } from '@organism/Nav/Footer';
import { initalizeNavigations } from '@store/slice/sliceNavigations';

const empty = () => {
  return (
    <div className="flex items-center justify-center w-full h-40 align-middle text-body1B">
      빈 페이지 입니다
    </div>
  );
};

export const LAYOUT_COMPONENT: any = {
  initial: {
    layout0: empty,
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
export const PreviewPage = () => {
  const [activeTab, setActiveTab] = useState<string>('desktop');
  const loadedData: any = useLoaderData();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getNavInfo = async () => {
      const res = await fetch('http://localhost:5174/adminlist');
      if (!res.ok) {
        throw Error('fetching error, try again...');
      }
      const resData = await res.json();
      dispatch(initalizeNavigations(resData.navigations));
    };
    getNavInfo();
  }, []);

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

  return (
    <>
      {pageData && (
        <div className="z-10 w-screen h-auto">
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
                    <Component
                      key={idx}
                      blockIndex={idx}
                      contentLayout={block.contentLayout}
                    />
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
