async function fakeRequest() {
    return "a";
}

const promise1: Promise<string> = fakeRequest();
