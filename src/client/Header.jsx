import { ActionButton, Flex } from '@adobe/react-spectrum';
import React from 'react';
import useMedia from './hooks/useMedia';
import useApp from './hooks/useApp';
import { NavLink } from './components/NavLink';
import Contrast from '@spectrum-icons/workflow/Contrast';
import ShowMenu from '@spectrum-icons/workflow/ShowMenu';

export const Header = () => {
  // header contents modal open state when resize
  const { isDesktopUp } = useMedia();
  const { toggleColorScheme, toggleNav } = useApp();

  return (
    <header className="pageHeader">
      <Flex direction="row" alignItems="center" gap="size-100">
        {!isDesktopUp ? (
          <ActionButton aria-label="Open Menu" onPress={() => toggleNav()}>
            <ShowMenu />
          </ActionButton>
        ) : null}
        {isDesktopUp ? (
          <>
            <h1>EXAMPLE</h1>
            <NavLink href="/a">First Page</NavLink>
            <NavLink href="/b">Second Page</NavLink>
            <NavLink href="/c">Third Page</NavLink>
            <NavLink href="/d">Fourth Page</NavLink>
          </>
        ) : null}
        {/* <NavLink href="/unauthorized">Unauthorized</NavLink>
        <NavLink href="/asdf">404</NavLink> */}
        {isDesktopUp ? (
          <div
            className="toggle"
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <ActionButton aria-label="Switch Theme" onClick={() => toggleColorScheme()}>
              <Contrast />
            </ActionButton>
          </div>
        ) : null}
      </Flex>
    </header>
  );
};
