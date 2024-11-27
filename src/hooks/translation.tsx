import { useTranslation as i18n } from "react-i18next";

export const translation = (namespace: string, key: string, params?: Record<string, unknown>) => {
    const { t } = i18n(namespace)
    return t(key, params)
}

export const useTranslation = (namespace: string) => ({
    t: (key: string, params?: Record<string, unknown>) => translation(namespace, key, params)
})
