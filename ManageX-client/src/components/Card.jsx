import React from 'react'
import { Link } from 'react-router-dom';
import {FiCalendar, FiDollarSign, FiMapPin} from "react-icons/fi";


const Card = ({data}) => {

  const {_id, carBrand, carName, companyLogo, minPrice, maxPrice, Location, postingDate,
     description} = data;
  return (
    <div>
      <section className='card'>
        <Link to={`/job/${_id}`} className='flex gap-4 flex-row sm:flex-col item-start'>
            <img src={companyLogo} alt={carName} className='w-42 h-32.5 mb-4'/>                     {/*EXTRA HEIGHT AND WIDTH*/}
            <div className="card-details">
                <h4 className='text-primary mb-1'>{carBrand}</h4>    { /*carBrand-> companyName*/}
                <h3 className='text-lg font-semibold mb-2'>{carName}</h3> {/*carName -> jobtitle */}
               
                <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                    <span className='flex items-center gap-2'><FiMapPin/>{Location}</span>
                    <span className='flex items-center gap-2'><FiDollarSign/>{minPrice}-{maxPrice}k</span>
                    <span className='flex items-center gap-2'><FiCalendar/>{postingDate}</span>
                </div>
                <p className='text-base text-primary/70'>{description}</p>
            </div>
        
        </Link>

    </section>
    </div>
    
  )
}

export default Card