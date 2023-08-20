//Component for dividing the edit block into two parts
/**
 * edit block을 두 부분으로 나누는 component
 * div를 flex로 나누어서 구현
 * div 1/2, div 1/2
 * div > edit block / div > edit block
 *
 */

const dataForm = {
  id: 1,
  type: 'layout',
  contentLayout: 1,
  src: [
    {
      type: 'initial',
      contentLayout: 0,
      src: [],
      link: [],
    },
    {
      type: 'initial',
      contentLayout: 0,
      src: [],
      link: [],
    },
  ],
};
import { LAYOUT_COMPONENT } from '@pages/editPages/editPage';

export const Layout2 = () => {
  return (
    <div className="flex flex-row w-full h-full gap-5 p-10">
      {dataForm.src.map((v: any, i: any) => {
        const Component = LAYOUT_COMPONENT[v.type][`layout${v.contentLayout}`];
        // console.log('Component = ', Component)
        return (
          <div key={i} className="w-1/2 p-2 border-2">
            {<Component key={i} blockIndex={i} />}
          </div>
        );
      })}
    </div>
  );
};
