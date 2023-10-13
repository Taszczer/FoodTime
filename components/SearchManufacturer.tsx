'use client'

import { useState, Fragment } from 'react'
import { SearchManufacturerProps } from '@/types'
import { foodName } from '@/constants'
import { Combobox, Transition} from '@headlessui/react'


const SearchManufacturer = ({selected, setSelected}:SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? foodName
      : foodName.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className='flex-1 max-sm:w-full flex justify-start items-center'>
      <Combobox value={selected} onChange={setSelected}> 
        <div className='relative w-full'>
         
          <Combobox.Input
            className='sm:w-[120%] max-sm:w-full  text-white font-medium text-base h-[48px] pl-12 p-4 rounded-full bg-light-white outline-none cursor-pointer placeholder:text-white bg-orange-300'
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder='Search Food...'
          />

          
          <Transition
            as={Fragment} 
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")} 
          >
            <Combobox.Options
              className='z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='cursor-default select-none py-2 pl-10 pr-4'
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item: any) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative text-sm p-2 w-full search-manufacturer__option ${
                        active ? "bg-orange-400 text-white cursor-pointer" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block ml-5 truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-orange-200"}`}
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

export default SearchManufacturer;