import { prisma } from "@/prisma/prisma-client"
import { Container, ProductGallery, Title } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
    include: {
      category: true,
    },
  })

  if (!product) {
    notFound()
  }

  return (
    <Container className="mt-10">
      {/* Кнопка "Назад" */}
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-gray-700"
      >
        <ArrowLeft size={20} />
        <span>Назад к каталогу</span>
      </Link>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Левая колонка — галерея изображений */}
        <ProductGallery images={product.images} alt={product.name} />

        {/* Правая колонка — информация о товаре */}
        <div className="flex flex-col gap-6">
          {/* Категория */}
          <span className="text-sm tracking-wide text-gray-400 uppercase">
            {product.category.name}
          </span>

          {/* Название */}
          <Title text={product.name} size="2xl" className="font-extrabold" />

          {/* Цена */}
          <div className="text-4xl font-extrabold text-primary">
            {product.price} ₽
          </div>

          {/* Описание */}
          {product.description && (
            <div>
              <h3 className="mb-2 text-lg font-bold">Описание</h3>
              <p className="leading-relaxed text-gray-600">
                {product.description}
              </p>
            </div>
          )}

          {/* Состав */}
          {product.compound && (
            <div>
              <h3 className="mb-2 text-lg font-bold">Состав</h3>
              <p className="leading-relaxed text-gray-600">
                {product.compound}
              </p>
            </div>
          )}

          {/* Кнопка "В корзину" */}
          <Button
            size="lg"
            className="mt-4 w-full gap-2 text-lg font-bold md:w-auto"
          >
            <ShoppingCart size={22} />
            Добавить в корзину
          </Button>
        </div>
      </div>
    </Container>
  )
}
