import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sector = () => {
    const [sectors, setSectors] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/sector")
        .then(res => res.json())
        .then(data => setSectors(data))
    },[])
    console.log(sectors)
    return (
      <div>
        <h1 className="lg:text-7xl text-3xl title text-center mt-10 lg:mb-16 mb-6">
          Sector Details
        </h1>
        <div className='grid lg:grid-cols-3 gap-8 grid-cols-1 p-4'>
          {sectors.map((sector) => (
            <div key={sector._id} className="card w-full bg-white shadow-xl">
              <div className="card-body ">
                <h2 className="card-title text text-center">{sector.name}</h2>
                <div>
                  <p>
                    <span className="text">Service:</span> {sector.Service}
                  </p>
                  <p>
                    <span className="text">Furniture:</span> {sector.furniture}
                  </p>
                  <p>
                    <span className="text">Beverage:</span> {sector.beverage}
                  </p>
                  <p>
                    <span className="text">Machinery :</span> {sector.machinery}
                  </p>
                  <p>
                    <span className="text">Manufacturing :</span>{" "}
                    {sector.manufacturing}
                  </p>
                  <p>
                    <span className="text">Metalworking :</span>{" "}
                    {sector.metalworking}
                  </p>
                  <p>
                    <span className="text">Printing :</span> {sector.printing}
                  </p>
                  <p>
                    <span className="text">Rubber :</span> {sector.rubber}
                  </p>
                  <p>
                    <span className="text">Textile :</span> {sector.textile}
                  </p>
                  <p>
                    <span className="text">Tourism :</span> {sector.tourism}
                  </p>
                  <p>
                    <span className="text">Wood :</span> {sector.wood}
                  </p>
                  <p>
                    <span className="text">Other :</span> {sector.other}
                  </p>
                </div>
                <div className="button">
                  <Link to={`/sector/${sector._id}`} className="btn btn-sm mt-4 bg-[#3bb4a5] hover:bg-[turquoise] border-none">
                    Edit Data
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Sector;