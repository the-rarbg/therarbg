import React from 'react'

const upload = () => {
  return (
    <div>
      <div className='w-[50%] pb-5 m-auto'>
        <div className="mt-[5rem] justify-center pt-5 pb-5 bg-gray-200 bg-opacity-10 rounded-lg border-gray-200 border-opacity-30 flex relative">

          <form className='w-[85%]'>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title name</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Movie Name" required />
              </div>
              
              <div>
                <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Name</label>
                <input type="text" id="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-[7px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Short Name" required />
              </div>

             
              <div>
                <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                <select id="language" className="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Flowbite" >
                  <option>
                    Select
                  </option>
                  <option>
                    type1
                  </option>
                  <option>
                    type2
                  </option>
                  <option>
                    type3
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                <select id="language" className="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Flowbite" >
                  <option>
                    Select
                  </option>
                  <option>
                    type1
                  </option>
                  <option>
                    type2
                  </option>
                  <option>
                    type3
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                <select id="language" className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Flowbite" >
                  <option>
                    Select
                  </option>
                  <option>
                    type1
                  </option>
                  <option>
                    type2
                  </option>
                  <option>
                    type3
                  </option>
                </select>
              </div>

            </div>
            <div className="mb-6">
              <label htmlFor="hash" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Torrent Hash</label>
              <input type="text" id="hash" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="309626C8000F9C006782B097E7B6EAADD7F7C3E7" required />
            </div>
            <div className="mb-6">
              <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
              <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="john.doe@company.com" required />
            </div>
            <div className="mb-6">
              <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Torrent Descriptions</label>
              <textarea rows={6} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" >

              </textarea>
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
              </div>
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a>.</label>
            </div>
            <button type="submit" className="bg-primary/10 text-primary border-primary my-3 hover:bg-primary/30 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700" style={{ border: "solid 0.5px" }} >Submit</button>
          </form>

        </div>
      </div>
    </div>

  )
}

export default upload
