import helloWorld from "../utils/helloworld";

it("Should say hello", ()=>{
    const str = helloWorld();
    console.log(str);

    expect(str).toBe("hello");
});