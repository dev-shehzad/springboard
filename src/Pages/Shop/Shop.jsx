import React, { useState } from 'react';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [yearFilters, setYearFilters] = useState([]);

  const dataArray = [
    // Replace the placeholder data with your actual data
    { title: '1001 Tips For An Outstanding Life', author: '', year: 2014, price:"30.00", category: 'Books',  imageUrl: './pic5.jpg' },
    { title: 'Speak like A Pro:10', author: 'Comandments of a Public Speaking', year: 2018, price:"30.00", category: 'Books', imageUrl: '/pic2.jpg' },
    { title: '101 keys to achievements and fulfillment', author: '', year: 2011, price:"30.00", category: 'Books',  imageUrl: '/pic3.jpg' },
    { title: 'Sheba', author: '', year: 2011, price:"25.00", category: 'Books',  imageUrl: '/pic4.jpg' },
    { title: 'Snakes and Ladders', author: '', year: 2009, price:"30.00", category: 'Books',  imageUrl: '/pic6.jpg' },



    // Add more items as needed
  ];

  const filteredItems = dataArray
    .filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((item) => categoryFilters.length === 0 || categoryFilters.includes(item.category))
    .filter((item) => yearFilters.length === 0 || yearFilters.includes(item.year.toString()));

  const handleCategoryToggle = (category) => {
    setCategoryFilters((prevFilters) => {
      if (prevFilters.includes(category)) {
        return prevFilters.filter((c) => c !== category);
      } else {
        return [...prevFilters, category];
      }
    });
  };

  const handleYearToggle = (year) => {
    setYearFilters((prevFilters) => {
      if (prevFilters.includes(year)) {
        return prevFilters.filter((y) => y !== year);
      } else {
        return [...prevFilters, year];
      }
    });
  };

  return (
    <div className="pb-[80px]">
      <div className=" bg-[url('/pic1.jpg')] h-[500px]  lg:w-[100%]  md:w-[100%]  w-[100%]  ">
        <div className="w-full h-full   bg-black bg-opacity-[0.5]">
          <div className="max-w-[1500px] flex items-center max-tab:justify-center h-full w-full mx-auto px-[80px] max-tab:px-[40px] max-md:px-[28px]">
            <div className=" text-white font-extrabold text-7xl ">
              Shop
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1500px] mx-auto px-[80px] max-tab:px-[40px] max-md:px-[25px]">
        <div className=" gap-7 lg:flex lg:flex-row md:flex md:flex-col flex flex-col">
          <div className=" lg:pt-28 md:pt-20 pt-16">
            <div className="border-b-2 border-gray-200 text-gray-500 text-xl p-8 pb-2 font-semibold pl-0">
              SEARCH PRODUCT
            </div>
            <div className="border border-gray-300 border-dotted mt-4">
              <input
                type="text"
                className="px-4 w-full py-2 "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="border-b-2 border-gray-200 text-gray-500 text-xl p-8 pb-2 font-semibold pl-0">
              CATEGORY
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center justify-center w-5 h-6 rounded-xl">
                <input
                  type="checkbox"
                  className="w-[17px] h-[17px] rounded-[8px]"
                  onChange={() => handleCategoryToggle('Books')}
                  checked={categoryFilters.includes('Books')}
                />
              </div>
              <div className="text-gray-500 text-xl">Books</div>
              <div className="border border-gray-400 bg-gray-400 rounded-full pb-4 pl-[0.4rem] w-[22px] h-[20px] text-[11px] mt-1">
                5
              </div>
            </div>

            <div className="border-b-2 border-gray-200 text-gray-500 text-xl p-8 pb-2 font-semibold pl-0">
              PUBLICATION YEAR
            </div>
            <div className="flex  items-center gap-5 flex-wrap w-[40%]">
              <div className="flex items-center  gap-2 mt-4">
                <div className="flex  items-center justify-center w-5 h-6 rounded-xl">
                  <input
                    type="checkbox"
                    className="w-[17px] h-[17px] rounded-[8px]"
                    onChange={() => handleYearToggle('2009')}
                    checked={yearFilters.includes('2009')}
                  />
                </div>

                <div className="text-gray-500 text-xl">2009</div>

                <div className="border border-gray-400 bg-gray-400 rounded-full pb-4 pl-[0.4rem] w-[22px] h-[20px] text-[11px] mt-1">
                  1
                </div>
              </div>


              <div className="flex items-center gap-2 ">
                <div className="flex  items-center justify-center w-5 h-6 rounded-xl">
                  <input
                    type="checkbox"
                    className="w-[17px] h-[17px] rounded-[8px]"
                    onChange={() => handleYearToggle('2011')}
                    checked={yearFilters.includes('2011')}
                  />
                </div>

                <div className="text-gray-500 text-xl">2011</div>

                <div className="border border-gray-400 bg-gray-400 rounded-full pb-4 pl-[0.4rem] w-[22px] h-[20px] text-[11px] mt-1">
                  1
                </div>
              </div> 

              <div className="flex items-center gap-2 ">
                <div className="flex  items-center justify-center w-5 h-6 rounded-xl">
                  <input
                    type="checkbox"
                    className="w-[17px] h-[17px] rounded-[8px]"
                    onChange={() => handleYearToggle('2014')}
                    checked={yearFilters.includes('2014')}
                  />
                </div>

                <div className="text-gray-500 text-xl">2014</div>

                <div className="border border-gray-400 bg-gray-400 rounded-full pb-4 pl-[0.4rem] w-[22px] h-[20px] text-[11px] mt-1">
                  1
                </div>


                <div className="flex items-center gap-2 ">
                <div className="flex  items-center justify-center w-5 h-6 rounded-xl">
                  <input
                    type="checkbox"
                    className="w-[17px] h-[17px] rounded-[8px]"
                    onChange={() => handleYearToggle('2015')}
                    checked={yearFilters.includes('2015')}
                  />
                </div>

                <div className="text-gray-500 text-xl">2015</div>

                <div className="border border-gray-400 bg-gray-400 rounded-full pb-4 pl-[0.4rem] w-[22px] h-[20px] text-[11px] mt-1">
                  1
                </div>

                <div className="flex items-center gap-2 ">
                <div className="flex  items-center justify-center w-5 h-6 rounded-xl">
                  <input
                    type="checkbox"
                    className="w-[17px] h-[17px] rounded-[8px]"
                    onChange={() => handleYearToggle('2018')}
                    checked={yearFilters.includes('2018')}
                  />
                </div>

                <div className="text-gray-500 text-xl">2018</div>

                <div className="border border-gray-400 bg-gray-400 rounded-full pb-4 pl-[0.4rem] w-[22px] h-[20px] text-[11px] mt-1">
                  1
                </div>
              </div>
              </div>
              </div>
            </div>
          </div>

          <div className="pt-24 flex flex-wrap gap-10 max-tab:justify-center">
            {filteredItems.map((item, index) => (
              <div key={index} className="shadow-lg">
                <div style={{ backgroundImage: `url(${item.imageUrl})` }} className={`bg-[url('${item.imageUrl}')] w-full h-[250px] bg-cover object-cover `}></div>
                <div className="bg-purple-900 w-72 h-40 py-4 px-[30px] flex flex-col justify-between gap-2">
                  <div>
                  <p className="text-white font-bold  text-center">{item.title}</p>
                  {item.author && <p className="text-white font-bold text-center">{item.author}</p>}</div>
                  <p className="text-white font-bold text-center">{`©${item.price}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
