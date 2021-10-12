import React from 'react'
type RandomNumberType ={
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive:boolean
    isNegative?: never
    isZero?: never
}
type NegativeNumber = RandomNumberType & {
    isNegative:boolean
    isPositive?: never
    isZero?: never
}
type Zero = RandomNumberType & {
    isZero:boolean
    isNegative?: never
    isPositive?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

export const RandomNumber = ({value,isPositive,isNegative,isZero}:RandomNumberProps) => {
    return (
        <div className='maindiv'>
            <span>Restrict props</span>
            <div>
            {value} {isPositive && 'positive'} {isNegative && 'Negative'} {isZero && 'zero'}
            </div>
        </div>
    )
}
