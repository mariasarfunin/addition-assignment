import React from "react";
import CardItem from "./CardItem";
import data from "./data";

const Home = () => {
    return(
        <div>
            <section className="py-4 container">
                <div className="row justify-content-center">
                {data.productData.map((item)=>{
                    return(
                        <CardItem img={item.img} title={item.title} />
                    )
                })}
              
                
                </div>
            </section>
        </div>
    );
};

export default Home;