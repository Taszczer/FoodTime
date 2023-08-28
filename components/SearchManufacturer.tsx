"use client"

import { Combobox, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { foodName } from '@/constants'
import { SearchManufacturerProps } from '@/types'

const SearchManufacturer = ({ selected, setSelected}:SearchManufacturerProps) => {

    const [selectedFood, setSelectedFood] = useState(foodName[0])
    const [query, setQuery] = useState('')
  
    const filteredFood =
      query === '' ? foodName : foodName.filter((food) => {
        food
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      }) 
  
  return (
    <div className='z-80 flex flex-1 justify-start items-center max-sm:w-full'>
          <Combobox
              value={selectedFood}
              onChange={setSelectedFood}
          >
            <div className='relative w-full'>
                <Combobox.Input
                    className=""
                    displayValue={(item: string) => item}
                    onChange={(event) => setQuery(event.target.value) }
                    placeholder='Hamburger'  
                />

                  <Transition
                      as={Fragment}
                      leave='transition ease-in duration-100'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                      afterLeave={() => setQuery("")}
                  >
                      <Combobox.Options
                        className="z-50 overflow-auto absolute mt-1 max-h-60 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        static
                      >
                          {filteredFood.length === 0 && query !== "" ? (
                            <Combobox.Option
                                value={query}
                                className=""
                            >
                                  We haven't "{query}"      
                            </Combobox.Option>
                          ) : (
                            filteredFood.map((item: any) => (
                                <Combobox.Option
                                    key={item}
                                    className={({ active }) => 
                                        `relative search-manufacturer__option ${
                                        active ? "bg-primary-blue text-white" : "text-gray-900"
                                      }`
                                }
                                    value={item}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                            className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                            }`}
                                            >
                                            {item.name}
                                            </span>
                                            {selected ? (
                                            <span
                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                active ? 'text-white' : 'text-teal-600'
                                                }`}
                                            >
                                            </span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                          )}
                      </Combobox.Options>
                  </Transition>
            </div>
          </Combobox>      
    </div>
  )
}

export default SearchManufacturer