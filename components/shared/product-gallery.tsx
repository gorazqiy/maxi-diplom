"use client"

import React, { useState } from "react"
import Image from "next/image"

interface Props {
  images: string[]
  alt: string
}

export const ProductGallery: React.FC<Props> = ({ images, alt }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  if (images.length === 0) {
    return (
      <div className="relative mb-4 flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg bg-secondary">
        <Image
          src="/maxi.png"
          alt={alt}
          fill
          className="object-contain p-4"
          priority
        />
      </div>
    )
  }

  return (
    <div>
      {/* Главное изображение */}
      <div className="relative mb-4 flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg bg-secondary">
        <Image
          src={images[activeIndex]}
          alt={`${alt} — ${activeIndex + 1}`}
          fill
          className="object-contain p-4"
          priority={activeIndex === 0}
        />
      </div>

      {/* Миниатюры */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative h-20 w-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 bg-secondary transition-colors ${
                index === activeIndex
                  ? "border-primary"
                  : "border-transparent hover:border-primary/50"
              }`}
            >
              <Image
                src={image}
                alt={`${alt} — ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
