export const getParamsUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams;
}
