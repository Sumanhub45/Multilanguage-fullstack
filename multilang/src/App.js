import React,{useState} from 'react';
import "./App.css";


const App = () => {
  const [data, setData] = useState([
    {
      "lang":"eng",
      "Name":"Suman Biswas",
      "sub":"Computer Science & Engineering",
      "address":"kolkata, West Bengal",
      "email":"suman.lalbagh93@gmail.com",
      "phone":8250793492,
      "title":"Educational Qualification",
      "titleeq1":"Matric",
      "titleeq2":"Intermediate",
      "titleeq3":"B.Tech",
      "titleeq4":"M.Tech",
      "boadr1":"West Bengal Board of Secondary Education",
      "boadr2":"West Bengal Council of Higher Secondary Education",
      "boadr3":"Maulana Abul Kalam Azad University of Technology, West Bengal",
      "boadr4":"Maulana Abul Kalam Azad University of Technology, West Bengal",
      "year1":2010,
      "year2":2013,
      "year3":2020,
      "year4":2022,
      "institution1":"Kurmitola High School",
      "institution2":"Nawab Bahadurs Institution",
      "institution3":"Murshidabad College of Engineering and Technology",
      "institution4":"Maulana Abul Kalam Azad University of Technology, West Bengal",
      "percentage1":69,
      "percentage2":54,
      "percentage3":71,
      "percentage4":83
  }

]);

  
  // data.join();
  // console.log(data[0].Name);
  const bengal = () => {
    fetch("http://localhost:8000/languages")
    .then((response) => response.json())
    .then((data) => {
      setData(
        {
          "lang":data[2].lang,
          "Name":data[2].Name,
          "sub":data[2].sub,
          "address": data[2].address,
          "email": data[2].email,
          "phone": data[2].phone,
          "title": data[2].title,
          "titleeq1": data[2].titleeq1,
          "titleeq2": data[2].titleeq2,
          "titleeq3": data[2].titleeq3,
          "titleeq4": data[2].titleeq4,
          "boadr1": data[2].boadr1,
          "boadr2": data[2].boadr2,
          "boadr3": data[2].boadr3,
          "boadr4": data[2].boadr4,
          "year1": data[2].year1,
          "year2": data[2].year2,
          "year3": data[2].year3,
          "year4": data[2].year4,
          "institution1": data[2].institution1,
          "institution2": data[2].institution2,
          "institution3": data[2].institution3,
          "institution4": data[2].institution4,
          "percentage1": data[2].percentage1,
          "percentage2": data[2].percentage2,
          "percentage3": data[2].percentage3,
          "percentage4": data[2].percentage4
      }
      )});
  };
  const english = () => {
    fetch("http://localhost:8000/languages")
    .then((response) => response.json())
    .then((data) => {
      setData(
        {
          "lang":data[0].lang,
          "Name":data[0].Name,
          "sub":data[0].sub,
          "address": data[0].address,
          "email": data[0].email,
          "phone": data[0].phone,
          "title": data[0].title,
          "titleeq1": data[0].titleeq1,
          "titleeq2": data[0].titleeq2,
          "titleeq3": data[0].titleeq3,
          "titleeq4": data[0].titleeq4,
          "boadr1": data[0].boadr1,
          "boadr2": data[0].boadr2,
          "boadr3": data[0].boadr3,
          "boadr4": data[0].boadr4,
          "year1": data[0].year1,
          "year2": data[0].year2,
          "year3": data[0].year3,
          "year4": data[0].year4,
          "institution1": data[0].institution1,
          "institution2": data[0].institution2,
          "institution3": data[0].institution3,
          "institution4": data[0].institution4,
          "percentage1": data[0].percentage1,
          "percentage2": data[0].percentage2,
          "percentage3": data[0].percentage3,
          "percentage4": data[0].percentage4
      }
      )});
  };

  const hindi = () => {
    fetch("http://localhost:8000/languages")
    .then((response) => response.json())
    .then((data) => {
      setData(
        {
          "lang":data[1].lang,
          "Name":data[1].Name,
          "sub":data[1].sub,
          "address": data[1].address,
          "email": data[1].email,
          "phone": data[1].phone,
          "title": data[1].title,
          "titleeq1": data[1].titleeq1,
          "titleeq2": data[1].titleeq2,
          "titleeq3": data[1].titleeq3,
          "titleeq4": data[1].titleeq4,
          "boadr1": data[1].boadr1,
          "boadr2": data[1].boadr2,
          "boadr3": data[1].boadr3,
          "boadr4": data[1].boadr4,
          "year1": data[1].year1,
          "year2": data[1].year2,
          "year3": data[1].year3,
          "year4": data[1].year4,
          "institution1": data[1].institution1,
          "institution2": data[1].institution2,
          "institution3": data[1].institution3,
          "institution4": data[1].institution4,
          "percentage1": data[1].percentage1,
          "percentage2": data[1].percentage2,
          "percentage3": data[1].percentage3,
          "percentage4": data[1].percentage4
      }
      )});
  };

 
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-s text-indigo-500 tracking-widest font-medium title-font mb-1">My Biodata in Different Languages</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{data.Name}</h1>
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{data.sub}</h2>
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{data.address}</h2>
       
      </div>
       <div className= "myBut">
      <h1 className ="sm:text-6xl text-2xl">{data.title}</h1>
      </div>
      <div className="flex flex-wrap">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{data.titleeq1}</h2>
          <p className="leading-relaxed text-base mb-4">Board - {data.boadr1}</p>
          <p className="leading-relaxed text-base mb-4">Institution - {data.institution1}</p>
          <p className="leading-relaxed text-base mb-4">{data.percentage1}%</p>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{data.titleeq2}</h2>
          <p className="leading-relaxed text-base mb-4">Board - {data.boadr2}</p>
          <p className="leading-relaxed text-base mb-4">Institution - {data.institution2}</p>
          <p className="leading-relaxed text-base mb-4">{data.percentage2}%</p>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{data.titleeq3}</h2>
          <p className="leading-relaxed text-base mb-4">Board - {data.boadr3}</p>
          <p className="leading-relaxed text-base mb-4">Institution - {data.institution3}</p>
          <p className="leading-relaxed text-base mb-4">{data.percentage3}%</p>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{data.titleeq4}</h2>
          <p className="leading-relaxed text-base mb-4">Board - {data.boadr4}</p>
          <p className="leading-relaxed text-base mb-4">Institution - {data.institution4}</p>
          <p className="leading-relaxed text-base mb-4">{data.percentage4}%</p>
        </div>
      </div>
      <div className =" myButton">
      <button onClick={english}  className="mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">English</button>
      <button onClick={bengal}  className="mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">বাংলা</button>
      <button onClick={hindi}   className="mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">हिन्दी</button>
    </div></div>
  </section></div>
  )
}

export default App;
