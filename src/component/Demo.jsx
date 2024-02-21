import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Card, Divider, Link } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom';
// import Badge from './ColorBadge';
import ColorBadge from './ColorBadge';


const pricesRange = [
 
  
  {
    Name: '6 to 8lac',
    Value: '600000-800000',
    Id: 3,
  },
  {
    Name: '8 to 10lac',
    Value: '800000-1000000',
    Id: 4,
  },
  {
    Name: '10 to 15lac',
    Value: '1000000-1500000',
    Id: 5,
  },
  {
    Name: '15 to 20lac',
    Value: '1500000-2000000',
    Id: 6,
  },
  {
    Name: '20lac above',
    Value: '2000000-3000000',
    Id: 7,
  },
  {
    Name: '30lac above',
    Value: '3000000-4000000',
    Id: 7,
  },
  {
    Name: '40lac above',
    Value: '4000000-10000000',
    Id: 7,
  },
];

const Brand = [
  {
    name: 'BMW',
    Id: 1,
    value: 'BMW',
  },
  {
    name: 'JAGUAR',
    Id: 2,
    value: 'JAGUAR',
  },
  {
    name: 'MAHINDRA',
    Id: 3,
    value: 'MAHINDRA',
  },
  {
    name: 'TATA',
    Id: 4,
    value: 'TATA',
  },
  {
    name: 'VOLVO',
    Id: 5,
    value: 'VOLVO',
  },
  {
    name: 'SKODA',
    Id: 6,
    value: 'SKODA',
  },
  {
    name: 'AUDI',
    Id: 7,
    value: 'AUDI',
  },
  {
    name: 'MERCEDES',
    Id: 8,
    value: 'MERCEDES',
  },
  {
    name: 'HONDA',
    Id: 9,
    value: 'HONDA',
  },
  {
    name: 'KIA',
    Id: 10,
    value: 'KIA',
  },
  {
    name: 'HYUNDAI',
    Id: 11,
    value: 'HYUNDAI',
  },
  {
    name: 'TOYOTA',
    Id: 12,
    value: 'TOYOTA',
  },
  {
    name: 'FORD',
    Id: 13,
    value: 'FORD',
  },
  {
    name: 'VOLKSWAGEN',
    Id: 14,
    value: 'VOLKSWAGEN',
  },
];
const maxKm=200000;
const KMS = [
  {
    name: '0 to 1000KM',
    value: '0-1000',
  },
  {
    name: '1K to 5K KM',
    value: '1000-5000',
  },
  {
    name: '5K to 10K KM',
    value: '5000-10000',
  },
  {
    name: 'ABOVE 10K KM',
    value: '10000-maxkm',
  },
  {
    name: 'ABOVE 15K KMS',
    value: '15000-10000000',
  },
  {
    name: 'ABOVE 20K KMS',
    value: '20000 -10000000',
  },
  {
    name: 'ABOVE 40K KM',
    value: '40000-10000000',
  },
  {
    name: 'ABOVE 60K KM',
    value: '60000-10000000',
  },
  {
    name: 'ABOVE 80K KM',
    value: '80000-10000000',
  },
];
const FUEL = [
  {
    name: 'DIESEL',
  },
  {
    name: 'PETROL',
  }

]
const BodyType = [
  {
    name: 'SUV',
  },
  {
    name: 'SEDAN',
  },
  {
    name: 'SPORTS',
  },
  {
    name: 'HATCHBACK',
  },
]
const Transmission = [
  {
    Name: 'MANUAL',
    ID: 1,
  },
  {
    Name: 'AUTOMATIC',
    ID: 2,
  },
]
const exoticCars = [

  { Name: 'RangeRover Evoque', Km: '82k', Src: "/img/rangeRover Evoke.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2016', fuel: 'DIESEL', pricesRange: '32,00,000', brand: 'RANGEROVER', owner: '2nd', MakeYear: '2028',IVAl:'Lapse',IType:'-',Rto:'RJ-14',Mileage:'14',GClear:'121mm',Bspace:'575li',SCap:'5 unit', FTank:'65 litre', maxP:'280 HP', AW:'No', path1:'/img/RangeRover evoque1.jpg',url:'/img/RangeRover Evoque2.jpg',location:'/img/RangeRover evoqe3.jpg',way:'/img/RangeRover evoqu4.jpg'  },
  { Name: 'BMW 7Series', Km: '43k', Src: "/img/BMW 730sign.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2020', fuel: 'DIESEL', pricesRange: '105,00,000', brand: 'BMW', owner: '1st', MakeYear: '2028',IVAl:'Lapse',IType:'-',Rto:'HP-38',Mileage:'10',GClear:'140mm',Bspace:'570li',SCap:'5 unit', FTank:'68 litre', maxP:'211 HP', AW:'No', path1:'/img/Bmw 7series1.jpg',url:'/img/Bmw 7series2.jpg',location:'/img/Bmw 7series3.jpg',way:'/img/Bmw 7series4.jpg'  },
  { Name: 'Mercedes GLC 43', Km: '24k', Src: "/img/mercedes glc43.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2022', fuel: 'PETROL', pricesRange: '90,00,000', brand: 'MERCEDES', owner: '1st', MakeYear: '2028',IVAl:'Lapse',IType:'-',Rto:'-',Mileage:'8',GClear:'142mm',Bspace:'550li',SCap:'5 unit', FTank:'74 litre', maxP:'385 HP', AW:'No', path1:'/img/mercedes glc431.jpg',url:'/img/mercedes glc432.jpg',location:'/img/mercedes glc433.jpg',way:'/img/mercedes glc43.jpg' },
  { Name: 'BMW X1 SDrive', Km: '10k', Src: "/img/BMW X1.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2022', fuel: 'PETROL', pricesRange: '42,00,000', brand: 'BMW', owner: '1st', MakeYear: '2028',IVAl:'11-2025',IType:'Third Party',Rto:'RJ-45',Mileage:'12',GClear:'185mm',Bspace:'510li',SCap:'5 unit', FTank:'61 litre', maxP:'228 HP', AW:'No', path1:'/img/Bmw x11.jpg',url:'/img/Bmw x12.jpg',location:'/img/Bmw x13.jpg',way:'/img/Bmw x14.jpg'  },
  { Name: 'BMW X3 SDrive', Km: '1k', Src: "/img/BMW X3.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2023', fuel: 'PETROL', pricesRange: '89,00,000', brand: 'BMW', owner: '1st', MakeYear: '2028',IVAl:'7-2026',IType:'Third Party',Rto:'RJ-45',Mileage:'10',GClear:'185mm',Bspace:'575li',SCap:'5 unit', FTank:'65 litre', maxP:'286 HP', AW:'No', path1:'/img/Bmw x31.jpg',url:'/img/Bmw x32.jpg',location:'/img/Bmw x33.jpg',way:'/img/Bmw x34.jpg' },
  { Name: 'BMW 3Series', Km: '20k', Src: "/img/BMW 320 LD.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2020', fuel: 'DIESEL', pricesRange: '55,00,000', brand: 'BMW', owner: '1st', MakeYear: '2028',IVAl:'2-25',IType:'Third Party',Rto:'RJ-20',Mileage:'12',GClear:'121mm',Bspace:'540li',SCap:'5 unit', FTank:'68 litre', maxP:'255 HP', AW:'No', path1:'/img/Bmw 3series1.jpg',url:'/img/bmw 3series2.jpg',location:'/img/bmw 3series3.jpg',way:'/img/bmw 3series4.jpg' },
  { Name: 'BMW X5 XDrive 3.0D', Km: '82k', Src: "/img/bmw x52017.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2017', fuel: 'DIESEL', pricesRange: '46,00,000', brand: 'BMW', owner: '1st', MakeYear: '2020', IVAl:'Lapse',IType:'-',Rto:'RJ-14',Mileage:'12 kmpl',GClear:'214mm',Bspace:'650li',SCap:'5 unit', FTank:'80 litre', maxP:'282 bhp', AW:'Yes', path1:'/img/audi  a4.jpg',url:'/img/audi  a4.jpg',location:'/img/audi  a4.jpg',way:'/img/audi  a4.jpg' },
  { Name: 'Volvo V90', Km: '74k', Src: "/img/volvo v90black.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2020', fuel: 'DIESEL', pricesRange: '40,00,000', brand: 'VOLVO', owner: '2nd', MakeYear: '2020',IVAl:'10-24',IType:'Third Party',Rto:'RJ-45',Mileage:'18',GClear:'152mm',Bspace:'560li',SCap:'5 unit', FTank:'60 litre', maxP:'390 unit', AW:'Yes', path1:'/img/volvo v901.jpg',url:'/img/volvo v902.jpg',location:'/img/volvo v903.jpg',way:'/img/volvo v904.jpg' },
  { Name: 'Audi A4', Km: '74k', Src: "/img/audi  a4.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2017', fuel: 'DIESEL', pricesRange: '28,50,000', brand: 'AUDI', owner: '1st', MakeYear: '2020',IVAl:'-',IType:'-',Rto:'RJ-06',Mileage:'15',GClear:'150mm',Bspace:'480li',SCap:'5 unit', FTank:'61 litre', maxP:'444 unit', AW:'Yes', path1:'/img/audi  a41.jpg',url:'/img/audi  a42.jpg',location:'/img/audi  a43.jpg',way:'/img/audi  a44.jpg'   },
  { Name: 'Mercedes C Class', Km: '10k', Src: "/img/mercedes c220.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2020', fuel: 'DIESEL', pricesRange: '47,00,000', brand: 'MERCEDES', owner: '1st', MakeYear: '2020',IVAl:'2-24',IType:'third party',Rto:'RJ-45',Mileage:'15',GClear:'132mm',Bspace:'455li',SCap:'5 unit', FTank:'66 litre', maxP:'503 HP', AW:'Yes', path1:'/img/mercedes c221.jpg',url:'/img/mercedes c222.jpg',location:'/img/mercedes c223.jpg',way:'/img/mercedes c224.jpg'  },
  { Name: 'Mercedes Benz E250', Km: '59k', Src: "/img/mercedes benz silver e250.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2014', fuel: 'PETROL', pricesRange: '19,50,000', brand: 'MERCEDES', owner: '1st', MakeYear: '2028',IVAl:'9-2024',IType:'third party',Rto:'DL-8C',Mileage:'15',GClear:'121mm',Bspace:'540li',SCap:'5 unit', FTank:'66 litre', maxP:'211 HP', AW:'No', path1:'/img/mercedes benz silver e251.jpg',url:'/img/mercedes benz silver e252.jpg',location:'/img/mercedes benz silver e253.jpg',way:'/img/mercedes benz silver e254.jpg'  },
  { Name: 'Mercedes Benz E250', Km: '60k', Src: "/img/mercedes benz2015.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2015', fuel: 'DIESEL', pricesRange: '15,00,000', brand: 'MERCEDES', owner: '3rd', MakeYear: '2028',IVAl:'April 2024',IType:'thid party',Rto:'HR-51',Mileage:'15',GClear:'121mm',Bspace:'540li',SCap:'5 unit', FTank:'66 litre', maxP:'211 HP', AW:'No' },
  { Name: 'Skoda Superb 130KW', Km: '80k', Src: "/img/skoda superb 2017.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2017', fuel: 'DIESEL', pricesRange: '17,00,000', brand: 'SKODA', owner: '2nd', MakeYear: '2025',IVAl:'jan 2025',IType:'thid party',Rto:'HR-26',Mileage:'15',GClear:'156mm',Bspace:'625li',SCap:'5 unit', FTank:'66 litre', maxP:'272 HP', AW:'No' },
  { Name: 'Hyundai Elantra', Km: '20k', Src: "/img/elantra 2021.jpg", bodyType: 'SEDAN', Transmission: 'AUTOMATIC', Year: '2021', fuel: 'PETROL', pricesRange: '18,90,000', brand: 'HYUNDAI', owner: '1st', MakeYear: '2021',IVAl:'july 2024',IType:'thid party',Rto:'RJ-45',Mileage:'15',GClear:'147mm',Bspace:'420li',SCap:'5 unit', FTank:'50 litre', maxP:'120-147 unit', AW:'No', path1:'/img/elantra 20211.jpg',url:'/img/elantra 20212.jpg',location:'/img/elantra 20213.jpg',way:'/img/elantra 20214.jpg' },
  { Name: 'Scorpio', Km: '157k', Src: "/img/scorpio.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2015', fuel: 'DIESEL', pricesRange: '9,00,000', brand: 'MAHINDRA', owner: '1st', MakeYear: '2020',IVAl:'6-24',IType:'Third Party',Rto:'RJ-32',Mileage:'15',GClear:'180mm',Bspace:'460li',SCap:'7 unit', FTank:'60 litre', maxP:'120 HP', AW:'Yes', path1:'/img/scorpio 1.jpg',url:'/img/scorpio 2.jpg',location:'/img/scorpio 3.jpg',way:'/img/scorpio 4.jpg' },
  { Name: 'Mercedes GLS 4Matic', Km: '161k', Src: "/img/mercedes gls2019.jpg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2019', fuel: 'DIESEL', pricesRange: '59,00,000', brand: 'MERCEDES', owner: '1st', MakeYear: '2022',IVAl:'March 2024',IType:'thid party',Rto:'RJ-14',Mileage:'15',GClear:'222mm',Bspace:'355-470li',SCap:'7 unit', FTank:'90 litre', maxP:'320-500 Hp', AW:'No' },
  { Name: 'Skoda Superb', Km: '64k', Src: "/img/superb brown.png", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2017', fuel: 'DIESEL', pricesRange: '18,50,000', brand: 'SKODA', owner: '2nd', MakeYear: '2020' ,IVAl:'Oct 2024',IType:'thid party',Rto:'RJ-14',Mileage:'15',GClear:'156mm',Bspace:'625li',SCap:'5 unit', FTank:'66 litre', maxP:'272 HP', AW:'Yes'},
  { Name: 'Jaguar XF', Km: '70k', Src: "/img/jaguar red.png", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2018', fuel: 'DIESEL', pricesRange: '39,00,000', brand: 'JAGUAR', owner: '1st', MakeYear: '2020',IVAl:'-',IType:'-',Rto:'HR-31',Mileage:'15',GClear:'135mm',Bspace:'540li',SCap:'5 unit', FTank:'73 litre', maxP:'575 HP', AW:'Yes' },
  

]

const Demo = () => {


  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  // const [selectedKMS, setSelectedKMS] = useState('all');
  const [selectedFUEL, setSelectedFUEL] = useState('all');
  const [selectedBodyType, setSelectedBodyType] = useState('all');
  const [selectedTransmission, setSelectedTransmission] = useState('all');

  const navigate = useNavigate();

  const handleClick = (car, event) => {
    // console.log('Clicked car details:', car);
    event.preventDefault();
    const carDetails = {
      makeYear: car.Year,
      km: car.Km,
      Owner:car.owner,
      Fuel:car.fuel,
      trans:car.Transmission,
      //,:'328li',SCap:'5 unit', FTank:'42 litre', maxP:'74 unit', AW:'Yes'
      ival:car.IVAl,
      itype:car.IType,
      rto:car.Rto,
      mile:car.Mileage,
      gclear:car.GClear,
      bspace:car.Bspace,
      sCap:car.SCap,
      fTank:car.FTank,
      MaxP:car. maxP,
      aw:car. AW,
      Path1:car.path1,
      Url:car.url,
      Location:car.location,
      Way:car.way
    };
    navigate('/cardetail', { state: { car: carDetails } });
  }
  const pricesRangeHandler = (e) => {
    setSelectedPriceRange(e.target.value);
  };

  const brandHandler = (e) => {
    setSelectedBrand(e.target.value);
  };

  // const KMSHandler = (e) => {
  //   setSelectedKMS(e.target.value);

  // };

  const FUELHandler = (e) => {
    setSelectedFUEL(e.target.value);
  };

  const BodyTypeHandler = (e) => {
    setSelectedBodyType(e.target.value);
  };

  const TransmissionHandler = (e) => {
    setSelectedTransmission(e.target.value);
  };
  const parsePrice = (price) => {
    // Convert the price string to a number
    const parsedPrice = price.replace(/,/g, ''); // Remove commas from the string
    return parseInt(parsedPrice, 10);
  };
  const filteredCars = exoticCars.filter((car) => {
    const isPriceInRange =
      selectedPriceRange === 'all' ||
      (selectedPriceRange !== 'all' &&
        parsePrice(car.pricesRange) >= parsePrice(selectedPriceRange.split('-')[0]) &&
        parsePrice(car.pricesRange) <= parsePrice(selectedPriceRange.split('-')[1]));

    const isBrandMatching = selectedBrand === 'all' || car.brand === selectedBrand;

    // const isKMSInRange =
    //   selectedKMS === 'all' ||
    //   (selectedKMS !== 'all' &&
    //     car.Km >= Number(selectedKMS.split('-')[0]) &&
    //     car.Km <= Number(selectedKMS.split('-')[1]));

    const isFUELExist =
      selectedFUEL === 'all' || car.fuel === selectedFUEL;

    const isBodyTypeHave = selectedBodyType === 'all' || car.bodyType === selectedBodyType;

    const isTransmissionMatching = selectedTransmission === 'all' || car.Transmission === selectedTransmission;

    return isPriceInRange && isBrandMatching 
    // && isKMSInRange 
    && isFUELExist && isBodyTypeHave && isTransmissionMatching;
  });

 

  return (
    <div >
      <>
        <ul className='flex flex-col m-4 flex-wrap space-x-2 font-bold   lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8"  '>
          <li>Explore by:-</li>
      
          <li key="2">Brand
            <select
            className='bg-gray-50 sm:w-28 md:w-28 lg:w-28'
              value={selectedBrand}
              onChange={brandHandler}
            >
              <option value='all'>All</option>
              {Brand &&
                Brand.map((brand) => (
                  <option key={brand.Id} value={brand.value}>
                    {brand.name}
                  </option>
                ))}
            </select>
          </li>

          {/* <li key='3'>
            Kms-
            <select  className='bg-gray-50 sm:w-28 md:w-28 lg:w-28'
            value={selectedKMS} onChange={KMSHandler}>
              <option value='all'>All</option>
              {KMS &&
                KMS.map((KMS) => (
                  <option key={KMS.value} value={KMS.value}>
                    {KMS.name}
                  </option>
                ))}
            </select>
          </li> */}
          <li key="5">Fuel-
            <select  className='bg-gray-50 sm:w-28 md:w-28 lg:w-28'
              value={selectedFUEL}
              onChange={FUELHandler}
            >
              <option value='all'>All</option>
              {FUEL &&
                FUEL.map((FUEL) => {
                  return (
                    <option key={FUEL.name} value={FUEL.name}>
                      {FUEL.name}
                    </option>)
                })}
            </select>
          </li>   
           <li key="1">Price<select
             className='bg-gray-50 sm:w-28 md:w-28 lg:w-28'
            value={selectedPriceRange}
            onChange={pricesRangeHandler}
          >
            <option value='all'>All</option>
            {pricesRange &&
              pricesRange.map((range) => (
                <option key={range.Id} value={range.Value}>
                  {range.Name}
                </option>
              ))}
          </select>
          </li>
          <li key="6">Body-
            <select  className='bg-gray-50 sm:w-28 md:w-28 lg:w-28'
              value={selectedBodyType}
              onChange={BodyTypeHandler}
            >
              <option value='all'>All</option>
              {BodyType &&
                BodyType.map((BodyType) => {
                  return (
                    <option
                      key={BodyType.name}
                      value={BodyType.name}
                    >
                      {BodyType.name}
                    </option>)
                })}
            </select>
          </li>
          <li key="7">Trans.
            <select  className='bg-gray-50 sm:w-28 md:w-28 lg:w-28'
              value={selectedTransmission}
              onChange={TransmissionHandler}
            >
              <option value='all'>All</option>
              {Transmission &&
                Transmission.map((transmission) => (
                  <option key={transmission.ID} value={transmission.Name}>
                    {transmission.Name}
                  </option>
                ))}
            </select>
          </li>
        </ul>
        <div >
          <Typography variant='h6' className='p-3' pl-4>
            Total results: {filteredCars.length}
          </Typography>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {/* Responsive card grid */}
          {filteredCars.map((car) => (
            <Box sx={{ display: 'inline-flex' }} key={car.Name}>

              <Box className='shadow-lg'>
                <Card sx={{ Width: 445, margin: 4 }}
                  onClick={(e) => handleClick(car, e)}
                >
                  {/* if(sold==true){ */}
                 
                <ColorBadge />

                  {/* } */}
                  {/* else{

                  } */}
                  <CardMedia
                    sx={{ height: 240 }}
                    image={car.Src}
                    title={car.Name}
                  />
                  <Typography variant='h6' className='p-2 font-bold'><CurrencyRupeeIcon />{car.pricesRange}</Typography>
                  <Typography variant='h5' className='pl-2 ml-2 font'>{car.Name}</Typography>
                  <CardContent sx={{ display: 'flex' }}>
                    <div className='justify-center p-1'>
                      <Typography variant='h6'  >Year</Typography>
                      <Typography variant="h5" component="div"> </Typography>
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
                      <Typography component="div">
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
      </>
    </div>
  );
}

export default Demo;
