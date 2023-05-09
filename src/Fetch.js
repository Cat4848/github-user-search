import { useFetch } from "./useFetch";

export function Fetch(
  {uri,
  renderSuccess,
  renderLoading= <p>loading...</p>,
  renderError = error => <pre>{JSON.stringify(error, null, 2)}</pre>}
) {
  const {loading, data, error} = useFetch(uri);  
  console.log("Fetch component -> data", data);
  console.log("Fetch component -> uri", uri);
  if (loading) return renderLoading;
  if (error) return renderError(error);
  if (data) return renderSuccess({data});
}