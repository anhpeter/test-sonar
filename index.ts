async function yourFunction(promises: Promise<unknown>[]): Promise<undefined> {
  await Promise.allSettled(promises);
}
