import { NavLinkCustom } from '@atom/Nav/NavLinkCustom';
import { NavButtonHamburger } from '@atom/Nav/NavButtonHamburger';
import { NavButtonSearch } from '@atom/Nav/NavButtonSearch';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { NavBottomChildren } from './NavBottomChildren';

export const NavBottom = () => {
  const navigation = useSelector((state: RootState) => state.navigations);
  return (
    <nav>
      <ul className="inline-flex w-full">
        {navigation.map((item, idx) => (
          <li key={idx} className="relative group">
            <NavLinkCustom
              title={item.category.name}
              to={item.category.path}
              end
            />
            <NavBottomChildren
              title={item.category.name}
              content={item.category.content}
              NavChildren={item.category.children}
            />
          </li>
        ))}
        <li>
          <NavButtonHamburger />
        </li>
        <li>
          <NavButtonSearch />
        </li>
      </ul>
    </nav>
  );
};
