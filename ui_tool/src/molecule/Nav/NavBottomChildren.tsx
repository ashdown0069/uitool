import { NavLink } from 'react-router-dom';

interface Props {
  title: string;
  content: string;
  NavChildren: any;
}
export const NavBottomChildren = ({ title, content, NavChildren }: Props) => {
  return (
    <div className="fixed left-0 z-50 hidden w-screen h-52 group-hover:flex ">
      <div className="flex flex-col w-1/3 h-full pt-7 pr-7 bg-grayscale-50 ">
        <div className="text-right text-body1B">{title}</div>
        <div className="flex justify-end">
          <div className="w-1/3 text-right mt-7 text-body2r">{content}</div>
        </div>
      </div>
      <div className="w-2/3 h-full bg-grayscale-0">
        <ul className="flex flex-col flex-wrap h-full pt-3 pl-7 w-fit">
          {NavChildren.map((item: any, index: number) => (
            <li key={index} className="pt-1 w-[250px] h-[35px]">
              <NavLink to={item.path}>
                <span className="text-body2m">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
//group-hover:flex
