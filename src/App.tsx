import "./styles.scss";
import ModulesContianer from "./modules/ModulesContianer";

const App = () => {
  return (
    <>
      <div>
        <div className="flex flex-col min-h-[600px] max-w-[1080px] m-auto">
          <h1 className="text-white text-6xl sm:text-8xl font-bold">
            Financial infrastructure to grow your revenue
          </h1>{" "}
          <p className="text-white text-xl mt-16 w-1/2">
            Join the millions of companies of all sizes that use Stripe to
            accept payments online and in person, embed financial services,
            power custom revenue models, and build a more profitable business.
          </p>
        </div>
        <div className=" relative flex justify-center">
          <div className="grid grid-cols-[1fr_10fr] sm:grid-cols-2  max-w-[1080px]">
            <LeftSide></LeftSide>
            <ModulesContianer></ModulesContianer>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

const LeftSide = () => {
  return (
    <div className="container-div">
      <div className="min-h-[800px] follow-div " data-id="m-0">
        <h1 className="text-white text-2xl sm:text-4xl font-bold mb-10">
          A fully integrated suite of financial and payments products
        </h1>
        <div>
          <p className="text-white">
            Reduce costs, grow revenue, and run your business more efficiently
            on a fully integrated platform. Use Stripe to handle all of your
            payments-related needs, manage revenue operations, and launch (or
            invent) new business models.
          </p>
        </div>
      </div>
      <div className="min-h-[800px] follow-div " data-id="m-1">
        <h1 className="text-white text-2xl sm:text-4xl font-bold mb-10">
          Accept and optimise payments, globally
        </h1>
        <div>
          <p className="text-white">
            Increase authorisation rates, optimise your checkout conversion, and
            offer local payment methods in every market.
          </p>
        </div>
      </div>
      <div className="min-h-[800px] follow-div " data-id="m-2">
        <h1 className="text-white text-2xl sm:text-4xl font-bold mb-10">
          Capture recurring revenue
        </h1>
        <div>
          <p className="text-white">
            Support recurring business models, minimise churn, and automate
            finance operations.
          </p>
        </div>
      </div>
    </div>
  );
};
