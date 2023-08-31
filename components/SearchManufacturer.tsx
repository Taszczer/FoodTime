"use client"

import { Combobox, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { foodName } from '@/constants'
import { SearchManufacturerProps } from '@/types'

const SearchManufacturer = ({ selected, setSelected}:SearchManufacturerProps) => {

    const [query, setQuery] = useState('')
  
    const filteredFood =
    query === '' ? foodName : foodName.filter((food) =>
      food.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
    );
  
    return (
      <div className='flex-1 max-sm:w-full flex justify-start items-center '>
        <Combobox value={selected} onChange={setSelected}>
          <div className='relative w-full'>
            
            <Combobox.Input
              className='bg-orange-300 text-white font-bold text-[19px] mt-5 h-[48px] pl-12 p-4 w-[250px] placeholder:text-white rounded-2xl max-sm:rounded-full bg-light-white outline-none cursor-pointer'
              displayValue={(item: string) => item}
              onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
              placeholder='Search food...'
            />
  
            <Transition
              as={Fragment} 
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              afterLeave={() => setQuery("")} 
            >
              <Combobox.Options
                className='z-50 rounded-t-3xl overflow-auto mt-1 max-h-60 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                static
              >
                {filteredFood.length === 0 && query !== "" ? (
                  <Combobox.Option
                    value={query}
                    className='mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                  >
                    Create "{query}"
                  </Combobox.Option>
                ) : (
                  filteredFood.map((item: any) => (
                    <Combobox.Option
                      key={item}
                      className={({ active }) =>
                        `relative cursor-pointe select-none py-2 pl-10 pr-4 ${
                          active ? " bg-orange-300 text-white" : "text-gray-900"
                        }`
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                            {item}
                          </span>
  
                          
                          {selected ? (
                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": ""}`}
                            ></span>
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
    );
  };
  

export default SearchManufacturer