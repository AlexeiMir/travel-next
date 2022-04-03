import React, {FC} from 'react'
import styles from './styles.module.scss';

export const Wrapper: FC<{imagePath: string}> = ({imagePath, children}) => {
	return <div
    className={styles.wrapper}
			style={{ backgroundImage: `url(${imagePath})` }}
    >
        <div>{children}</div>
    </div>
}