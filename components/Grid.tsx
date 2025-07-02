import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

export default function Grid() {
    return (
        <section id="about">
            <BentoGrid >
                {gridItems.map((item, i) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg = {item.spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}
