import { prisma } from "@/prisma/prisma-client"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      include: {
        category: true,
      },
    })

    if (!product) {
      return NextResponse.json({ error: "Товар не найден" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("Ошибка при получении товара:", error)
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    )
  }
}
