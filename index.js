const testFn = async (url) => {
  if (!url) return;
  await fetch(url);
};
