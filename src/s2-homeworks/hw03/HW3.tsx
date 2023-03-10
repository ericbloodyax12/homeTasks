import React, {Dispatch, useState} from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'


/*
* 1 - описать тип UserType  //todo DONE
* 2 - указать нужный тип в useState с users //todo DONE
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами //todo DONE
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов //todo DONE
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error //todo DONE
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback //todo DONE
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами //todo DONE
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName) //todщ
* 9 - в файле Greeting.tsx дописать типизацию пропсов //todo DONE
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки //todo DONE
* 11 - сделать стили в соответствии с дизайном //todo
* */

// types
export type UserType = {
    _id: string // fixed
    name: string // fixed
}

export const pureAddUserCallback = (name: string, setUsers: Dispatch<UserType[]> , users:UserType[]) => { //fixed
    const user = {_id: v1(), name: name }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<Array<UserType>>([]) // fixed

    const addUserCallback = (name: string) => { // fixed
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
