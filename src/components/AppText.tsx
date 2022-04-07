import React, { useState, useEffect } from 'react'
import { Text, TextProps } from 'react-native'
import I18n from '../i18n/index';
import { useAppSelector } from 'src/redux/hooks';

export interface AppTextProps extends TextProps {
    i18nKey: string
}

function AppText({ children, i18nKey, style, ...props }: AppTextProps) {

    const [i18n, setI18n] = useState(I18n);

    const language = useAppSelector(state => state.language.language)

    useEffect(() => {
        let i18nn = i18n;
        i18nn.locale = language;
        setI18n(i18nn)
    }, [language])

    return (
        <Text {...props}>
            {i18nKey ? i18n.t(i18nKey) : children}
        </Text>
    )
}

export default React.memo(AppText)