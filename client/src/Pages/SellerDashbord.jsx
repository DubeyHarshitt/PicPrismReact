import React from 'react'
import DashbordSidebar from '../Components/DashbordSidebar'
import { PhotoManagement } from '../Components/seller/PhotoManagement'

const SellerDashbord = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      <DashbordSidebar/>
      <div>
        {/* We will change the pages through switch case here  */}
      </div>
      <PhotoManagement/>
    </div>
  )
}

export default SellerDashbord