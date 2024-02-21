import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Card, Divider, Link } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {useNavigate } from 'react-router-dom';


const pricesRange = [
  {
    Name: '1 to 2 lac',
    Value: '100000-200000',
    Id: 1,
  },
  {
    Name: '4 to 6 lac',
    Value: '400000-600000',
    Id: 2,
  },
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
    value: '10000-10000000',
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

  { Name: 'BMW X3 XDrive20D', Km: '71k', Src: "/img/BMW 2019 .jpeg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2019', fuel: 'PETROL', pricesRange: '5,500,000', brand: 'BMW' ,owner:'1st',  MakeYear:'2020'},
  {Name:'BMW 7 Series 730LD', Km:'44k' ,Src:"/img/BMW 7 SEREIES SIGNATURE 2020.jpeg",bodyType:'SEDAN',Transmission:'AUTOMATIC',Year:'2020',fuel:'DIESEL',pricesRange:'10,500,000',brand:'BMW',owner:'1st',  MakeYear:'2021'},
  { Name: 'BMW X1 SDrive20I', Km: '71k', Src: "/img/BMW X1 S DRIVE 20I 2022.jpeg", bodyType: 'SUV', Transmission: "AUTOMATIC", Year: '2019', fuel: 'DIESEL', pricesRange: '5,500,000', brand: 'BMW' ,owner:'1st',  MakeYear:'2022'},
  { Name: 'Jaguar XF 2.0L', Km: '70k', Src: "/img/mercedes.jpg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2018', fuel: 'DIESEL', pricesRange: '3,900,000', brand: 'JAGUAR',owner:'1st' ,  MakeYear:'2020'},
  
  { Name: 'MahindraScorpio S11', Km: '182k', Src: "/img/audi.jpg", bodyType: 'SEDAN', Transmission: "MANUAL", Year: '2023', fuel: 'PETROL', pricesRange: '500000', brand: 'MERCEDIES' ,owner:'1st',  MakeYear:'2020'},
  { Name: 'Skoda Laura ', Km: '123k', Src: "/img/BMW.jpg", bodyType: 'SUV', Transmission: "MANUAL", Year: '2018', fuel: 'PETROL', pricesRange: '700000', brand: 'AUDI',owner:'1st' ,  MakeYear:'2025'},
  { Name: 'Volvo S90', Km: '123k', Src: "/img/BMW 2019 .jpeg", bodyType: 'SEDAN', Transmission: "AUTOMATIC", Year: '2020', fuel: 'DIESEL', pricesRange: '1500000', brand: 'MAHINDRA',owner:'1st',  MakeYear:'2030'},
  { Name: 'Mahindra Thar 4*4', Km: '123k', Src: "/img/BMW.jpg", bodyType: 'HATCHBACK', Transmission: "MANUAL", Year: '2020', fuel: 'DIESEL', pricesRange: '5000000', brand: 'FORD',owner:'1st', MakeYear:'2020' },

]

const Demo = () => {
 
  
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedKMS, setSelectedKMS] = useState('all');
  const [selectedFUEL, setSelectedFUEL] = useState('all');
  const [selectedBodyType, setSelectedBodyType] = useState('all');
  const [selectedTransmission, setSelectedTransmission] = useState('all');
  
  const navigate = useNavigate();

  const handleClick = () => {
   
    navigate('/cardetail');
  }
  const pricesRangeHandler = (e) => {
    setSelectedPriceRange(e.target.value);
  };

  const brandHandler = (e) => {
    setSelectedBrand(e.target.value);
  };

  const KMSHandler = (e) => {
    setSelectedKMS(e.target.value);

  };

  const FUELHandler = (e) => {
    setSelectedFUEL(e.target.value);
  };

  const BodyTypeHandler = (e) => {
    setSelectedBodyType(e.target.value);
  };

  const TransmissionHandler = (e) => {
    setSelectedTransmission(e.target.value);
  };

  const filteredCars = exoticCars.filter((car) => {
    const isPriceInRange =
      selectedPriceRange === 'all' ||
      (selectedPriceRange !== 'all' &&
        car.pricesRange >= Number(selectedPriceRange.split('-')[0]) &&
        car.pricesRange <= Number(selectedPriceRange.split('-')[1]));

    const isBrandMatching = selectedBrand === 'all' || car.brand === selectedBrand;

    const isKMSInRange =
      selectedKMS === 'all' ||
      (selectedKMS !== 'all' &&
        car.Km >= Number(selectedKMS.split('-')[0]) &&
        car.Km <= Number(selectedKMS.split('-')[1]));

    const isFUELExist =
      selectedFUEL === 'all' || car.fuel === selectedFUEL;

    const isBodyTypeHave = selectedBodyType === 'all' || car.bodyType === selectedBodyType;

    const isTransmissionMatching = selectedTransmission === 'all' || car.Transmission === selectedTransmission;

    return isPriceInRange && isBrandMatching && isKMSInRange && isFUELExist && isBodyTypeHave && isTransmissionMatching;
  });

  return (
    <div >
      <>
        <ul className='flex flex-col m-4 flex-wrap space-x-2 font-bold   lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8"  '>
                <li>Explore by:-</li>
          <li key="1">Price Range           <select
            //   className='w-'
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
          <li key="2">Brand
            <select
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

          <li key='3'>
            KMS
            <select value={selectedKMS} onChange={KMSHandler}>
              <option value='all'>All</option>
              {KMS &&
                KMS.map((KMS) => (
                  <option key={KMS.value} value={KMS.value}>
                    {KMS.name}
                  </option>
                ))}
            </select>
          </li>
          <li key="5">Fuel
            <select
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
          <li key="6">BodyType
            <select
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
          <li key="7">Transmission
            <select
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
                <Card sx={{ Width: 445, margin: 2 }} 
                onClick={ handleClick}
                 >
                  <CardMedia
                    sx={{ height: 240 }}
                    image={car.Src}
                    title={car.Name}
                  />
                  <Typography variant='h6' className='p-2 font-bold'><CurrencyRupeeIcon/>{car.pricesRange}</Typography>
                  <Typography variant='h5' className='pl-2 ml-2 font'>{car.Name}</Typography>
                  <CardContent sx={{ display: 'flex' }}>
                    <div className='justify-center p-1'>
                    <Typography variant='h6'  >Reg.Year</Typography>
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
      </>
    </div>
  );
}

export default Demo;
