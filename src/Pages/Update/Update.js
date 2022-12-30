import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const sector = useLoaderData();

    const handleUpdate = data=>{
        const sectorData = {
          name: data.name,
          manufacturing: data.Manufacturing,
          beverage: data.Beverage,
          wood: data.Wood,
          textile: data.Textile,
          tourism: data.Tourism,
          other: data.Other,
          furniture: data.Furniture,
          machinery: data.Machinery,
          metalworking: data.Metalworking,
          rubber: data.Rubber,
          printing: data.Printing,
          Service: data.Service,
        };

        fetch(`http://localhost:5000/sector/${sector._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(sectorData),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.acknowledged) {
              toast.success("Data Updated Successfully !!");
              navigate("/sector");
            }
          });

    }
    return (
      <div id="addProduct">
        <div className="product-form">
          <h2 id="title">Pick Your Sectors</h2>

          <form onSubmit={handleSubmit(handleUpdate)}>
            <div className="inputbox">
              <input
                type="text"
                {...register("name")}
                required
                placeholder="Full Name"
                defaultValue={sector.name}
              />
            </div>

            <div id="selected">
              <div>
                <label htmlFor="role">Manufacturing</label>
                <select
                  id="Manufacturing"
                  name="role"
                  className="border-2 border-black"
                  {...register("Manufacturing")}
                  required
                  defaultValue={sector.Manufacturing}
                >
                  <option value="Construction Materials">
                    Construction Materials
                  </option>
                  <option value="Electronics & Optics">
                    Electronics & Optics
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="Beverage">Food and Beverage</label>
                <select
                  id="Beverage"
                  name="Beverage"
                  className="border-2 border-black"
                  {...register("Beverage")}
                  required
                  defaultValue={sector.Beverage}
                >
                  <option value="Bakery & confectionery products">
                    Bakery &amp; confectionery products
                  </option>
                  <option value="Beverages">Beverages</option>
                  <option value="Fish & fish products">
                    Fish &amp; fish products
                  </option>
                  <option value="Meat & meat products">
                    Meat &amp; meat products
                  </option>
                  <option value="Milk & dairy products">
                    {" "}
                    Milk & dairy products
                  </option>
                  <option value="Sweets & snack food">
                    Sweets &amp; snack food
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="Furniture">Furniture</label>
                <select
                  id="Furniture"
                  name="Furniture"
                  {...register("Furniture")}
                  required
                  className="border-2 border-black"
                  defaultValue={sector.Furniture}
                >
                  <option value="Bathroom/sauna">Bathroom/sauna</option>
                  <option value="Bedroom">Bedroom</option>
                  <option value="Children's room ">Children's room </option>
                  <option value="Kitchen">Kitchen </option>
                  <option value="Living room">Living room </option>
                  <option value="Office">Office</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Project-Furniture">Project-Furniture</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="Machinery">Machinery</label>
                <select
                  id="Machinery"
                  name="Machinery"
                  className="border-2 border-black"
                  {...register("Machinery")}
                  required
                  defaultValue={sector.Machinery}
                >
                  <option value="Machinery components">
                    Machinery components
                  </option>
                  <option value="Machinery equipment/tools">
                    Machinery equipment/tools
                  </option>
                  <option value="Manufacture of machinery">
                    Manufacture of machinery
                  </option>
                  <option value="Maritime">Maritime</option>
                  <option value=" Aluminium and steel workboats">
                    Aluminium and steel workboats
                  </option>
                  <option value="Boat/Yacht building">
                    Boat/Yacht building
                  </option>
                  <option value="Ship repair and conversion">
                    Ship repair and conversion
                  </option>
                  <option value="Metal structures">Metal structures</option>
                  <option value="Repair and maintenance service">
                    Repair and maintenance service
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="Metalworking">Metalworking</label>
                <select
                  id="Metalworking"
                  name="Metalworking"
                  className="border-2 border-black"
                  {...register("Metalworking")}
                  required
                  defaultValue={sector.Metalworking}
                >
                  <option value="Construction-Metal">
                    Construction of metal structures
                  </option>
                  <option value="Houses and buildings">
                    Houses and buildings
                  </option>
                  <option value="Metal products">Metal products</option>
                  <option value="Metal works">Metal works</option>
                  <option value="CNC-machining">CNC-machining</option>
                  <option value="Forgings, Fasteners">
                    Forgings, Fasteners
                  </option>
                  <option value="Gas, Plasma, Laser cutting">
                    Gas, Plasma, Laser cutting
                  </option>
                  <option value="MIG, TIG, Aluminum welding">
                    MIG, TIG, Aluminum welding
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="Rubber">Plastic and Rubber</label>
                <select
                  id="Rubber"
                  name="Rubber"
                  className="border-2 border-black"
                  {...register("Rubber")}
                  required
                  defaultValue={sector.Rubber}
                >
                  <option value="Packaging">Packaging</option>
                  <option value="Plastic goods">Plastic goods</option>
                  <option value="Plastic processing technology">
                    Plastic processing technology
                  </option>
                  <option value="Blowing">Blowing</option>
                  <option value="Moulding">Moulding</option>
                  <option value="welding">
                    Plastics welding and processing
                  </option>
                  <option value="Plastic-Profiles">Plastic profiles</option>
                </select>
              </div>

              <div>
                <label htmlFor="Printing">Printing</label>
                <select
                  id="Printing"
                  name="Printing"
                  className="border-2 border-black"
                  {...register("Printing")}
                  required
                  defaultValue={sector.Printing}
                >
                  <option value="Advertising">Advertising</option>
                  <option value="Book/Periodicals printing">
                    Book/Periodicals printing
                  </option>
                  <option value="Labelling and packaging printing">
                    Labelling and packaging printing
                  </option>
                </select>
              </div>

              <div>
                {/* <input type="radio" name="sector" id="Textile" /> */}
                <label htmlFor="Textile and Clothing">
                  Textile and Clothing
                </label>
                <select
                  id="Textile"
                  name="Textile"
                  className="border-2 border-black"
                  {...register("Textile")}
                  required
                  defaultValue={sector.Textile}
                >
                  <option value="Clothing">Clothing</option>
                  <option value="Textile">Textile</option>
                </select>
              </div>

              <div>
                {/* <input type="radio" name="sector" id="Wood" /> */}
                <label htmlFor="Wood">Wood</label>
                <select
                  id="Wood"
                  name="Wood"
                  className="border-2 border-black"
                  {...register("Wood")}
                  required
                  defaultValue={sector.Wood}
                >
                  <option value="Wooden building materials">
                    Wooden building materials
                  </option>
                  <option value="Wooden houses">Wooden houses</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="Service">Service</label>
                <select
                  id="Service"
                  name="Service"
                  className="border-2 border-black"
                  {...register("Service")}
                  required
                  defaultValue={sector.Service}
                >
                  <option value="Business services">Business services</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Information Technology and Telecommunications">
                    Information Technology and Telecommunications
                  </option>
                  <option value="Data processing, Web portals, E-marketing">
                    Data processing, Web portals, E-marketing
                  </option>
                  <option value="Programming, Consultancy">
                    Programming, Consultancy
                  </option>
                  <option value="Software, Hardware">Software, Hardware</option>
                  <option value="Telecommunications">Telecommunications</option>
                </select>
              </div>
              <div>
                <label htmlFor="Tourism">Tourism</label>
                <select
                  id="Tourism"
                  name="Tourism"
                  className="border-2 border-black"
                  {...register("Tourism")}
                  required
                  defaultValue={sector.Tourism}
                >
                  <option value="Translation services">
                    Translation services
                  </option>
                  <option value="Transport and Logistics">
                    Transport and Logistics
                  </option>
                  <option value="Air">Air</option>
                  <option value="Rail">Rail</option>
                  <option value="Road">Road</option>
                  <option value="Water">Water</option>
                </select>
              </div>
              <div>
                <label htmlFor="Other">Other</label>
                <select
                  id="Other"
                  name="Other"
                  className="border-2 border-black"
                  {...register("Other")}
                  required
                  defaultValue={sector.Other}
                >
                  <option value="Creative industries">
                    Creative industries
                  </option>
                  <option value="Energy technology">Energy technology</option>
                  <option value="Environment">Environment</option>
                </select>
              </div>
            </div>
            <div className="button">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    );
};

export default Update;