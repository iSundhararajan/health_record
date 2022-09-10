import React from 'react'

export default function Records() {

  const [file, setFile] = React.useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <div className="grid place-items-center py-5">
        <h1 className="text-5xl font-bold text-white">Records</h1>
        <div className="bg-blue-500 h-1 w-36 my-2"></div>
      </div>

      <div className="px-16 py-4">
        <h1 className="pl-16 text-4xl font-semibold text-white">My Records</h1>
        <div className="py-6">
          <img src="./testrecord/testrecord.png" alt=" " width="500" />
        </div>
      </div>

      <div className="px-16 py-4">
        <h1 className="pl-16 text-4xl font-semibold text-white">Upload Records</h1>

        <input className='my-8 bg-secondary py-2 px-8 rounded-md text-xl' type="file" onChange={handleChange} />
        <img src={file} />

        <button className='bg-secondary py-2 px-8 rounded-md text-xl text-white my-4'>Upload record</button>

      </div>

    </div>
  )
}
