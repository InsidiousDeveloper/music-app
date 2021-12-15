import React from 'react'
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import type {LinkProps} from "react-router-dom";

const ActiveLink = ({children, to, ...props}: LinkProps) => {

    const resolved = useResolvedPath(to)
    const match = useMatch({path: resolved.pathname, end: true})

    return (
        <Link
            to={to}
            style={{
                backgroundColor: match ? 'rgb(248, 240, 229)' : 'transparent',
                color: match ? 'rgb(193, 118, 31)' : '#616161',
                fontWeight: match ? '600' : '400'
            }}
            {...props}
        >
            {children}
        </Link>
    )
}

export default ActiveLink