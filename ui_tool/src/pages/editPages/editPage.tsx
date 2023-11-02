import { AdabtiveTab } from '@molecule/Edit/EditAdabtiveTab';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GridContainer } from '@atom/public/GridContainer';

import {
  setInitialState,
  putNewBlockBottom,
  putNewBlockTop,
} from '@store/slice/sliceEditPage';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { EditBlock } from '@organism/Edit/EditBlock';

import { PageNavigation } from '@organism/Nav/Navigation';
import { Footer } from '@organism/Nav/Footer';
import { LAYOUT_COMPONENT } from '@constant/index';

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
