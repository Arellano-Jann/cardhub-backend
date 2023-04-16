const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.18fcf867.js","imports":["_app/immutable/entry/start.18fcf867.js","_app/immutable/chunks/index.310c7e73.js","_app/immutable/chunks/singletons.f95c973f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.ee4d5137.js","imports":["_app/immutable/entry/app.ee4d5137.js","_app/immutable/chunks/index.310c7e73.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-08a6633d.js'),
			() => import('./chunks/1-2e2d8533.js'),
			() => import('./chunks/2-976c59ed.js'),
			() => import('./chunks/3-afd7a10f.js'),
			() => import('./chunks/4-6e95467b.js'),
			() => import('./chunks/5-26878f01.js'),
			() => import('./chunks/6-c3415495.js'),
			() => import('./chunks/7-7ca6a0f2.js'),
			() => import('./chunks/8-8631eb7e.js'),
			() => import('./chunks/9-3783e639.js'),
			() => import('./chunks/10-d694e7b9.js'),
			() => import('./chunks/11-3fb09254.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/alex-test",
				pattern: /^\/alex-test\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/card-library",
				pattern: /^\/card-library\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/han-test",
				pattern: /^\/han-test\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/host",
				pattern: /^\/host\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/jeremy-test",
				pattern: /^\/jeremy-test\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/lobby",
				pattern: /^\/lobby\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/lyssie-test",
				pattern: /^\/lyssie-test\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
