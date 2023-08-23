import { MouseEventHandler, ReactNode } from 'react';

export type {
  AdabtiveTabProps,
  GridContainerProps,
  Chip,
  TapProps,
  SearchProps,
  InputLoginProps,
  treeDataProps,
  ToolsPropsType,
  BlockDesignContent,
  ModalBlockDesignWrapperProps,
  BlockDesignMap,
  ModalTitleProps,
  EditPageContextType,
  EditPageDataType,
  btnType,
  InputPageProps,
  Cell,
  ModalContainerProps,
  HamburgerProps,
  NavLinkProps,
  AddBlock,
  GroupProps,
  ListInnerData,
  DataType,
  ListProps,
  CheckBoxProps,
  CardProps,
  CardEditorProps,
  IndexAndContentLayoutProps,
  ImageProps,
};

interface CardProps {
  blockIndex: number;
  boxIndex: number;
  childrenBlockIndex?: number;
}

interface CardEditorProps extends CardProps {
  shape: 'circle' | 'normal' | 'wide' | 'big' | 'default';
}

interface IndexAndContentLayoutProps {
  blockIndex: number;
  contentLayout: number;
  childrenBlockIndex?: number;
}

interface ImageProps {
  boxIndex: number;
  blockIndex: number;
  childrenBlockIndex?: number;
  isCircle?: boolean;
}

interface Chip {
  text: string;
  onClick?: () => void;
}
interface TapProps {
  LeftText: string;
  RightText: string;
  RightTo: string;
  LeftTo: string;
}

interface SearchProps {
  color: string;
}
interface InputLoginProps {
  type: 'Email' | 'Password';
}

interface treeDataProps {
  title: ReactNode;
  isParent: boolean;
  key: string;
}

interface BlockDesignContent {
  id: number;
  contentLayout: number;
  svgEl: typeof import('*.svg');
}

interface BlockDesignMap {
  id: number;
  type: string;
  name: string;
  element: () => JSX.Element;
  contentList?: BlockDesignContent[];
}

interface ToolsPropsType {
  blockIndex: number;
}

interface ModalTitleProps {
  title: string;
}
interface ModalBlockDesignWrapperProps {
  type: string;
}

interface EditPageContextType {
  editPageData: Object;
  setEditPageData: React.Dispatch<React.SetStateAction<EditPageDataType>>;
}

interface EditPageDataType {
  pageInfo: {
    id: number;
    title: string;
    path: string;
    category: string;
    date: string;
  };
  page: {
    index: number;
    type: string;
    layoutTable: number[];
    layout: number;
  }[];
}

interface btnType {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

interface InputPageProps {
  type: 'title' | 'url' | 'duplTitle' | 'duplUrl';
  inputWidth: 'short' | 'long';
  placeholder: string;
  defaultValue?: string;
}

interface Cell {
  row: number;
  col: number;
}

interface ModalContainerProps {
  height: 'high' | 'low';
}

interface HamburgerProps {
  color: string;
}

interface NavLinkProps {
  title: string;
  to: string;
  end?: boolean | undefined;
}

interface AddBlock {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

interface GroupProps {
  children: React.ReactNode;
}

interface ListInnerData {
  id: number;
  idx?: number | undefined;
  title: string;
  path: string;
  isParent: boolean;
  category: string;
  date: string;
}

interface DataType extends ListProps {
  key: React.Key;
}

interface ListProps {
  id: number;
  title: string;
  date: string;
  path: string;
  category: string;
}

interface GridContainerProps {
  children: ReactNode;
  deviceWidth: number;
}
interface AdabtiveTabProps {
  onTabChange: (tabName: string) => void;
}
interface CheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}
