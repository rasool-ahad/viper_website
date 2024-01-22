import { useState } from "react";
import data from "../../data/dataAtribute.json";
import Image from "next/image";

const Atributies = () => {
  const [atributeItems, setAtributeItems] = useState(data.atributies);
  return (
    <div className="atributies">
      <div className="container">
        <div className="atributies-title">
          <h2> ویژگی های وایپر</h2>
          <p>وایپر راهی به آینده</p>
        </div>
        <div className="atributiesBoxInline row">
          {atributeItems.map((item) => (
            <div className="atributiesBox" key={item.id}>
              <div className="atribute-item">
                <div className="imageSection col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                  <Image src={item.image} alt={item.title} layout="fill" />
                </div>
                <div className="content col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10">
                  <h2 className="title">{item.title}</h2>
                  <div className="desc">{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Atributies;
