import React from 'react';
import { Link } from 'react-navi';
import './Navigation.css';

export const Navigation: React.FC = () => (
  <nav>
    <ul className="nav-links">
      <li>
        <Link href="/" activeClassName="active" exact={true}>
          mapStateToProps
        </Link>
      </li>
      <li>
        <Link href="/hooks" activeClassName="active" exact={true}>
          new hook APIs
        </Link>
      </li>
      <li>
        <Link href="/unstated" activeClassName="active" exact={true}>
          unstated-next
        </Link>
      </li>
    </ul>
  </nav>
);
