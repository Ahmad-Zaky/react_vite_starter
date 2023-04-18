import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState();

  const getData = (url) => {
    fetch(url)
      .then((r) => r.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    getData("http://localhost:3000/cards");
  }, []);

  return (
    <main className="h-screen flex justify-center items-center bg-black">
      <div className="p-16 bg-white rounded-3xl ">
        <h1 className="text-7xl font-normal mb-10">Responsive dynamic cards</h1>
        <div className="lg:flex-row flex items-center justify-between gap-8 flex-col ">
          {data?.map((card, index) => (
            // card
            <div key={index} className=" w-[345.33px] rounded-xl shadow-2xl ">
              {/*  image  */}
              <div>
                <img
                  className="rounded-t-xl "
                  src={card.image}
                  alt="card img"
                />
              </div>
              {/* end image */}
              {/* body */}
              <div className="flex flex-col justify-between h-[344px] p-4">
                <div className="p-4">
                  <h2 className="font-bold text-xl ">{card.title}</h2>
                  <div className="flex items-center">
                    <img className="w-5 h-5" src="/location.svg" />
                    <h3 className="font-normal text-xl ">{card.city}</h3>
                  </div>
                  <p className="title_description">{card.desc}</p>
                </div>
                <button className="bg-[#FFE000] w-full rounded-lg py-[10px]">
                  Read more
                </button>
              </div>
              {/* end body */}
            </div>
            // end card
          ))}
        </div>
      </div>
    </main>
  );
}
