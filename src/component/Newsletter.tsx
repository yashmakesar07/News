

const Newsletter = () => {
  return (
    <div className="bg-custom-blue h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col h-2/5 w-3/5 bg-white p-6 rounded shadow justify-center items-center m-5">
          {/* header */}
          <div className="text-4xl font-bold mb-4 text-center">
            <h1>Level Up Your Frontend Skills</h1>
          </div>
          {/* Below Header */}
          <div className="text-xl w-3/4 font-light text-center">
            <h3>
              Sign up for our new newsletter to receive coding challenges that
              improve your coding skills and frontend skills.
            </h3>
          </div>
          {/* Input and button */}
          <div className="flex flex-row w-3/4 h-2/5 items-center mt-4">
            <div className=" h-16 w-3/4">
              <input
                placeholder="Enter your Email"
                className="border-2 border-gray-300 p-2 rounded-lg h-full w-full mb-3 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                type="email"
              />
              <div className=" flex w-full space-x-2">
              </div>
            </div>
            <button className="bg-black text-white p-2 ml-2 h-16 rounded-lg w-1/3 hover:text-">
              Subscribe
            </button> 
          </div>
          <div className="flex flex-row  space-x-3 w-3/4 h-2/5 items-start  ">
            <input type="checkbox" className="size-6  mt-1"/>
            <label>
            By checking this box, you agree to receive our weekly newslletter containing coding challenges, tips, and other related content. You ma unsubscribe from the newsletter at any time.
            </label>
          </div>
        </div>
      </div>
  )
}

export default Newsletter;