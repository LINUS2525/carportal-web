
import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import PageHeader from '../components/PageHeader';

const UpdateJob = () => {
  const { id } = useParams();
  const {
    carName,
    carBrand,
    minPrice,
    maxPrice,
    Location,
    postingDate,
    companyLogo,
    description,
    postedBy,
  } = useLoaderData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    fetch(`https://carportal-web.onrender.com/update-job/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Car Updated Successfully!!!");
        }
      });
  };

 
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
    <PageHeader title={"Update This Car Details"} path={"Edit Car"} />

    {/* form */}
    <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* 1st row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg">Car Model</label>
            <input
              defaultValue={carName}
              {...register("carName")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg">Car Brand</label>
            <input
              placeholder="Ex: Audi"
              defaultValue={carBrand}
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
              defaultValue={minPrice}
              {...register("minPrice")}
              className="create-job-input"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg">Maximum Price</label>
            <input
              placeholder="$100k"
              defaultValue={maxPrice}
              {...register("maxPrice")}
              className="create-job-input"
            />
          </div>
        </div>

        {/* 3rd row */}
        <div className="create-job-flex">
         
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg"> Location</label>
            <input
              placeholder="Ex: New York"
              defaultValue={Location}
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
              className="create-job-input"
              {...register("postingDate")}
              placeholder="Ex: 2023-11-03"
              type="date"
              defaultValue={postingDate}
            />
          </div>

         
        </div>

      

        {/* 6th row */}
        <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
            <label className="block mb-2 text-lg">Company Logo</label>
            <input
              type="url"
              placeholder="Paste your image url: https://weshare.com/img1.jpg"
              {...register("companyLogo")}
              className="create-job-input"
              defaultValue={companyLogo}
            />
          </div>

        
        </div>

        {/* 7th row */}
        <div className="w-full">
        <label className="block mb-2 text-lg">Car Description</label>
        <textarea
            className="w-full pl-3 py-1.5 focus:outline-none"
            rows={6}
            {...register("description")}
            placeholder="car description"
            defaultValue={description}
          />
        </div>

        {/* last row */}
        <div className="w-full">
        <label className="block mb-2 text-lg">Car Posted by</label>
        <input
        type="email"
            // value={user?.email}
            
            className="w-full pl-3 py-1.5 focus:outline-none"
            {...register("postedBy")}
            placeholder="your email"
            defaultValue={postedBy}
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

export default UpdateJob;
