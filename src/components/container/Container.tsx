import React from 'react'
import styles from './container.module.scss'

interface IContainer {
    width: number
    children: React.ReactNode
}

const Container = ({width, children}:IContainer) => {
    return (
        <div style={{width, background: 'red', height: '100%'}} className={styles.container}>
            {children}
        </div>
    )
}

export default React.memo(Container)