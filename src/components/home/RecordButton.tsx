import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import Icon from '../ui/Icon';

type RecordButtonProps = {} & ComponentProps<'button'>;

export default function RecordButton({ className, ...rest }: RecordButtonProps) {
	const buttonClassName = twMerge(
		'bg-black px-5 py-2.5 rounded-full cursor-pointer flex items-center justify-center gap-1 font-pretendard',
		className
	);

	return (
		<button className={buttonClassName} {...rest}>
			<Icon name="mic" className="text-white text-2xl" />
			<span className="text-white text-sm">녹음하기</span>
		</button>
	);
}
