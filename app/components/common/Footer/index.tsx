import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import {FC} from 'react';


const navItems = [
	{
		icon: 'home',
		link: '/',
	},
	{
		icon: 'explore',
		link: '/explore',
	},
	{
		icon: 'place',
		link: '/place/kyoto',
	},
	{
		icon: 'person_outline',
		link: '/profile',
	},
]

export const Footer: FC = () => {
    const { push, pathname } = useRouter();

    return (
        <footer className={styles.footer}>
            <nav>
                {navItems.map(item => (
					<button
						key={item.link}
                   className={pathname === item.link ? styles.active : ''}
                   onClick={() => push(item.link)}
                   >
                       <span className='material-icons-outlined'>{item.icon}</span>

                   </button> 
                ))}
            </nav>

        </footer>
    )

}