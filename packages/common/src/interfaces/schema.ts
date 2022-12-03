interface IBaseSchema {
	readonly title: string | null;
	readonly description: string | null;
}

interface IBooleanSchema extends IBaseSchema {
	readonly type: 'boolean';
	readonly default?: boolean;
}

interface INumberSchema extends IBaseSchema {
	readonly type: 'number';
	readonly default?: number;
}

interface IStringSchema extends IBaseSchema {
	readonly type: 'string';
	readonly default?: string;
}

interface ISelectSchema extends IBaseSchema {
	readonly type: 'select';
	readonly enum: (number | string | boolean)[];
	readonly default?: number | string | boolean;
}

interface IMultiSchema extends IBaseSchema {
	readonly type: 'multi';
	readonly options: (number | string | boolean)[];
	readonly default?: (number | string | boolean)[];
}

interface IArraySchema extends IBaseSchema {
	readonly type: 'array';
	readonly items: ISchema[];
}

type IObjectSchema = IBaseSchema & {
	readonly type: 'object';
} & (
		| {
				readonly properties: Record<string, ISchema>;
				readonly additionalProperties: ISchema;
		  }
		| { readonly properties: Record<string, ISchema> }
		| { readonly additionalProperties: ISchema }
	);

export type ISchema =
	| IBooleanSchema
	| INumberSchema
	| IStringSchema
	| ISelectSchema
	| IMultiSchema
	| IArraySchema
	| IObjectSchema;
