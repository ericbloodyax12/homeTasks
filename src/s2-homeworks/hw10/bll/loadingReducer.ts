const initState = {
    isLoading: false,
}

export type InitStateType = {
    isLoading: boolean
}
export type ActionLoadingReducerType =  ReturnType<typeof loadingAC>


export const loadingReducer = (state = initState, action: ActionLoadingReducerType): InitStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            return {...initState, isLoading:action.isLoading}
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
} as const)
