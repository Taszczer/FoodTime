'use client'

import { RecipeCardProps } from '@/types'
import Image from 'next/image'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface RecipeDetailsProps {
    isOpen: boolean
    closeModal: () => void
    recipe:RecipeCardProps
}

const ShowRecipe = ({isOpen, closeModal, recipe}:RecipeDetailsProps) => {
    
  return (
      <>
          <Transition
              appear
              show={isOpen}
              as={Fragment}
          >
              <Dialog
                  as='div'
                  className='relative z-50'
                  onClose={closeModal}
              >
                  <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                  </Transition.Child>
                  
                  <div className='fixed inset-0 overflow-y-auto'>
                      <div className='flex min-h-full items-center justify-center p-4 text-center'>
                          <Transition.Child
                              as={Fragment}
                              enter='easy-out duration-300'
                              enterFrom='opacity-0 scale-95'
                              enterTo='opacity-100 scale-100'
                              leave='easy-in duration-200'
                              leaveFrom='opacity-100 scale-100'
                              leaveTo='opacity-0 scale-95'
                          >
                              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform
                              rounded-2xl bg-white p-6 text-left transition-all flex flex-col gap-5'>
                                  <button
                                      type='button'
                                      className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-orange-100 rounded-full '
                                      onClick={closeModal}
                                  >
                                      -+-
                                  </button>
                                  
                                  <div className="flex-1 flex flex-col gap-2">
                                        <h2 className="font-semibold text-xl capitalize">
                                        fsfsjf
                                        </h2>

                                        <div className="mt-3 flex flex-wrap gap-4">
                                        {Object.entries(recipe).map(([key, value]) => (
                                            <div className="flex justify-between gap-5 w-full text-right" key={key}>
                                            <h4 className="text-gray capitalize">{key.split("_").join(" ")}</h4>
                                            <p className="text-black-100 font-semibold">{value}</p>
                                            </div>
                                        ))}
                                        </div>
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

export default ShowRecipe