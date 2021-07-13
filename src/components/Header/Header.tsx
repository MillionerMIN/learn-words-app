import React from 'react';
import s from './Header.module.scss';

type HeaderType = {
   children: string
}

const Header = ({ children }: HeaderType) => {
   return <h1 className={s.header}>{children}</h1>
}

export {
   Header
}