const num1: number = 230;
const num2: number = 230.2342;
const num3: number = NaN;
const num4: number = Infinity;

const str1: string = "Hello, String";

const bool1: boolean = true;
const bool2: boolean = false;

const null1: null = null;
const undef1: undefined = undefined;
const any1: any = 123;

function f1(a: number, b: string, c: boolean) {
    return "asf";
}

const f2 = (a: number, b: string, c: boolean): string => {
    return "asf";
};

type User1 = { name: string; age: number; car: { color: string } };

interface User2 {
    name: string;
    age: number;
    car?: { color: string };
}

const user: User2 = {
    name: "Alex",
    age: 20,
};

const arr1: string[] = ["one", "two", "three"];
const arr2: Array<string> = ["one", "two", "three"];

//////////////////////////////////////////////////

type ConfigType = {
    status: string;
};

type ReturnUserType = { data: number } | null;

type UserObj = {
    name: string;
    age: number;
    hasJob: boolean;
    getMoreInfo?: (config: ConfigType) => ReturnUserType;
    setAnyNumber?: () => number;
};

type getMoreInfoType = ReturnType<NonNullable<UserObj["getMoreInfo"]>>;

const usersObjects: Array<UserObj> = [
    {
        name: "Alex",
        age: 20,
        hasJob: true,
        getMoreInfo: (config) => {
            if (config.status === "ok") {
                //fetched
                return { data: 743 };
            }
            return null;
        },
    },
    {
        name: "Sam",
        age: 25,
        hasJob: false,
        setAnyNumber: function () {
            return 123;
        },
    },
];

/////////////////////
// union
////////////////////

function unionType(a: string | number) {
    if (a === "new") {
        return "new string";
    }
    return 783;
}

const aVar = unionType("new");

if (typeof aVar === "string") {
    aVar.charAt(2);
}

if (typeof aVar === "number") {
    aVar.toFixed(2);
}

/////////////////////
// Interface
////////////////////

interface IMyInterface {
    value: number | string | boolean;
}

const iVar1 = { value: 234 };
const iVar2 = { value: "2234" };
const iVar3 = { value: true };

// error! const iVar4 = iVar2 | iVar3;

interface IUser {
    name: string;
}

interface IUser {
    age: number;
}

const userInterfaceVar: IUser = {
    name: "Alex",
    age: 25,
};

/////////////////////
// Types
////////////////////

type AType = {
    age: number;
};

type BType = {
    name: "Alex";
};

type CType = {
    hasJob: boolean;
};

type DType = BType | CType;
type EType = CType & AType;

const userType: EType = {
    age: 12,
    hasJob: true,
};

/////////////////////
// Literal
////////////////////

function f1(status: "ok" | "error") {
    if (status === "ok") {
    } else if (status === "error") {
    }

    return null;
}

// @ts-ignore
// const varF1: boolean = f1('ok');
const varF1 = f1("ok") as unknown as { name: "Alex" };

/////////////////////
// enum
////////////////////

const userEnum1 = {
    name: "Alex",
};

const enum UserEnum {
    name = "Alex",
    age = 20,
}

if (UserEnum.name === "Alex") {
}

const enum Status {
    NOT_FOUND = 404,
    SUCCESS = 200,
    ERROR = 500,
}

type UserPartialType = Partial<{
    name: string;
    age: number;
    car: boolean;
}>;

type UserRequiredType = Required<{
    name?: string;
    age?: number;
    car?: boolean;
}>;

const user3: Readonly<{ name?: string; age: number; car: boolean }> = {
    name: "Andrey",
    age: 41,
    car: false,
};

type UserPickType = Pick<
    {
        name: string;
        age: number;
        car: boolean;
    },
    "name" | "age"
>;

type UserOmitType = Omit<
    {
        name: string;
        age: number;
        car: boolean;
    },
    "name"
>;
