class DataCollection<T extends {id: number}> {
    constructor(public data: T[]) {}

    search(id: number): T | null {
        return this.data.find((item: T) => item.id === id) || null;
    }
}

type User = {
	name: string, 
	id: number
}

const user1: User = {
	id: 1,
	name: 'Alex'
}

const user2: User = {
	id: 2,
	name: 'Andrey'
}

const data = new DataCollection([user1, user2])
data.search(1)