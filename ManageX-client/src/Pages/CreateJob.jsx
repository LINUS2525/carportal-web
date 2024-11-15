import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const CreateJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
    
  } = useForm();


  const onSubmit = (data) => {
    // console.log(data);
    fetch("http://localhost:5000/post-job", {
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then((result) => {
      //console.log(result);
      if(result.acknowledged === true ){
        alert("Car Posted Successfully!!!")
      }
      reset()
    });
  };


  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">  {/* create-job-flex............................................... */}
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Car Model</label>
              <input
                defaultValue="Alto 800"
                {...register("carName")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" //......................................................................create-job-input

              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Car Brand</label>
              <input
              
                placeholder="Ex: Maruti Suzuki"
                {...register("carBrand")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Price</label>
              <input
                placeholder="$20k"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Price</label>
              <input
                placeholder="$120k"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
           
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Car Location</label>
              <input
                placeholder="Ex: New York"
                {...register("Location")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Car Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2023-11-03"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
           
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                placeholder="Paste your company URL: https://wetransfer.com/"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Car Images</label>
              <input
                type="file"
                placeholder="Attach Images of Car"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 7th row */}
          <div className="w-full">
          <label className="block mb-2 text-lg">Car Description</label>
          <textarea  className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
           rows={6}
           defaultValue={"The sleek Apex Cruiser boasts a turbocharged engine with cutting-edge fuel efficiency, delivering both power and eco-friendliness. Its aerodynamic design and premium interior make every drive a luxurious experience."}
           placeholder="Car Description"
           {...register("description")}
          />
          </div>


          {/* last row */}
          <div className="w-full">

            <label className="block mb-2 text-lg">Car Posted By</label>
            <input
                type="email"
                placeholder="your email"
                {...register("postedBy")}
                className="w-full pl-3 py-1.5 focus:outline-none"  //............................................create-job-input
            />

          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
