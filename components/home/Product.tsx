/** @format */

import Image from "next/image";

import Link from "next/link";

export default function Product() {
    const prodcuts = [
        { id: crypto.randomUUID(), image: "/images/product1.png" },
        { id: crypto.randomUUID(), image: "/images/product2.png" },
        { id: crypto.randomUUID(), image: "/images/product3.png" },
        { id: crypto.randomUUID(), image: "/images/product4.png" },
    ];
    return (
        <section>
            <div className='hidden lg:flex justify-center gap-20 m-4 '>
                <div className='rounded-full'>
                    <Image
                        src="/images/product1.png"
                        alt='product1'
                        width={100}
                        className='rounded-full'
                    />
                </div>

                <Image
                    src="/images/product2.png"
                    alt='product2'
                    width={100}
                    className='rounded-full'
                />
                <Image
                    src="/images/product3.png"
                    alt='product3'
                    width={100}
                    className='rounded-full'
                />
                <Image
                    src="/images/product4.png"
                    alt='product4'
                    width={100}
                    className='rounded-full'
                />
            </div>
        </section>
    );
}
