const Service = ({ service }) => {
    const {name ,image,short_description,button} = service;
  
  return <div className="card lg:h-96 bg-base-100 shadow-xl" data-aos = "fade-left">


  <figure className="px-10 pt-10">
      <img src={image} alt="" className="rounded-xl w-full" />
  </figure>
  <div className="card-body items-center text-center">
      <h2 className="card-title">{name}</h2>
      <p>{short_description}</p>
      <button className="bg-slate-300 py-2 px-3 rounded
      ">{button}</button>
      
  </div>
</div>
};

export default Service;
