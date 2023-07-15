import React from 'react'
import Button from '../body/Button'
import Pic1 from '../Images/IMG_20210210_123712.jpg'
import Pic2 from '../Images/IMG_20210210_123819.jpg'
import Pic3 from '../Images/IMG_20210210_124146.jpg'
import './Body.css'


const Body = () => {
  return (
    <div>
        <>
            <div className="container-fluid p-5 my-5 border">
                <h1 style={{textAlign: "center"}}>My First Gallery</h1>
                <>{ /* Carousel */ }
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">

                    { /* Indicators/dots */ }
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1" />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2" />
                    </div>
                    
                    { /* The slideshow/carousel */ }
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={Pic1} alt="Not Found" className="rounded-circle" style={{ width: "100%" }} />
                        </div>
                        <div className="carousel-item">
                        <img src={Pic2} alt="Not Found" className="rounded-circle" style={{ width: "100%" }} />
                        </div>
                        <div className="carousel-item">
                        <img src={Pic3} alt="Not Found" className="rounded-circle" style={{ width: "100%" }} />
                        </div>
                    </div>
                    
                    { /* Left and right controls/icons */ }
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" />
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon" />
                    </button>
                </div></>
            </div>

            <div className="container-fluid p-5 my-5 bg-dark text-white">
                <h1>What Is My Gallery?</h1>
                <p className='disc'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                </p>
                </div>

            <div className="container-fluid p-5 my-5 bg-primary text-white">
                <h1></h1>
                <p>This container has a blue background color and a white text, and some extra padding and margins.</p>
                <Button />
            </div>
        </>
    </div>
  )
}

export default Body