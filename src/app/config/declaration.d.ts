declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
	import * as React from 'react';

	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const content: string;
	export default content;
}
