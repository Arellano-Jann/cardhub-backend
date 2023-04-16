import { json } from "@sveltejs/kit";
	export const get = async() => {
		const res = await fetch("$lib/assets/lyssie-test-uno.json");
		const data = await res.json();
		return json(data);
	};