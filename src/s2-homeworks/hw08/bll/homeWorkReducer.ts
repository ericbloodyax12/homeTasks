import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return state.sort(function (a, b) {
                if (a.name > b.name) {
                    return (action.payload === "up") ?  1 : -1;
                }
                if (a.name < b.name) {
                    return (action.payload === "up") ?  -1 : 1;
                }
                // a должно быть равным b
                return 0})
               // need to fix
        }
        case 'check': {
            return state.filter(u => u.age >= 18) // need to fix
        }
        default:
            return state
    }
}
