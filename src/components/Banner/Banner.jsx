import img from "../../assets/image2.jpg";
const Banner = () => {
  return (
    <>
      <div className="mb-20  ">
        <img className="hero  h-[80vh] rounded-lg" src={img} />
        <div className="hero-overlay"></div>
        <div className=" absolute inset-0 flex justify-center items-center text-center text-neutral-content">
          <div className=" ">
            {/* max-w-md  */}
            <h1 className="mb-5 text-6xl font-bold	tracking-wide	leading-normal	 text-white">
              Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="my-10 text-xl text-gray-300 leading-relaxed		">
              You can easily save the nutrition label by saving the provided
              embed code. Once you've finalized your ingredients
              <br /> and servings click or tap "embed this label," located under
              the nutrition label
            </p>
            <button className="btn mr-8 rounded-full bg-cyan-400	btn-outline">
              Explore Now
            </button>
            <button className="btn btn-outline border-cyan-600 rounded-full text-white">
              Our Feedback
            </button>
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
