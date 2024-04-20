const testFunc = async (): Promise<undefined> => {};

const main = async () => {
  const result = await testFunc();
  console.log(result);
};
main();
