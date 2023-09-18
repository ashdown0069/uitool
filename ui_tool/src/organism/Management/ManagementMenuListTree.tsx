import {
  ListChildrenMenu,
  ListParentsMenu,
} from '@molecule/List/ListMenuTwoTypes';
import { ListAddMenu } from '@molecule/List/ListAddMenu';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import { ListAddMenuChildren } from '@molecule/List/ListAddMenuChildren';
import { AppDispatch, RootState } from '@store/store';
import { commonModalToggle } from '@store/slice/sliceModalToggle';
import { ModalAddMenuChildren } from '@organism/Modal/ModalAddMenuChildren';
import { initalize } from '@store/slice/sliceModal';
//타입 any 많음 -> 수정 필요
export const ManageMenuListTree = () => {
  const dispatch = useDispatch<AppDispatch>();
  const menuData = useSelector((state: RootState) => state.navigations);
  console.log('MENUDATA', menuData);
  const commonModalState = useSelector(
    (state: RootState) => state.modalToggle.commonModalState,
    shallowEqual
  );
  // const menuDataMappingFlat = (menuData: any) => {
  //   const result: any[] = [];
  //   menuData?.forEach((menuData: any) => {
  //     if (menuData.category.isParent) {
  //       result.push(menuData.category);
  //     }
  //     if (menuData.category.children.length > 0) {
  //       menuData.category.children.forEach((child: any) => {
  //         result.push(child);
  //       });
  //     }
  //   });
  //   // console.log(result, 'result');
  //   return result;
  // };

  // const mappingmenuData = useMemo(
  //   () => menuDataMappingFlat(menuData),
  //   [menuData]
  // );

  return (
    <>
      <ListAddMenu />
      <div className="w-[1220px] h-auto p-8 rounded-[26px] bg-grayscale-50 border border-grayscale-200 border-dashed">
        <div className="flex flex-col items-end gap-2">
          {menuData &&
            menuData.map((item: any, index: number, arr: any) => {
              return (
                <Fragment key={index}>
                  <ListParentsMenu
                    key={item.category.id}
                    id={item.category.id}
                    title={item.category.name}
                    path={item.category.path}
                    category={item.category.name}
                    date={item.category.date}
                    isParent={item.category.isParent}
                  />
                  {item.category.children.length > 0 &&
                    item.category.children.map((childItem: any) => (
                      <ListChildrenMenu
                        key={childItem.id}
                        id={childItem.id}
                        idx={childItem.idx}
                        title={childItem.name}
                        path={childItem.path}
                        category={childItem.name}
                        date={childItem.date}
                        isParent={childItem.isParent}
                      />
                    ))}
                  <ListAddMenuChildren
                    key={index}
                    index={index}
                    onClick={() =>
                      dispatch(commonModalToggle({ blockIndex: index }))
                    }
                  />
                  {commonModalState?.blockIndex !== undefined &&
                    commonModalState?.blockIndex === index && (
                      <ModalAddMenuChildren id={item.category.id} />
                    )}
                </Fragment>
              );
            })}
        </div>
      </div>
    </>
  );
};

//ListInnermenuData 타입 지정 다시하기 0801
//(<ListChildrenMenu key={key} title={title} path={path} category={category} date={date} isParent={isParent}
// if (index > 0 && value[index - 1].isParent ===) {
//   return <ListAddMenuChildren />;
// }

// {mappingmenuData &&
//   mappingmenuData.map((value, index) => {
//     if (value.isParent) {
//       return (
//         <ListParentsMenu
//           key={index}
//           id={value.id}
//           title={value.name}
//           path={value.path}
//           category={value.name}
//           date={value.date}
//           isParent={value.isParent}
//         />
//       );
//     } else if (!value.isParent) {
//       return (
//         <ListChildrenMenu
//           key={index}
//           id={value.id}
//           idx={value.idx}
//           title={value.name}
//           path={value.path}
//           category={value.name}
//           date={value.date}
//           isParent={value.isParent}
//         />
//       );
//     }

//   })}
