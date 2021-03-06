// Generated by Haxe TypeScript Declaration Generator :)

export class SomeTsClass {
	constructor(someArg: string);
}

export namespace server {
	export class SuperServerComponent {
		constructor();
		saySomething(phrase: string): void;
	}
}

export type Result = {
	slideshow: {author: string, date: string, slides: {items?: string[], title: string, type: string}[], title: string};
}

export namespace server {
	export class Root {
		constructor();
		hello(name: string): Result;
	}
}

export namespace server {
	export class TinkAPI {
		private constructor();
		static main(req: js.node.http.IncomingMessage, res: js.node.http.ServerResponse): void;
	}
}