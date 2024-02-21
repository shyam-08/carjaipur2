// pages/search.js
// "use client"
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography,Divider } from '@mui/material';
import SearchBox from '../component/SearchBox';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Navbar from './Navbar';
import Footer from './Footer';

const exoticCars = [

  { Name: 'RangeRover Evoque', Km: '82k', Src: "/img/rangeRover Evoke.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2016', fuel: 'DIESEL', pricesRange: '32,00,000', brand: 'RANGEROVER', owner: '2nd', MakeYear: '2028',IVAl:'Lapse',IType:'-',Rto:'RJ-14',Mileage:'14',GClear:'121mm',Bspace:'575li',SCap:'5 unit', FTank:'65 litre', maxP:'280 HP', AW:'No', path1:'/img/RangeRover evoque1.jpg',url:'/img/RangeRover Evoque2.jpg',location:'/img/RangeRover evoqe3.jpg',way:'/img/RangeRover evoqu4.jpg'  },
  { Name: 'BMW 7Series', Km: '43k', Src: "/img/BMW 730sign.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2020', fuel: 'DIESEL', pricesRange: '105,00,000', brand: 'BMW', owner: '1st', MakeYear: '2028',IVAl:'Lapse',IType:'-',Rto:'HP-38',Mileage:'10',GClear:'140mm',Bspace:'570li',SCap:'5 unit', FTank:'68 litre', maxP:'211 HP', AW:'No', path1:'/img/Bmw 7series1.jpg',url:'/img/Bmw 7series2.jpg',location:'/img/Bmw 7series3.jpg',way:'/img/Bmw 7series4.jpg'  },
  { Name: 'Mercedes GLC 43', Km: '24k', Src: "/img/mercedes glc43.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2022', fuel: 'PETROL', pricesRange: '90,00,000', brand: 'MERCEDES', owner: '1st', MakeYear: '2028',IVAl:'Lapse',IType:'-',Rto:'-',Mileage:'8',GClear:'142mm',Bspace:'550li',SCap:'5 unit', FTank:'74 litre', maxP:'385 HP', AW:'No', path1:'/img/mercedes glc431.jpg',url:'/img/mercedes glc432.jpg',location:'/img/mercedes glc433.jpg',way:'/img/mercedes glc43.jpg' },
  { Name: 'BMW X1 SDrive', Km: '10k', Src: "/img/BMW X1.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2022', fuel: 'PETROL', pricesRange: '42,00,000', brand: 'BMW', owner: '1st', MakeYear: '2028',IVAl:'11-2025',IType:'Third Party',Rto:'RJ-45',Mileage:'12',GClear:'185mm',Bspace:'510li',SCap:'5 unit', FTank:'61 litre', maxP:'228 HP', AW:'No', path1:'/img/Bmw x11.jpg',url:'/img/Bmw x12.jpg',location:'/img/Bmw x13.jpg',way:'/img/Bmw x14.jpg'  },
  { Name: 'BMW X3 SDrive', Km: '1k', Src: "/img/BMW X3.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2023', fuel: 'PETROL', pricesRange: '89,00,000', brand: 'BMW', owner: '1st', MakeYear: '2028',IVAl:'7-2026',IType:'Third Party',Rto:'RJ-45',Mileage:'10',GClear:'185mm',Bspace:'575li',SCap:'5 unit', FTank:'65 litre', maxP:'286 HP', AW:'No', path1:'/img/Bmw x31.jpg',url:'/img/Bmw x32.jpg',location:'/img/Bmw x33.jpg',way:'/img/Bmw x34.jpg' },
  { Name: 'BMW 3Series', Km: '20k', Src: "/img/BMW 320 LD.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2020', fuel: 'DIESEL', pricesRange: '55,00,000', brand: 'BMW', owner: '1st', MakeYear: '2028',IVAl:'2-25',IType:'Third Party',Rto:'RJ-20',Mileage:'12',GClear:'121mm',Bspace:'540li',SCap:'5 unit', FTank:'68 litre', maxP:'255 HP', AW:'No', path1:'/img/Bmw 3series1.jpg',url:'/img/bmw 3series2.jpg',location:'/img/bmw 3series3.jpg',way:'/img/bmw 3series4.jpg' },
  { Name: 'BMW X5 XDrive 3.0D', Km: '82k', Src: "/img/bmw x52017.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2017', fuel: 'DIESEL', pricesRange: '46,00,000', brand: 'BMW', owner: '1st', MakeYear: '2020', IVAl:'Lapse',IType:'-',Rto:'RJ-14',Mileage:'12 kmpl',GClear:'214mm',Bspace:'650li',SCap:'5 unit', FTank:'80 litre', maxP:'282 bhp', AW:'Yes', path1:'/img/audi  a4.jpg',url:'/img/audi  a4.jpg',location:'/img/audi  a4.jpg',way:'/img/audi  a4.jpg' },
  { Name: 'Volvo V90', Km: '74k', Src: "/img/volvo v90black.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2020', fuel: 'DIESEL', pricesRange: '40,00,000', brand: 'VOLVO', owner: '2nd', MakeYear: '2020',IVAl:'10-24',IType:'Third Party',Rto:'RJ-45',Mileage:'18',GClear:'152mm',Bspace:'560li',SCap:'5 unit', FTank:'60 litre', maxP:'390 unit', AW:'Yes', path1:'/img/volvo v901.jpg',url:'/img/volvo v902.jpg',location:'/img/volvo v903.jpg',way:'/img/volvo v904.jpg' },
  { Name: 'Audi A4', Km: '74k', Src: "/img/audi  a4.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2017', fuel: 'DIESEL', pricesRange: '28,50,000', brand: 'AUDI', owner: '1st', MakeYear: '2020',IVAl:'-',IType:'-',Rto:'RJ-06',Mileage:'15',GClear:'150mm',Bspace:'480li',SCap:'5 unit', FTank:'61 litre', maxP:'444 unit', AW:'Yes' },
  { Name: 'Mercedes C Class', Km: '10k', Src: "/img/mercedes c220.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2020', fuel: 'DIESEL', pricesRange: '47,00,000', brand: 'MERCEDES', owner: '1st', MakeYear: '2020',IVAl:'2-24',IType:'third party',Rto:'RJ-45',Mileage:'15',GClear:'132mm',Bspace:'455li',SCap:'5 unit', FTank:'66 litre', maxP:'503 HP', AW:'Yes' },
  { Name: 'Mercedes Benz E250', Km: '59k', Src: "/img/mercedes benz silver e250.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2014', fuel: 'PETROL', pricesRange: '19,50,000', brand: 'MERCEDES', owner: '1st', MakeYear: '2028',IVAl:'9-2024',IType:'third party',Rto:'DL-8C',Mileage:'15',GClear:'121mm',Bspace:'540li',SCap:'5 unit', FTank:'66 litre', maxP:'211 HP', AW:'No' },
  { Name: 'Mercedes Benz E250', Km: '60k', Src: "/img/mercedes benz2015.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2015', fuel: 'DIESEL', pricesRange: '15,00,000', brand: 'MERCEDES', owner: '3rd', MakeYear: '2028',IVAl:'April 2024',IType:'thid party',Rto:'HR-51',Mileage:'15',GClear:'121mm',Bspace:'540li',SCap:'5 unit', FTank:'66 litre', maxP:'211 HP', AW:'No' },
  { Name: 'Skoda Superb 130KW', Km: '80k', Src: "/img/skoda superb 2017.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2017', fuel: 'DIESEL', pricesRange: '17,00,000', brand: 'SKODA', owner: '2nd', MakeYear: '2025',IVAl:'jan 2025',IType:'thid party',Rto:'HR-26',Mileage:'15',GClear:'156mm',Bspace:'625li',SCap:'5 unit', FTank:'66 litre', maxP:'272 HP', AW:'No' },
  { Name: 'Mercedes GLS 4Matic', Km: '161k', Src: "/img/mercedes gls2019.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2019', fuel: 'DIESEL', pricesRange: '59,00,000', brand: 'MERCEDES', owner: '1st', MakeYear: '2022',IVAl:'March 2024',IType:'thid party',Rto:'RJ-14',Mileage:'15',GClear:'222mm',Bspace:'355-470li',SCap:'7 unit', FTank:'90 litre', maxP:'320-500 Hp', AW:'No' },
  { Name: 'Skoda Superb', Km: '64k', Src: "/img/superb brown.png", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2017', fuel: 'DIESEL', pricesRange: '18,50,000', brand: 'SKODA', owner: '2nd', MakeYear: '2020' ,IVAl:'Oct 2024',IType:'thid party',Rto:'RJ-14',Mileage:'15',GClear:'156mm',Bspace:'625li',SCap:'5 unit', FTank:'66 litre', maxP:'272 HP', AW:'Yes'},
  { Name: 'Jaguar XF', Km: '70k', Src: "/img/jaguar red.png", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2018', fuel: 'DIESEL', pricesRange: '39,00,000', brand: 'JAGUAR', owner: '1st', MakeYear: '2020',IVAl:'-',IType:'-',Rto:'HR-31',Mileage:'15',GClear:'135mm',Bspace:'540li',SCap:'5 unit', FTank:'73 litre', maxP:'575 HP', AW:'Yes' },
  { Name: 'Hyundai Elantra', Km: '20k', Src: "/img/elantra 2021.jpg", bodyType: 'SEDAN', Transmission: 'AUTOMATIC', Year: '2021', fuel: 'PETROL', pricesRange: '18,90,000', brand: 'HYUNDAI', owner: '1st', MakeYear: '2021',IVAl:'july 2024',IType:'thid party',Rto:'RJ-45',Mileage:'15',GClear:'147mm',Bspace:'420li',SCap:'5 unit', FTank:'50 litre', maxP:'120-147 unit', AW:'No'},
  { Name: 'Scorpio', Km: '157k', Src: "/img/scorpio.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2015', fuel: 'DIESEL', pricesRange: '9,00,000', brand: 'MAHINDRA', owner: '1st', MakeYear: '2020',IVAl:'6-24',IType:'Third Party',Rto:'RJ-32',Mileage:'15',GClear:'180mm',Bspace:'460li',SCap:'7 unit', FTank:'60 litre', maxP:'120 HP', AW:'Yes' },

]

const SearchResult = () => {
  const navigate = useNavigate();
  const query = window.location.search;
const q=query.slice(3,query.length)
  // const { q } = router.query || { q: 'jaguar'}; // Provide default values

  // Filter cars based on the query parameter and brand filter
  const filteredCars = exoticCars.filter((car) => {
    
    const brand = car.brand || ''; // Default to an empty string if car.brand is undefined
    const query = q || ''; // Default to an empty string if q is undefined
 
    // Return true if the lowercase brand includes the lowercase query
    return brand.toLowerCase().includes(query.toLowerCase());
    // (brand === 'all' || car.brand === brand)
  });
  

  return (
    <div>
        <div>
            <Navbar/>
        </div>
      <Typography variant='h6' className='pl-4'>Search Results for: {q}</Typography>
      {/* <h2>Brand Filter: {brand}</h2> */}
      {filteredCars.length === 0 ? (
        <Typography variant='h6' className='p-3' pl-4>
          No results found for {q}.
        </Typography>
      ) : (
        <div>
          <Typography variant='h6' className='p-3' pl-4>
            Total results: {filteredCars.length}
          </Typography>
          {filteredCars.map((car) => (
           <Box sx={{ display: 'inline-flex' }} key={car.Name}>

           <Box className='shadow-lg'>
             <Card sx={{ Width: 445, margin: 4 }} >
               <CardMedia
                 sx={{ height: 240 }}
                 image={car.Src}
                 title={car.Name}
               />
               <Typography variant='h6' className='p-2 font-bold'><CurrencyRupeeIcon/>{car.pricesRange}</Typography>
               <Typography variant='h5' className='pl-2 ml-2 font'>{car.Name}</Typography>
               <CardContent sx={{ display: 'flex' }}>
                 <div className='justify-center p-1'>
                 <Typography variant='h6'  >Year</Typography>
                 <Typography  variant="h5"   component="div"> </Typography>
                   {car.Year}
                 </div>
                 
                   <Divider orientation="vertical" variant="middle" flexItem />
                   <div className='justify-center p-1'>
                   <Typography variant="h6" >Kms</Typography>
                 <Typography  >
                   {car.Km}
                 </Typography>
                 </div>
                 <Divider orientation="vertical" variant="middle" flexItem />

                <div className='justify-center p-1'>
                <Typography variant="h6" >
                 Fuel
                </Typography>
                 <Typography  component="div">
                   {car.fuel}
                 </Typography>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
               <div className='justify-center p-1'> 
               <Typography variant="h6" >Owner</Typography>
                 <Typography  >
                   {car.owner}
                 </Typography>
               </div>
                
               </CardContent>
             </Card>
             <div className="flex items-center"></div>
           </Box>

         </Box>
          ))}
        </div>
      )}
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default SearchResult;
