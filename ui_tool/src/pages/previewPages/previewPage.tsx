import { AdabtiveTab } from '@molecule/Edit/EditAdabtiveTab';
import { GridContainer } from '@atom/public/GridContainer';
import { LAYOUT_COMPONENT } from '@pages/editPages/editPage';
import { PageNavigation } from '@organism/Nav/Navigation';
import { Footer } from '@organism/Nav/Footer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { MouseEvent, useEffect, useState } from 'react';
import { AppDispatch, RootState } from '@store/store';
import { EditBlock } from '@organism/Edit/EditBlock';
import { useLoaderData } from 'react-router-dom';
import { setInitialState } from '@store/slice/sliceEditPage';

export const PreviewPage = () => {
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
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  // !location.pathname.startsWith('/edit/')

  return (
    <>
      {pageData && (
        <div className="w-[100vw] h-auto">
          {/* <AdabtiveTab onTabChange={handleTabChange} /> */}
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
            <PageNavigation />
            {pageData.page.map((v: any, i: any) => {
              if (v.type === 'initial')
                return (
                  <div className="flex items-center justify-center w-full h-60">
                    <div>빈 페이지 입니다</div>
                  </div>
                );
              const Component =
                LAYOUT_COMPONENT[v.type][`layout${v.contentLayout}`];
              return (
                <div key={i}>
                  <Component key={i} blockIndex={i} />
                </div>
              );
            })}
            <Footer />
          </GridContainer>
        </div>
      )}
    </>
  );
};
