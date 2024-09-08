import "./styles.scss";
import ModulesContianer from "./modules/ModulesContianer";

const App = () => {
  return (
    <>
      <div>
        <div className="flex flex-col min-h-[1000px]">
          <h1 className="text-white text-4xl font-bold">Head Section</h1>{" "}
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            commodi pariatur impedit eaque non tempora, veritatis unde assumenda
            quaerat sed, sint magni quibusdam cum sapiente consequuntur.
            Reiciendis reprehenderit animi tempora.
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            commodi pariatur impedit eaque non tempora, veritatis unde assumenda
            quaerat sed, sint magni quibusdam cum sapiente consequuntur.
            Reiciendis reprehenderit animi tempora.
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            commodi pariatur impedit eaque non tempora, veritatis unde assumenda
            quaerat sed, sint magni quibusdam cum sapiente consequuntur.
            Reiciendis reprehenderit animi tempora.
          </p>
        </div>
        <div className=" relative flex justify-center">
          <div className="grid grid-cols-2 max-w-[1080px]">
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
        <h1 className="text-white text-4xl font-bold">
          A fully integrated suite of financial and payments products
        </h1>
        <div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem
            aliquam, est recusandae velit, ab natus dolorum dolore temporibus,
            quia ducimus architecto laudantium impedit! Quis maiores laudantium
            molestias iste. Voluptatibus.
          </p>
        </div>
        <div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem
            aliquam, est recusandae velit, ab natus dolorum dolore temporibus,
            quia ducimus architecto laudantium impedit! Quis maiores laudantium
            molestias iste. Voluptatibus.
          </p>
        </div>
        <div>
          <p className="text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem
            aliquam, est recusandae velit, ab natus dolorum dolore temporibus,
            quia ducimus architecto laudantium impedit! Quis maiores laudantium
            molestias iste. Voluptatibus.
          </p>
        </div>
      </div>
      <div className="min-h-[800px] follow-div " data-id="m-1">
        <h1 className="text-white text-4xl font-bold">
          A fully integrated suite of financial and payments products
        </h1>
        <div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem
            aliquam, est recusandae velit, ab natus dolorum dolore temporibus,
            quia ducimus architecto laudantium impedit! Quis maiores laudantium
            molestias iste. Voluptatibus.
          </p>
        </div>
        <div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem
            aliquam, est recusandae velit, ab natus dolorum dolore temporibus,
            quia ducimus architecto laudantium impedit! Quis maiores laudantium
            molestias iste. Voluptatibus.
          </p>
        </div>
        <div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem
            aliquam, est recusandae velit, ab natus dolorum dolore temporibus,
            quia ducimus architecto laudantium impedit! Quis maiores laudantium
            molestias iste. Voluptatibus.
          </p>
        </div>
      </div>
      <div className="min-h-[800px] follow-div " data-id="m-2">
        <h1 className="text-white text-4xl font-bold">
          A fully integrated suite of financial and payments products
        </h1>
        <div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem
            aliquam, est recusandae velit, ab natus dolorum dolore temporibus,
            quia ducimus architecto laudantium impedit! Quis maiores laudantium
            molestias iste. Voluptatibus.
          </p>
        </div>
        <div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem
            aliquam, est recusandae velit, ab natus dolorum dolore temporibus,
            quia ducimus architecto laudantium impedit! Quis maiores laudantium
            molestias iste. Voluptatibus.
          </p>
        </div>
        <div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem
            aliquam, est recusandae velit, ab natus dolorum dolore temporibus,
            quia ducimus architecto laudantium impedit! Quis maiores laudantium
            molestias iste. Voluptatibus.
          </p>
        </div>
      </div>
    </div>
  );
};
