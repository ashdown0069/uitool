import { NavLink } from 'react-router-dom';
import type { NavLinkProps } from 'types';

export const NavLinkCustom = ({ title, to, end }: NavLinkProps) => {
  const defaultClasses =
    'w-[177px] h-[64px] inline-flex items-center justify-center text-body2B hover:bg-primary-950 hover:text-grayscale-0';
  const active = 'rounded-[10px] bg-primary-950 text-grayscale-0';
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${defaultClasses} ${active}` : `${defaultClasses}`
      }
      end={end}
    >
      {title}
    </NavLink>
  );
};
