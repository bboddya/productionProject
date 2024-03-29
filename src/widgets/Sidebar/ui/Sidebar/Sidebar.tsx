import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Button} from "shared/ui/Button";
import {LangSwitcher} from "widgets/LangSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string
}
export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const {t} = useTranslation()

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button onClick={onToggle}>toggle</Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang } />
            </div>
        </div>
    );
};