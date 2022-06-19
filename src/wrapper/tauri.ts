const IS_TAURI = '__TAURI__' in window

export const wrapperGetIsTauri = (): boolean => IS_TAURI
