import React from 'react'
import styles from './box.module.scss'

interface IBox {
    height?: number
    flex?: boolean
    children: React.ReactNode
}

const BoxCustom = ({height, flex, children}: IBox) => {
    return (
        <div className={styles.box} style={{display: flex ? "flex" : "unset", alignItems: "center", height: height + 'vh'}}>
            {children}
        </div>
    )
}

export default React.memo(BoxCustom)