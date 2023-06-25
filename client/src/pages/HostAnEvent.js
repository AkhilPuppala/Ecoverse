import React from 'react'
import Layout from '../components/Layout/Layout'

const HostAnEvent = () => {
  return (
    <Layout>
        <div className='container'>
        <h1 className='text-center'>Host An Event</h1>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" id="exampleInputTitle1"  placeholder='Enter title of the event'/>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" id="exampleInputDescription1"  placeholder='Enter description of the event'/>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" id="exampleInputPlace1"  placeholder='Enter place of the event'/>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" id="exampleInputDate1"  placeholder='Enter date of the event'/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </Layout>
  )
}

export default HostAnEvent
