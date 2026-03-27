import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

interface NavLinkProps {
  href: string;
  name: string;
  className: string;
  onClick?: () => void;
}

export default function NavLink({
  href,
  name,
  className,
  onClick,
}: NavLinkProps) {
  const isHashLink = href.includes('#');

  if (isHashLink) {
    return (
      <HashLink
        smooth
        to={href}
        className={className}
        onClick={onClick}
        scroll={(el) =>
          setTimeout(
            () => el.scrollIntoView({ behavior: 'smooth', block: 'start' }),
            100,
          )
        }
      >
        {name}
      </HashLink>
    );
  }

  return (
    <Link to={href} className={className} onClick={onClick}>
      {name}
    </Link>
  );
}
