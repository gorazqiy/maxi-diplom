import { cn } from "@/lib/utils"
import { useCategoryStore } from "@/store/category"
import Link from "next/link"
import React from "react"

interface Props {
  className?: string
}

const cats = [
  { id: 0, name: "Сытый Боярин" },
  { id: 1, name: "ПроПользу" },
  { id: 2, name: "Вологжанка" },
  { id: 3, name: "Трактирщик Снэк" },
  { id: 4, name: "Семья Довольна" },
]

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)
  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {cats.map(({ name, id }) => (
        <Link
          key={id}
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            categoryActiveId === id &&
              "bg-white text-primary shadow-md shadow-gray-200"
          )}
          href={`/#${name}`}
        >
          {name}
        </Link>
      ))}
    </div>
  )
}
