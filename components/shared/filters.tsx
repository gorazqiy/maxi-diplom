import React from "react";

import { FilterCheckbox } from "@/components/shared/filter-checkbox";
import { Input } from "@/components/ui/input";
import { CheckboxFiltersGroup } from "@/components/shared/checkbox-filters-group";
import { Title } from "./title";
import { RangeSlider } from "../ui";

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Быстрая доставка' value='1' />
				<FilterCheckbox text='Новинки' value='2' />
			</div>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input type='number' placeholder='0' min={0} max={1500} defaultValue={0} />
					<Input type='number' min={100} max={1500} placeholder='1500' />
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>

			<CheckboxFiltersGroup
				className='mt-5'
				title='Марка'
				limit={6}
				defaultItems={[
					{
						text: "Сытый Боярин",
						value: "1",
					},
					{
						text: "ПроПользу",
						value: "2",
					},
					{
						text: "Вологжанка",
						value: "3",
					},
					{
						text: "Трактирщик Снэк",
						value: "4",
					},
					{
						text: "Семья Довольна",
						value: "5",
					},
					{
						text: "Семья Довольна",
						value: "6",
					},
					
				]}
				items={[{
						text: "Сытый Боярин",
						value: "1",
					},
					{
						text: "ПроПользу",
						value: "2",
					},
					{
						text: "Вологжанка",
						value: "3",
					},
					{
						text: "Трактирщик Снэк",
						value: "4",
					},
					{
						text: "Семья Довольна",
						value: "5",
					},
					{
						text: "Семья Довольна",
						value: "6",
					},
					{
						text: "Семья Довольна",
						value: "7",
					},]}
			/>
		</div>
	);
};
