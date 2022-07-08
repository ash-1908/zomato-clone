import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import {useDispatch} from "react-redux"
import { signup } from '../../Redux/Reducer/Auth/Auth.Action'
//icons
import {FcGoogle} from 'react-icons/fc'

export default function SignUp({isOpen, setIsOpen}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullName: ""
  });

  const dispatch = useDispatch();

  const handleChange = (e) => setUserData(prev => ({...prev, [e.target.name] : e.target.value}))

  function closeModal() {
    setIsOpen(false)
  }

  const submit = () => {
    setUserData({
      email: "",
      password: "",
      fullName: ""
    });
    dispatch(signup(userData));
  };

  const googleSignIn = () => (window.location.href = "http://localhost:3000/auth/google");
 
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-gray-900"
                  >
                    Sign Up
                  </Dialog.Title>
                  <div className="mt-6 flex flex-col items-start">
                    <div className='w-full'>
                      <button 
                      className='w-full px-3 py-2 border border-gray-200 rounded-lg hover:bg-zred-100 hover:text-zred-600'>
                        <span className='flex items-center gap-2 w-full justify-center'
                        onClick={googleSignIn}>Sign Up with Google <FcGoogle /></span></button>
                    </div>
                    <hr className='w-full my-6' />
                    <div className='w-full'>
                      <form action="" className='w-full flex flex-col gap-3 items-start'>
                        <div className='flex flex-col gap-1 w-full'>
                          <label htmlFor="name" className=''>Full Name</label>
                          <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={userData.fullName}
                          onChange={handleChange}
                          className='w-full focus:bg-white bg-gray-100 px-2 h-8 border rounded-lg focus:outline-none'
                          placeholder='John Doe'/>
                        </div>
                        <div className='w-full'>
                          <label htmlFor="email" className=''>Email</label>
                          <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={userData.email}

                          onChange={handleChange}
                          className='w-full focus:bg-white bg-gray-100 px-2 h-8 border rounded-lg focus:outline-none'
                          placeholder='example@example.com'/>
                        </div>
                        <div className='flex flex-col gap-1 items-start w-full'>
                          <label htmlFor="password">Password</label>
                          <input 
                          type="password" 
                          id="password" 
                          name="password"
                          value={userData.password}

                          onChange={handleChange}
                          className='w-full focus:bg-white bg-gray-100 px-2 h-8 border rounded-lg focus:outline-none'
                          placeholder='password'/>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="mt-4 text-center" onClick={closeModal}>
                    <button
                      type="button"
                      className="inline-flex border border-gray-200 justify-center rounded-md border border-transparent hover:bg-zred-100 px-4 py-2 text-sm font-medium hover:text-zred-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={submit}
                    >
                      Sign Up
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
