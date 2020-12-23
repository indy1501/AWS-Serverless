import "./App.css";
import { useLoading } from "@agney/react-loading";

function App() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true
  });

  const body = [
    {
      id: "100",
      vendor: "Apple",
      amount: "$18000",
      date: "12/22/2020"
    },
    {
      id: "101",
      vendor: "Google",
      amount: "$19000",
      date: "12/22/2020"
    },
    {
      id: "102",
      vendor: "Facebook",
      amount: "$20000",
      date: "12/22/2020"
    },
    {
      id: "103",
      vendor: "AWS",
      amount: "$21000",
      date: "12/22/2020"
    }
  ];

  return (
    <div className="App">
      <h1>My first Serverless App</h1>
      <section {...containerProps}>{indicatorEl}</section>
      <br />
      <p>
        The invoice of {body[1].vendor} is for {body[1].amount} on{" "}
        {body[1].date}
      </p>
    </div>
  );
}

export default App;
