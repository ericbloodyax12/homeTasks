const initState = {
    themeId: 1,
};
export type ThemeStateType = typeof initState

type ActionType = ReturnType<typeof changeThemeId>;
type ChangeThemeActionType = { type: 'SET_THEME_ID', id: number }


export const themeReducer = (state = initState, action: ActionType): ThemeStateType => {
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id,
            };
        }
        default:
            return state;
    }
};

export const changeThemeId = (id: number): ChangeThemeActionType => ({ type: 'SET_THEME_ID', id } as const);