import img from "../../assets/image1.jpg";
const Banner = () => {
  return (
    <>
      <div>
        <img className="hero  h-[80vh]" src={img} />
        <div className="hero-overlay "></div>
        <div className=" absolute inset-0 flex justify-center items-center text-center text-neutral-content">
          <div className="max-w-md  ">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

{
  /*
  className="hero  h-[80vh]"
  style={{
    `backgroundImage:${img}`
      
  }}
  /* <div className="relative bg-cover bg-center h-full ">
<div className="absolute inset-0  ">
  <img className="h-[85vh] w-full rounded-lg" src={image} />
</div>
<div className="absolute inset-0 flex items-center justify-center">
  <div className="text-center text-white">
    <h1 className="text-4xl font-bold mb-4">Your Heading Here</h1>
    <p className="text-lg mb-6">Your Description Here</p>
    <div className="flex justify-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded">
        Button 1
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button 2
      </button>
    </div>
  </div>
</div>
</div> */
}
