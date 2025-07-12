import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

export default function Clients() {
    return (
        <div className='py-20 ' id='projects'>
            <h1 className='heading'>
                Kind words from {' '}
                <span className='text-purple' > satisfied clients </span>

            </h1>
            <div className='flex flex-col items-center max-lg:mt-10'>


                <InfiniteMovingCards

                    items={testimonials}
                    direction='right'
                    speed='slow'


                />
                
                { companies.map(() => null)}


            </div>
        </div>
    )
}
