import type { MaterialIcon } from 'material-icons';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type IconProps = {
	name: MaterialIcon;
} & ComponentProps<'span'>;

export default function Icon({ name, className, ...rest }: IconProps) {
	const iconClassName = twMerge('material-icons', className);

	return (
		<span className={iconClassName} {...rest}>
			{name}
		</span>
	);
}
