import React from 'react'
import DashboardHeader from '../DashboardHeader'
import ImageAdd from '../ImageAdd'

export const PhotoManagement = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
        <div>
            {/* Dashboard Header */}
            <DashboardHeader/>
            {/* Image add component will be here */}
            <ImageAdd/>
        </div>
    </div>
  )
}
