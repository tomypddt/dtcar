export const usedCarPost = {
  date: "18 November 2026", isoDate: "2026-11-18",
  source: "https://www.facebook.com/61550266324189/posts/122384855516008877/",
  groups: [
    { name:"Cash only", rows:[
      ["2023 Mercedes-Maybach S680","20,000 km",9100000],
      ["2024 Maserati Grecale GT Hybrid","7,300 km",3800000],
      ["2017 BMW 730Li","61,700 km",1450000],
      ["2023 Cadillac Escalade","30,000 km",6850000],
      ["2026 Toyota Land Cruiser LC300 ZX","10,000+ km",5600000],
      ["2018 Mazda CX-5 2.5 AWD Sport Gas","50,000 km",680000],
      ["2018 Porsche Macan S","27,000 km",2400000],
      ["2024 Mercedes-Benz GLE 300d","11,000 km",3850000],
      ["2019 Bentley Continental GT Speed W12","5,000 km",12000000],
    ]},
    { name:"Cash or financing as listed", rows:[
      ["2026 Toyota Avanza E","10,000+ km",820000],
      ["2018 Mazda CX-5 AWD Gas","50,000+ km",635000],
      ["2016 Audi A6","36,000 km",890000],
      ["2024 Mazda CX-60 Hybrid Diesel Turbo","20,000+ km",1980000],
      ["2019 Hyundai Santa Fe 2.2D Diesel Top","50,000+ km",840000],
      ["2023 Toyota Fortuner G","60,000+ km",1235000],
      ["2024 Ford Territory Titanium X","30,000+ km",835000],
    ]},
  ],
  photos: [
    ["car-01","Original DT Car used-car list from 18 November"],
    ["car-02","Toyota Fortuner from the Quality Car Manila post"],
    ["car-03","Bentley Continental GT from the Quality Car Manila post"],
    ["car-04","Toyota Avanza from the Quality Car Manila post"],
    ["car-05","Porsche Macan S from the Quality Car Manila post"],
    ["car-06","Second Porsche Macan S view from the Quality Car Manila post"],
    ["car-07","Mercedes-Benz GLE 300d from the Quality Car Manila post"],
  ],
} as const;
export const usedPostImage=(key:string)=>"/images/ads/latest-used-cars/"+key+".webp";
export const lisaBuyingImage=(key:string)=>"/images/ads/we-buy-cars/"+key+".webp";
export const lisaBuyingGallery=[
  {key:"sell-great-price",caption:"Lisa · Sell your car",lang:"en",source:"https://www.facebook.com/61596445001029/posts/122104563621548166/"},
  {key:"ready-next-ride",caption:"Lisa · Ready to sell?",lang:"en",source:"https://www.facebook.com/61596445001029/posts/122104564965548166/"},
  {key:"outstanding-loan",caption:"Lisa · We buy pre-owned cars",lang:"en",source:"https://www.facebook.com/61596445001029/posts/122104565751548166/"},
];
