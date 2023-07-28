import { MouseEventHandler, ReactNode } from "react";

export type {Chip, TapProps, SearchProps, CircleProps, InputLoginProps, SquareNoramlProps,treeDataProps,ToolsPropsType, BlockDesignContent, ModalBlockDesignWrapperProps, BlockDesignMap, ModalTitleProps, EditPageContextType, EditPageDataType, btnType, SquareBigProps, SquareWideProps, InputPageTitleProps, Cell, ModalContainerProps, HamburgerProps, NavLinkProps, AddBlock, GroupProps, ListInnerData, DataType, ListProps}

interface Chip{
    text: string
}
interface TapProps {
    text: string;
}
interface SquareNoramlProps {
    title: string;
    period: string;
    description: string;
}
interface SearchProps {
    color: string;
}
interface InputLoginProps {
    type: 'Email' | 'Password';
  }
interface CircleProps {
    description: string;
  }
interface BlockDesignContent {
    id: number;
    svgFile: React.ReactNode;
}
interface treeDataProps {
    title: ReactNode;
    key: string;
}
  
interface BlockDesignMap {
    id: number;
    type: string;
    name: string;
    element: () => JSX.Element;
}
interface ToolsPropsType {
    block_id: number
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
    key: string | undefined;
    title: string;
    page: string;
    date: string;
    layout: Array<{ id: string; position: string }>;
}

interface btnType {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

interface SquareBigProps {
  title: string;
  description: string;
}

interface SquareWideProps {
  title: string;
  description: string;
}

interface InputPageTitleProps {
  type: 'short' | 'long';
  placeholder: string;
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
    onClick: (event: React.MouseEvent<HTMLElement>) => void
}

interface GroupProps {
    children: React.ReactNode
}

interface ListInnerData {
    name: string;
}

interface DataType extends ListProps {
    key: React.Key;
}

interface ListProps {
    name: string;
    date: string;
    query: string;
    menu: string;
}