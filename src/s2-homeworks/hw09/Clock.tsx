import React, {MouseEventHandler, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'


let msToSec = (sec: number) => 1000 * sec
let timeCreator = (currentDate: Date) => {
    let time = [
        currentDate.getHours(),
        currentDate.getMinutes(),
        currentDate.getSeconds()
    ].map((el) => el <= 9 ? `0${el}` : `${el}`)
    return time.join(":")
}
let dateCreator = (currentDate: Date) => {
    let time = [
        currentDate.getDate(),
        currentDate.getMonth()+1,
        currentDate.getFullYear()
    ].map((el) => el <= 9 ? `0${el}` : `${el}`)
    return time.join(".")
} // date?.toLocaleDateString("ru")

function Clock() {

    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', (Date.now()))))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        let res = window.setInterval(() => {
            setDate(new Date())
        }, msToSec(1))
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        setTimerId(res)
    }
    const stop = () => {
        window.clearInterval(timerId)
        setTimerId(undefined)
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    }
    const onMouseEnter = (e:React.MouseEvent<HTMLDivElement>) => {
        setShow(true)
        // пишут студенты // показать дату если наведена мышка
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    const stringTime = timeCreator(date) || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringMonth = date?.toLocaleDateString("en",{month: "long"}) || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем


    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = date?.toLocaleDateString("en",{weekday: "long"}) || <br/> // пишут студенты
    const stringDate =   dateCreator(date) || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
