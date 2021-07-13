import React from 'react'
// import ReactDOM from 'react-dom'
import s from './HeaderBlock.module.scss';

type HeaderBlockType = {
    title?: string
    hideBackground?: boolean
    children?: JSX.Element | JSX.Element[];
}

function HeaderBlock({ hideBackground = false, children }: HeaderBlockType) {
    const styleCover = hideBackground ? { backgroundImage: 'none' } : {};
    return <div className={s.cover} style={styleCover}>
        <div className={s.wrap}>
            {children}
        </div>

    </div>
}

export default HeaderBlock