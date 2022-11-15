import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type icons from '@/assets/icons';

interface IBaseProps<
	ButtonType = Extract<ButtonHTMLAttributes<HTMLButtonElement>['type'], 'button' | 'submit'>,
> {
	readonly className?: string;
	readonly textClassName?: string;
	readonly iconClassName?: string;
	readonly switchElementsOrder?: boolean;
	readonly type: ButtonType;
	readonly disabled: boolean;
	readonly iconName?: keyof typeof icons;
	readonly children?: ReactNode;
}

export type IProps<
	ButtonType = Extract<ButtonHTMLAttributes<HTMLButtonElement>['type'], 'button' | 'submit'>,
> = ButtonType extends 'submit'
	? IBaseProps<ButtonType>
	: IBaseProps<ButtonType> & {
			readonly onClick?: VoidFunction;
	  };
