import { LoaderProvider, useLoading, BallTriangle } from "@agney/react-loading";

function App() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true
  });
  return <section {...containerProps}>{indicatorEl}</section>;
}

ReactDOM.render(
  <LoaderProvider indicator={<BallTriangle width="50" />}>
    <App />
  </LoaderProvider>
);
