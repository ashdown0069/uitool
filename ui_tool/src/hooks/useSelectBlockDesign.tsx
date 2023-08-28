import { useState, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@store/store';
import { ImageContent } from '@molecule/Modal/ModalBlockDesign/ImageContent';
import { LineContent } from '@molecule/Modal/ModalBlockDesign/LineContent';
import { ListContent } from '@molecule/Modal/ModalBlockDesign/ListContent';
import { TextContent } from '@molecule/Modal/ModalBlockDesign/TextContent';
import { TableContent } from '@molecule/Modal/ModalBlockDesign/TableContent';
import { LayoutContent } from '@molecule/Modal/ModalBlockDesign/LayoutContent';
import type { BlockDesignMap } from 'types';

export const useSelectBlockDesign = () => {
  const selectedType = useSelector(
    (state: RootState) => state.sidebar.selectItem
  );
  const [selectedDesign, setSelectedDesign] = useState<ReactNode>(null);

  useEffect(() => {
    const data = blockDesignData.find((el) => el.type === selectedType);
    setSelectedDesign(data?.element());
  }, [selectedType]);

  return { selectedDesign, selectedType, sidebarInfo };
};

const blockDesignData: BlockDesignMap[] = [
  {
    id: 1,
    type: 'image',
    name: '이미지',
    element() {
      return <ImageContent list={this.contentList} type={this.type} />;
    },
    contentList: [
      {
        id: 1,
        contentLayout: 1,
        svgEl: await import('@assets/emptyImage/1-emptyImage-1.svg'),
      },
      {
        id: 2,
        contentLayout: 2,
        svgEl: await import('@assets/emptyImage/2-emptyImage-2.svg'),
      },
      {
        id: 3,
        contentLayout: 3,
        svgEl: await import('@assets/emptyImage/3-emptyImage-3.svg'),
      },
      {
        id: 4,
        contentLayout: 4,
        svgEl: await import('@assets/emptyImage/4-emptyImage-4.svg'),
      },
      {
        id: 5,
        contentLayout: 5,
        svgEl: await import('@assets/emptyImage/5-emptyImage-4.svg'),
      },
      {
        id: 6,
        contentLayout: 6,
        svgEl: await import('@assets/emptyImage/6-emptyImage-5.svg'),
      },
    ],
  },
  {
    id: 2,
    type: 'line',
    name: '구분선',
    element() {
      return <LineContent list={this.contentList} type={this.type} />;
    },
    contentList: [
      {
        id: 1,
        contentLayout: 1,
        svgEl: await import('@assets/line/line-1.svg'),
      },
      {
        id: 2,
        contentLayout: 2,
        svgEl: await import('@assets/line/line-2.svg'),
      },
      {
        id: 3,
        contentLayout: 3,
        svgEl: await import('@assets/line/line-3.svg'),
      },
      {
        id: 4,
        contentLayout: 4,
        svgEl: await import('@assets/line/line-4.svg'),
      },
      {
        id: 5,
        contentLayout: 5,
        svgEl: await import('@assets/line/line-5.svg'),
      },
      {
        id: 6,
        contentLayout: 6,
        svgEl: await import('@assets/line/line-6.svg'),
      },
      {
        id: 7,
        contentLayout: 7,
        svgEl: await import('@assets/line/line-7.svg'),
      },
      {
        id: 8,
        contentLayout: 8,
        svgEl: await import('@assets/line/line-8.svg'),
      },
      {
        id: 9,
        contentLayout: 9,
        svgEl: await import('@assets/line/line-9.svg'),
      },
      {
        id: 10,
        contentLayout: 10,
        svgEl: await import('@assets/line/line-10.svg'),
      },
    ],
  },
  {
    id: 3,
    type: 'list',
    name: '목록',
    element() {
      return <ListContent list={this.contentList} type={this.type} />;
    },
    contentList: [
      {
        id: 1,
        contentLayout: 1,
        svgEl: await import('@assets/list/list-1-circle.svg'),
      },
      {
        id: 2,
        contentLayout: 2,
        svgEl: await import('@assets/list/list-2-square.svg'),
      },
      {
        id: 3,
        contentLayout: 3,
        svgEl: await import('@assets/list/list-3-square.svg'),
      },
      ,
      {
        id: 4,
        contentLayout: 4,
        svgEl: await import('@assets/list/list-4-square.svg'),
      },
      {
        id: 5,
        contentLayout: 5,
        svgEl: await import('@assets/list/list-5-square.svg'),
      },
    ],
  },
  {
    id: 4,
    type: 'text',
    name: '텍스트',
    element() {
      return <TextContent list={this.contentList} type={this.type} />;
    },
    contentList: [
      {
        id: 1,
        contentLayout: 1,
        svgEl: await import('@assets/text/text-1.svg'),
      },
      {
        id: 2,
        contentLayout: 2,
        svgEl: await import('@assets/text/text-2.svg'),
      },
      {
        id: 3,
        contentLayout: 3,
        svgEl: await import('@assets/text/text-3.svg'),
      },
      {
        id: 4,
        contentLayout: 4,
        svgEl: await import('@assets/text/text-4.svg'),
      },
      {
        id: 5,
        contentLayout: 5,
        svgEl: await import('@assets/text/text-5.svg'),
      },
      {
        id: 6,
        contentLayout: 6,
        svgEl: await import('@assets/text/text-6.svg'),
      },
    ],
  },
  {
    id: 5,
    type: 'table',
    name: '표',
    element() {
      return <TableContent type={this.type} />;
    },
  },
  {
    id: 6,
    type: 'layout',
    name: '레이아웃',
    element() {
      return <LayoutContent list={this.contentList} type={this.type} />;
    },
    contentList: [
      {
        id: 1,
        contentLayout: 1,
        numberOfLayouts: 2,
        childrenContainerClassName: 'grid-cols-2',
        childrenClassName: ['col-span-1', 'col-span-1'],
        svgEl: await import('@assets/layout/layout-1.svg'),
      },
      {
        id: 2,
        contentLayout: 2,
        numberOfLayouts: 2,
        childrenContainerClassName: 'grid-cols-3',
        childrenClassName: ['col-span-2', 'col-span-1'],
        svgEl: await import('@assets/layout/layout-2.svg'),
      },
      {
        id: 3,
        contentLayout: 3,
        numberOfLayouts: 3,
        childrenContainerClassName: 'grid-cols-3',
        childrenClassName: ['col-span-1', 'col-span-1', 'col-span-1'],
        svgEl: await import('@assets/layout/layout-3.svg'),
      },
      {
        id: 4,
        contentLayout: 4,
        numberOfLayouts: 3,
        childrenContainerClassName: 'grid-cols-3 grid-rows-2',
        childrenClassName: [
          'h-full grid items-center col-span-1 row-span-2',
          'col-span-2 row-span-1',
          'col-span-2 row-span-1',
        ],
        svgEl: await import('@assets/layout/layout-4.svg'),
      },
      {
        id: 5,
        contentLayout: 5,
        numberOfLayouts: 4,
        childrenContainerClassName: 'grid-cols-4',
        childrenClassName: [
          'col-span-1',
          'col-span-1',
          'col-span-1',
          'col-span-1',
        ],
        svgEl: await import('@assets/layout/layout-5.svg'),
      },
      {
        id: 6,
        contentLayout: 6,
        numberOfLayouts: 4,
        childrenContainerClassName: 'grid-cols-2 grid-rows-3',
        childrenClassName: [
          'col-span-2',
          'col-span-1',
          'col-span-1',
          'col-span-2',
        ],
        svgEl: await import('@assets/layout/layout-6.svg'),
      },
    ],
  },
];

const sidebarInfo = blockDesignData.map((el) => ({
  id: el.id,
  type: el.type,
  name: el.name,
}));
