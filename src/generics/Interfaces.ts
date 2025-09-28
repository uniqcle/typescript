// interface State< T, U, V, K> {}
// type StateType< T, U, V, K> = {}
// class StateClass<T, U, V, K> {}
// function StateFunc<T, U, V, K> () {}
 
	interface IUser {
		name: string;
		age: number;
	}

	interface IMessage {
		id: number;
		text: string;
	}

	interface IUserState {
		loading: boolean;
		error: Error | null;
		data: User;
	}

	interface IMessageState {
		loading: boolean;
		error: Error | null;
		data: IMessage;
	}

	interface State<T> {
		loading: boolean;
		error: Error | null;
		data: T;
	}

	type MessageStateType = State<Message>;
	type UserStateType = State<User>;

	const message: MessageStateType = {
		loading: true,
		error: null,
		data: {
			id: 1,
			text: "lorem",
		},
	};

	let userData: UserStateType = {
		loading: true,
		error: null,
		data: {
			name: "Alex",
			age: 10,
		},
	};

 