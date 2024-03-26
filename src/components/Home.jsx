import React from "react";
import "./style/homeStyles.css";
import Product from "./Product";

function Home(props){

    
    return (
        <div className="home">
      
        <div className="home_container">
            
                        <img className="home_image" src="https://m.media-amazon.com/images/I/61HHa0VUuaL._SX3000_.jpg" alt="Valentines Banner"></img>
            

            <div className="home_rows">
                <Product
                    title="MuscleBlaze Raw Whey Protein Concentrate 80% with Added Digestive Enzymes (Unflavoured, 1 kg / 2.2 lb)"
                    rating={4}
                    price={1799}
                    id={1}
                    image="https://m.media-amazon.com/images/I/61pFtNVCbUL._SX679_.jpg"
                   
                />
                <Product
                    title="Wild Stone Ultra Sensual Long Lasting Perfume for Men, 100ml, A Sensory Treat for Casual Encounters, Aromatic Blend of Masculine Fragrances"
                    rating={4}
                    id={2}
                    price={299}
                    image="https://m.media-amazon.com/images/I/51M73SOIdhL._SX522_.jpg"
                    
                />
            </div>
            <div className="home_rows">
            <Product
                title="Apple iPhone 13 (128GB) - Blue"
                rating={4}
                price={7000}
                id={3}
                image="https://m.media-amazon.com/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg"
                
            />
            <Product
                title="Apple 2024 MacBook Air 13″ Laptop with M3 chip: 34.46 cm (13.6″) Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera, Touch ID- Midnight"
                rating={5}
                id={4}
                price={1200}
                image="https://m.media-amazon.com/images/I/71-D1xCuVwL._SX679_.jpg"
                
            />
            <Product
                title="The Theory Of Everything"
                rating={5}
                id={5}
                price={196}
                image="https://m.media-amazon.com/images/I/71vfo4cJCjL._SY425_.jpg"
                
            />
            </div>
            <div className="home_rows">
            <Product
                title="OnePlus 12 (Silky Black, 12GB RAM, 256GB Storage)"
                rating={4}
                id={6}
                price={596}
                image="https://m.media-amazon.com/images/I/71o8VehMHXL._SX679_.jpg"
               
            />
            </div>
            </div>
        </div>
    );
};


export default Home;