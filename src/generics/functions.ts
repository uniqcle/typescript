{
	type User = {
		name: string;
		age: number;
	};

	function identity<T>(arg: T): T {
		return arg;
	}

	const s1: string = "Hello";
	const n1: number = 10;
	const u1: User = {
		name: "Max",
		age: 2,
	};

	let r1 = identity(s1);
	let r2 = identity(n1);
	let r3 = identity(u1);

	// random elemen

	function getRandomElement<T>(items: T[]): T {
		const randomIndex = Math.floor(Math.random() * items.length);

		return items[randomIndex];
	}

	const elem1 = getRandomElement([1, 2, 3, 4]);
	const elem2 = getRandomElement([2, "c", "b", 1]);

	// merge objects

	function merge<U, V>(a: U, b: V) {
		return {
			...a,
			...b,
		};
	}

	const merge1 = merge({ a: 1, b: 2 }, { c: 4 });

	// length

	function len<T extends { length: number }>(collection: T) {
		return collection.length;
	}

	const lenString = len("hello");
	const lenArray = len(["a", "b", "c", 4]);
	// Error const lenNumber = len(2);

}