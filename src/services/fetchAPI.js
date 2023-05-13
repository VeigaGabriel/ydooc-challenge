export default async function fetchAPI(url) {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}