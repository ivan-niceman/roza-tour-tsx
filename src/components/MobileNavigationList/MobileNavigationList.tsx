import { navigation } from '../../constants/navigation';
import NavLink from '../NavLink/NavLink';

interface MobileNavigationListProps {
  onClose: () => void;
  onOpenAdvice: () => void;
}

export default function MobileNavigationList({
  onClose,
  onOpenAdvice,
}: MobileNavigationListProps) {
  return (
    <ul className="mobile-navigation-list">
      <li>
        <button
          className="mobile-navigation-link banner-button-advice"
          onClick={() => {
            onOpenAdvice();
            onClose();
          }}
        >
          Подобрать тур
        </button>
      </li>
      {navigation.map((link) => (
        <li key={link.href}>
          <NavLink
            href={link.href}
            name={link.name}
            className="mobile-navigation-link"
            onClick={onClose}
          />
        </li>
      ))}
    </ul>
  );
}
