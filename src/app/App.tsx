import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from './providers/router';
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";

const App = () => {
    const {theme} = useTheme();

    return (
        <div
            className={classNames('app', {}, [theme])}
        >
            {/*обернул в Suspense еще раз, тк требуется для использования i18n плагина*/}
            <Suspense fallback="">
                <Navbar/>

                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
