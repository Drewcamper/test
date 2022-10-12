import { useContext } from 'react';
import { ThemeContext } from '../../context/context';


export const Theme = () => {
    const { className, setClassName } = useContext(ThemeContext);
    return (
        <ThemeContext className={className} setClassName={setClassName}>
            <MainPage />
        </ThemeContext>
    )
}