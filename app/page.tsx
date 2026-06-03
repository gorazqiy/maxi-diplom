import { Container, Title } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { TopBar } from "@/components/shared/top-bar";

export default function Page() {
  return (
   <>
			<Container className='mt-5'>
				<Title text='Все товары' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-[60px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>
					<div className='flex-1'>
						<div className='flex flex-col gap-16'> <ProductCard
           
            id={1}
            name={"cсыр"}
            imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oETVQq53Q5k3QOkSd35a1RZJoCwdY_ENOpNHCQ-LfZFodpJ_YUrc0QQPgl9kiPX5Nxrc8qmuQ0N8CPAuCahloGQp48XXHBNN9R26lYf9&s=10"}
            price={200}
            // ingredients={product.ingredients}
          /></div>
					</div>
				</div>
			</Container>
		</>
  )
}
