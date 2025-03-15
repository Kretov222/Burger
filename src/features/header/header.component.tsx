import React from 'react';
import { HeaderContainer, Navbar } from './styled.header';
import { Logo } from './components /logo';
import { PersonalAccountBtn } from './components /buttons/personalaccountbtn';
import { LeftButtons } from './components /buttons/leftbuttons';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Navbar>
        <LeftButtons />
        <Logo />
        <PersonalAccountBtn />
      </Navbar>
    </HeaderContainer>
  );
};
