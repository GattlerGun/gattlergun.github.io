'use client'

import Image from 'next/image';

export function GoTop() {
    return (
        <div onClick={() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }}>
            <Image
                src='/goTop.svg'
                alt='Go Top'
                className='svg-footer'
                width={48}
                height={48}
            />
        </div>
    )
}