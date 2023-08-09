import { AdabtiveTab } from '@molecule/Edit/EditAdabtiveTab';
import { useLoaderData } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MouseEvent, useEffect, useState } from 'react';
import { EditPageDataType } from 'types';
import { GridContainer } from '@atom/public/GridContainer';
import { Image1 } from '@atom/Edit/Image1';
import { Image2 } from '@atom/Edit/Image2';
import { Image3 } from '@atom/Edit/Image3';
import { Image4 } from '@atom/Edit/Image4';
import { ImageCustom } from '@atom/Edit/ImageCustom';
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
import { Text1 } from '@atom/Edit/text/Text1';
import { Text2 } from '@atom/Edit/text/Text2';
import { Text3 } from '@atom/Edit/text/Text3';
import { Text4 } from '@atom/Edit/text/Text4';
import { Text5 } from '@atom/Edit/text/Text5';
import { Text6 } from '@atom/Edit/text/Text6';
import { list1 } from '@atom/Edit/list/list1';
import { list2 } from '@atom/Edit/list/list2';
import { list3 } from '@atom/Edit/list/list3';
import { list4 } from '@atom/Edit/list/list4';
import { Layout1 } from '@atom/Edit/layout/Layout1';
import {
  setInitialState,
  putNewBlockBottom,
  putNewBlockTop,
} from '@store/slice/sliceEditPage';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { LoadingSpinner } from '@atom/public/LoadingSpinner';
import { ModalBlockDesign } from '@organism/Modal/ModalBlockDesign';
import { EditBlock } from '@organism/Edit/EditBlock';
import { EditAddSelectDesign } from '@molecule/Edit/EditAddSelectDesign';
import { PageNavigation } from '@organism/Nav/Navigation';
import { Footer } from '@organism/Nav/Footer';
import { setEditMode } from '@store/slice/sliceEditMode';

export const LAYOUT_COMPONENT:any = {
  initial: {
    layout0: EditAddSelectDesign,
  },
  image: {
    layout1: Image1,
    layout2: Image2,
    layout3: Image3,
    layout4: Image4,
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
    layout1: Text1,
    layout2: Text2,
    layout3: Text3,
    layout4: Text4,
    layout5: Text5,
    layout6: Text6,
  },
  list: {
    layout1: list1,
    layout2: list2,
    layout3: list3,
    layout4: list4,
  },
  layout: {
    layout1: Layout1,
    layout2: Image2,
    layout3: Image3,
    layout4: Image4,
  },
};

export const EditPage = () => {
  const [activeTab, setActiveTab] = useState<string>('desktop');
  const [render, setRender] = useState<boolean>(false);
  const loadedData: any = useLoaderData(); //promise, page type
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
  console.log(pageData);
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };
  const handleEditAddBlockHere = (i: number) => {
    dispatch(putNewBlockTop({ index: i }));
  };

  const handleEditAddBlockBottom = (i: number) => {
    dispatch(putNewBlockBottom({ index: i }));
  };
  
  useEffect(() => {
    console.log('pageData = ', pageData);
  }, [pageData]);

  return (
    <>
      {pageData && (
        <div className="w-[100vw] h-auto">
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
            <PageNavigation />
            {/* <ModalBlockDesign /> */}
            <Layout1 />
            {pageData.page.map((v: any, i: any) => {
              const Component =
                LAYOUT_COMPONENT[v.type][`layout${v.contentLayout}`];
              return (
                <div key={i}>
                  <EditBlock
                    onClickTop={() => handleEditAddBlockHere(i)}
                    onClickBottom={() => handleEditAddBlockBottom(i)}
                    index={i}
                    key={i}
                  >
                    <Component key={i} block_id={i} />
                  </EditBlock>
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
// {pageData.page.map((v: any, i: any) => {
//   const Component =
//     LAYOUT_COMPONENT[v.type][`layout${v.contentLayout}`];
//   console.log('working');
//   return <Component key={i} />;
// })}
