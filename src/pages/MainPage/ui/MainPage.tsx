 import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
    //указание файла, который нужно подгрузить к странице
    const {t} = useTranslation('main')

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
