import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import user from "../hw08/User";


type GreetingContainerPropsType = {
    users: UserType[] // fixed
    addUserCallback: (newName:string)=> void // fixed
}

export const pureAddUser = (name: string, setError: (error:string)=> void, setName:(name:string)=>void, addUserCallback:(name:string)=> void ) => {
    if (name.trim()==="") {setError("Ошибка! Введите имя!")}
    else {
        addUserCallback(name)
        setName("")
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (error:string)=> void) => { // если имя пустое - показать ошибку
    if(name.trim()==="") {setError("Ошибка! Введите имя!")}
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => { // если нажата кнопка Enter - добавить
    if (e.charCode===13) {
        addUser();
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // fixed
    const [error, setError] = useState<string>('') // fixed

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // fixed
        let newName = e.currentTarget.value.trim()
        setName(newName) // fixed
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement> ) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = "name"// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
