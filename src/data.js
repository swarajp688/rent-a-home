const properties = [
  {
    id: "1301-4th-Ave,-Seattle,-WA-98101",
    formattedAddress: "1301 4th Ave, Seattle, WA 98101",
    longitude: -122.335381,
    latitude: 47.608256,
    city: "Seattle",
    state: "WA",
    zipcode: "98101",
    price: 3340,
    publishedDate: "2022-05-19T01:59:45.047Z",
    distance: 0.03145919014489515,
    daysOld: 72.59,
    correlation: 0.997,
    address: "1301 4th Ave",
    county: "King County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Apartment",
    squareFootage: 594,
    movieIndate: "2022-08-05",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Springfield",
  },
  {
    id: "1340-4th-Ave,-Unit-5502,-Seattle,-WA-98101",
    formattedAddress: "1340 4th Ave, Unit 5502, Seattle, WA 98101",
    longitude: -122.334364,
    latitude: 47.608595,
    city: "Seattle",
    state: "WA",
    zipcode: "98101",
    price: 15000,
    publishedDate: "2022-07-28T03:07:31.161Z",
    distance: 0.08848378372356296,
    daysOld: 2.54,
    correlation: 0.994,
    address: "1340 4th Ave, Unit 5502",
    county: "King County",
    bedrooms: 2,
    bathrooms: 2,
    squareFootage: 1826,
    movieIndate: "2022-08-05",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
    propertyType: "Apartment",
  },
  {
    id: "1340-4th-Ave,-Unit-5608,-Seattle,-WA-98101",
    formattedAddress: "1340 4th Ave, Unit 5608, Seattle, WA 98101",
    longitude: -122.334364,
    latitude: 47.608594,
    city: "Seattle",
    state: "WA",
    zipcode: "98101",
    price: 15500,
    publishedDate: "2022-06-02T02:28:02.385Z",
    distance: 0.08840230929627294,
    daysOld: 58.57,
    correlation: 0.9933,
    address: "1340 4th Ave, Unit 5608",
    county: "King County",
    bedrooms: 3,
    bathrooms: 3,
    squareFootage: 2058,
    movieIndate: "2022-07-30",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
    propertyType: "Apartment",
  },
  {
    id: "1340-4th-Ave,-Unit-3903,-Seattle,-WA-98101",
    formattedAddress: "1340 4th Ave, Unit 3903, Seattle, WA 98101",
    longitude: -122.334364,
    latitude: 47.608595,
    city: "Seattle",
    state: "WA",
    zipcode: "98101",
    price: 9950,
    publishedDate: "2022-06-02T03:01:22.633Z",
    distance: 0.08848378372356296,
    daysOld: 58.55,
    correlation: 0.9933,
    address: "1340 4th Ave, Unit 3903",
    county: "King County",
    bedrooms: 2,
    bathrooms: 2,
    squareFootage: 2223,
    movieIndate: "2022-08-03",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
    propertyType: "Apartment",
  },
  {
    id: "1340-4th-Ave,-Unit-3902,-Seattle,-WA-98101",
    formattedAddress: "1340 4th Ave, Unit 3902, Seattle, WA 98101",
    longitude: -122.334364,
    latitude: 47.608595,
    city: "Seattle",
    state: "WA",
    zipcode: "98101",
    price: 5750,
    publishedDate: "2022-06-02T03:01:22.633Z",
    distance: 0.08848378372356296,
    daysOld: 58.55,
    correlation: 0.9933,
    address: "1340 4th Ave, Unit 3902",
    county: "King County",
    bedrooms: 1,
    bathrooms: 1.5,
    squareFootage: 1632,
    movieIndate: "2022-07-30",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
    propertyType: "Apartment",
  },
  {
    id: "10-N-Michigan-Ave,---1002,-Chicago,-IL-60602",
    formattedAddress: "10 N Michigan Ave, # 1002, Chicago, IL 60602",
    longitude: -87.6247835,
    latitude: 41.8824111,
    city: "Chicago",
    state: "IL",
    zipcode: "60602",
    price: 2300,
    publishedDate: "2022-06-21T03:50:38.149Z",
    distance: 0.14793027109507279,
    daysOld: 39.51,
    correlation: 0.9895,
    address: "10 N Michigan Ave, # 1002",
    county: "Cook County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Condo",
    movieIndate: "2022-07-30",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
    squareFootage: 850,
  },
  {
    id: "6-N-Michigan-Ave,-Unit-606,-Chicago,-IL-60602",
    formattedAddress: "6 N Michigan Ave, Unit 606, Chicago, IL 60602",
    longitude: -87.624985,
    latitude: 41.882372,
    city: "Chicago",
    state: "IL",
    zipcode: "60602",
    price: 2350,
    publishedDate: "2022-07-08T03:57:09.105Z",
    distance: 0.1614531902574751,
    daysOld: 22.51,
    correlation: 0.9888,
    address: "6 N Michigan Ave, Unit 606",
    county: "Cook County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Condo",
    squareFootage: 900,
    movieIndate: "2022-08-05",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
  },
  {
    id: "6-N-Michigan-Ave,-Unit-1006,-Chicago,-IL-60602",
    formattedAddress: "6 N Michigan Ave, Unit 1006, Chicago, IL 60602",
    longitude: -87.624985,
    latitude: 41.882372,
    city: "Chicago",
    state: "IL",
    zipcode: "60602",
    price: 2300,
    publishedDate: "2022-06-02T03:53:14.787Z",
    distance: 0.1614531902574751,
    daysOld: 58.51,
    correlation: 0.9884,
    address: "6 N Michigan Ave, Unit 1006",
    county: "Cook County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Apartment",
    squareFootage: 900,
    movieIndate: "2022-08-05",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
  },
  {
    id: "6-N-Michigan-Ave,-Unit-909,-Chicago,-IL-60602",
    formattedAddress: "6 N Michigan Ave, Unit 909, Chicago, IL 60602",
    longitude: -87.624985,
    latitude: 41.882372,
    city: "Chicago",
    state: "IL",
    zipcode: "60602",
    price: 1799,
    publishedDate: "2022-05-27T03:42:30.177Z",
    distance: 0.1614531902574751,
    daysOld: 64.52,
    correlation: 0.9883,
    address: "6 N Michigan Ave, Unit 909",
    county: "Cook County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Apartment",
    squareFootage: 900,
    movieIndate: "2022-08-03",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
  },
  {
    id: "6-N-Michigan-Ave,-Unit-805,-Chicago,-IL-60602",
    formattedAddress: "6 N Michigan Ave, Unit 805, Chicago, IL 60602",
    longitude: -87.624985,
    latitude: 41.882372,
    city: "Chicago",
    state: "IL",
    zipcode: "60602",
    price: 2200,
    publishedDate: "2022-05-24T03:48:20.410Z",
    distance: 0.1614531902574751,
    daysOld: 67.52,
    correlation: 0.9883,
    address: "6 N Michigan Ave, Unit 805",
    county: "Cook County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Condo",
    squareFootage: 891,
    movieIndate: "2022-08-03",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Faulkner Ave",
  },
  {
    id: "36-21-Review-Ave,-Unit-2R,-New-York,-NY-11101",
    formattedAddress: "36-21 Review Ave, Unit 2R, New York, NY 11101",
    longitude: -73.93732,
    latitude: 40.734014,
    city: "New York",
    state: "NY",
    zipcode: "11101",
    price: 2250,
    publishedDate: "2022-04-29T03:28:17.607Z",
    distance: 0.41750804833635596,
    daysOld: 92.53,
    correlation: 0.9707,
    address: "36-21 Review Ave, Unit 2R",
    county: "Queens County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Apartment",
    movieIndate: "2022-08-02",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
    squareFootage: 850,
  },
  {
    id: "36-21-Review-Ave,-Unit-2R,-New-York-City,-NY-11101",
    formattedAddress: "36-21 Review Ave, Unit 2R, New York City, NY 11101",
    longitude: -73.93732,
    latitude: 40.734014,
    city: "New York City",
    state: "NY",
    zipcode: "11101",
    price: 2300,
    publishedDate: "2022-04-02T03:02:36.319Z",
    distance: 0.41750804833635596,
    daysOld: 119.55,
    correlation: 0.9704,
    address: "36-21 Review Ave, Unit 2R",
    county: "Queens County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Condo",
    movieIndate: "2022-08-04",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
    squareFootage: 850,
  },
  {
    id: "36-21-Review-Ave,-Unit-3L,-New-York-City,-NY-11101",
    formattedAddress: "36-21 Review Ave, Unit 3L, New York City, NY 11101",
    longitude: -73.93732,
    latitude: 40.734014,
    city: "New York City",
    state: "NY",
    zipcode: "11101",
    price: 2030,
    publishedDate: "2021-12-01T03:03:30.507Z",
    distance: 0.41750804833635596,
    daysOld: 241.55,
    correlation: 0.969,
    address: "36-21 Review Ave, Unit 3L",
    county: "Queens County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Apartment",
    squareFootage: 625,
    movieIndate: "2022-07-30",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
  },
  {
    id: "36-21-Review-Ave,-Unit-3L,-Queens,-NY-11101",
    formattedAddress: "36-21 Review Ave, Unit 3L, Queens, NY 11101",
    longitude: -73.93732,
    latitude: 40.734014,
    city: "Queens",
    state: "NY",
    zipcode: "11101",
    price: 2030,
    publishedDate: "2021-11-02T03:14:32.831Z",
    distance: 0.41750804833635596,
    daysOld: 270.54,
    correlation: 0.9687,
    address: "36-21 Review Ave, Unit 3L",
    county: "Queens County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Apartment",
    squareFootage: 625,
    movieIndate: "2022-08-04",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Faulkner Ave",
  },
  {
    id: "36-21-Review-Ave,-Unit-3R,-Queens,-NY-11101",
    formattedAddress: "36-21 Review Ave, Unit 3R, Queens, NY 11101",
    longitude: -73.93732,
    latitude: 40.734014,
    city: "Queens",
    state: "NY",
    zipcode: "11101",
    price: 2077,
    publishedDate: "2021-09-17T03:01:10.924Z",
    distance: 0.41750804833635596,
    daysOld: 316.55,
    correlation: 0.9681,
    address: "36-21 Review Ave, Unit 3R",
    county: "Queens County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Apartment",
    squareFootage: 625,
    movieIndate: "2022-07-30",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
  },
  {
    id: "555-N-Spring-St,-Unit-A516,-Los-Angeles,-CA-90012",
    formattedAddress: "555 N Spring St, Unit A516, Los Angeles, CA 90012",
    longitude: -118.244445,
    latitude: 34.053054,
    city: "Los Angeles",
    state: "CA",
    zipcode: "90012",
    price: 2129,
    publishedDate: "2022-05-20T03:50:31.779Z",
    distance: 0.11511384248851027,
    daysOld: 71.52,
    correlation: 0.9914,
    address: "555 N Spring St, Unit A516",
    county: "Los Angeles County",
    bathrooms: 1,
    propertyType: "Apartment",
    squareFootage: 495,
    movieIndate: "2022-08-03",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
    bedrooms: 1,
  },
  {
    id: "108-W-2nd-St,-Apt-907,-Los-Angeles,-CA-90012",
    formattedAddress: "108 W 2nd St, Apt 907, Los Angeles, CA 90012",
    longitude: -118.245015,
    latitude: 34.051007,
    city: "Los Angeles",
    state: "CA",
    zipcode: "90012",
    price: 3300,
    publishedDate: "2022-07-09T03:45:18.738Z",
    distance: 0.18379180796362038,
    daysOld: 21.52,
    correlation: 0.9873,
    address: "108 W 2nd St, Apt 907",
    county: "Los Angeles County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Condo",
    squareFootage: 1250,
    movieIndate: "2022-08-02",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
  },
  {
    id: "108-W-2nd-St,-Apt-608,-Los-Angeles,-CA-90012",
    formattedAddress: "108 W 2nd St, Apt 608, Los Angeles, CA 90012",
    longitude: -118.245015,
    latitude: 34.051007,
    city: "Los Angeles",
    state: "CA",
    zipcode: "90012",
    price: 3000,
    publishedDate: "2022-06-18T03:41:31.510Z",
    distance: 0.18379180796362038,
    daysOld: 42.52,
    correlation: 0.9871,
    address: "108 W 2nd St, Apt 608",
    county: "Los Angeles County",
    bathrooms: 1,
    propertyType: "Condo",
    squareFootage: 910,
    movieIndate: "2022-08-03",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
    bedrooms: 1,
  },
  {
    id: "108-W-2nd-St,-Apt-311,-Los-Angeles,-CA-90012",
    formattedAddress: "108 W 2nd St, Apt 311, Los Angeles, CA 90012",
    longitude: -118.245015,
    latitude: 34.051007,
    city: "Los Angeles",
    state: "CA",
    zipcode: "90012",
    price: 2350,
    publishedDate: "2022-05-27T03:26:35.794Z",
    distance: 0.18379180796362038,
    daysOld: 64.53,
    correlation: 0.9868,
    address: "108 W 2nd St, Apt 311",
    county: "Los Angeles County",
    bathrooms: 1,
    propertyType: "Condo",
    squareFootage: 750,
    movieIndate: "2022-08-05",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Faulkner Ave",
    bedrooms: 1,
  },
  {
    id: "108-W-2nd-St,-Apt-814,-Los-Angeles,-CA-90012",
    formattedAddress: "108 W 2nd St, Apt 814, Los Angeles, CA 90012",
    longitude: -118.245015,
    latitude: 34.051007,
    city: "Los Angeles",
    state: "CA",
    zipcode: "90012",
    price: 2300,
    publishedDate: "2022-05-17T03:14:36.823Z",
    distance: 0.18379180796362038,
    daysOld: 74.54,
    correlation: 0.9867,
    address: "108 W 2nd St, Apt 814",
    county: "Los Angeles County",
    bathrooms: 1,
    propertyType: "Condo",
    squareFootage: 760,
    movieIndate: "2022-08-04",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
    bedrooms: 1,
  },
  {
    id: "1409-St-Emanuel-St,-Houston,-TX-77003",
    formattedAddress: "1409 St Emanuel St, Houston, TX 77003",
    longitude: -95.357815,
    latitude: 29.747872,
    city: "Houston",
    state: "TX",
    zipcode: "77003",
    price: 2300,
    publishedDate: "2020-07-03T19:53:23.825Z",
    distance: 0.23398263480163303,
    daysOld: 756.85,
    correlation: 0.9755,
    address: "1409 St Emanuel St",
    county: "Harris County",
    bedrooms: 3,
    bathrooms: 3.5,
    propertyType: "Single Family",
    squareFootage: 2196,
    movieIndate: "2022-08-03",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
  },
  {
    id: "2323-Polk-St,-Apt-201,-Houston,-TX-77003",
    formattedAddress: "2323 Polk St, Apt 201, Houston, TX 77003",
    longitude: -95.354679,
    latitude: 29.748012,
    city: "Houston",
    state: "TX",
    zipcode: "77003",
    price: 2000,
    publishedDate: "2022-07-28T03:40:39.549Z",
    distance: 0.4186823748823893,
    daysOld: 2.52,
    correlation: 0.9716,
    address: "2323 Polk St, Apt 201",
    county: "Harris County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Condo",
    squareFootage: 1333,
    movieIndate: "2022-08-05",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
  },
  {
    id: "2205-Mckinney-St,-Apt-511,-Houston,-TX-77003",
    formattedAddress: "2205 Mckinney St, Apt 511, Houston, TX 77003",
    longitude: -95.35414,
    latitude: 29.750925,
    city: "Houston",
    state: "TX",
    zipcode: "77003",
    price: 1600,
    publishedDate: "2022-07-20T04:00:22.052Z",
    distance: 0.42898226989829,
    daysOld: 10.51,
    correlation: 0.9708,
    address: "2205 Mckinney St, Apt 511",
    county: "Harris County",
    bedrooms: 1,
    bathrooms: 1.5,
    propertyType: "Condo",
    squareFootage: 940,
    movieIndate: "2022-08-02",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
  },
  {
    id: "1326-Emancipation-Ave,-Houston,-TX-77003",
    formattedAddress: "1326 Emancipation Ave, Houston, TX 77003",
    longitude: -95.35529,
    latitude: 29.747168,
    city: "Houston",
    state: "TX",
    zipcode: "77003",
    price: 2450,
    publishedDate: "2022-04-02T03:48:29.310Z",
    distance: 0.4295761956015374,
    daysOld: 119.52,
    correlation: 0.9696,
    address: "1326 Emancipation Ave",
    county: "Harris County",
    bedrooms: 2,
    bathrooms: 2.5,
    propertyType: "Townhouse",
    squareFootage: 2587,
    movieIndate: "2022-08-04",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Faulkner Ave",
  },
  {
    id: "2205-Mckinney-St,-Apt-417,-Houston,-TX-77003",
    formattedAddress: "2205 Mckinney St, Apt 417, Houston, TX 77003",
    longitude: -95.35414,
    latitude: 29.750925,
    city: "Houston",
    state: "TX",
    zipcode: "77003",
    price: 2900,
    publishedDate: "2022-01-14T03:47:21.073Z",
    distance: 0.42898226989829,
    daysOld: 197.52,
    correlation: 0.9687,
    address: "2205 Mckinney St, Apt 417",
    county: "Harris County",
    bedrooms: 1,
    bathrooms: 1.5,
    propertyType: "Condo",
    squareFootage: 1445,
    movieIndate: "2022-08-05",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
  },
  {
    id: "176-S-Saint-Marys-St,-Unit-176,-San-Antonio,-TX-78205",
    formattedAddress: "176 S Saint Marys St, Unit 176, San Antonio, TX 78205",
    longitude: -98.491432,
    latitude: 29.424134,
    city: "San Antonio",
    state: "TX",
    zipcode: "78205",
    price: 1180,
    publishedDate: "2021-09-16T03:05:40.009Z",
    distance: 0.03692491432255928,
    daysOld: 317.55,
    correlation: 0.9939,
    address: "176 S Saint Marys St, Unit 176",
    county: "Bexar County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Apartment",
    squareFootage: 700,
    movieIndate: "2022-07-30",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
  },
  {
    id: "235-E-Commerce-St,-Unit-4A,-San-Antonio,-TX-78205",
    formattedAddress: "235 E Commerce St, Unit 4A, San Antonio, TX 78205",
    longitude: -98.490372,
    latitude: 29.424615,
    city: "San Antonio",
    state: "TX",
    zipcode: "78205",
    price: 2000,
    publishedDate: "2022-04-21T02:16:41.816Z",
    distance: 0.08031624596843971,
    daysOld: 100.58,
    correlation: 0.9934,
    address: "235 E Commerce St, Unit 4A",
    county: "Bexar County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Apartment",
    squareFootage: 1192,
    movieIndate: "2022-08-05",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Faulkner Ave",
  },
  {
    id: "177-S-Saint-Marys-St,-Unit-177,-San-Antonio,-TX-78205",
    formattedAddress: "177 S Saint Marys St, Unit 177, San Antonio, TX 78205",
    longitude: -98.491734,
    latitude: 29.42421,
    city: "San Antonio",
    state: "TX",
    zipcode: "78205",
    price: 1787,
    publishedDate: "2021-09-17T03:07:54.279Z",
    distance: 0.05944893727755888,
    daysOld: 316.55,
    correlation: 0.9924,
    address: "177 S Saint Marys St, Unit 177",
    county: "Bexar County",
    bedrooms: 2,
    bathrooms: 2,
    propertyType: "Apartment",
    squareFootage: 1095,
    movieIndate: "2022-08-05",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
  },
  {
    id: "135-E-Commerce-St,-Unit-303,-San-Antonio,-TX-78205",
    formattedAddress: "135 E Commerce St, Unit 303, San Antonio, TX 78205",
    longitude: -98.492253,
    latitude: 29.4249,
    city: "San Antonio",
    state: "TX",
    zipcode: "78205",
    price: 1350,
    publishedDate: "2022-07-28T03:44:04.070Z",
    distance: 0.12396009104186576,
    daysOld: 2.52,
    correlation: 0.9916,
    address: "135 E Commerce St, Unit 303",
    county: "Bexar County",
    bathrooms: 1,
    propertyType: "Apartment",
    squareFootage: 302,
    movieIndate: "2022-08-02",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
    bedrooms: 1,
  },
  {
    id: "135-E-Commerce-St,-Unit-302,-San-Antonio,-TX-78205",
    formattedAddress: "135 E Commerce St, Unit 302, San Antonio, TX 78205",
    longitude: -98.492253,
    latitude: 29.4249,
    city: "San Antonio",
    state: "TX",
    zipcode: "78205",
    price: 1400,
    publishedDate: "2022-07-28T03:32:56.523Z",
    distance: 0.12396009104186576,
    daysOld: 2.53,
    correlation: 0.9916,
    address: "135 E Commerce St, Unit 302",
    county: "Bexar County",
    bathrooms: 1,
    propertyType: "Apartment",
    squareFootage: 274,
    movieIndate: "2022-08-03",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
    bedrooms: 1,
  },
  {
    id: "11-S-Central-Ave,-Apt-1404,-Phoenix,-AZ-85004",
    formattedAddress: "11 S Central Ave, Apt 1404, Phoenix, AZ 85004",
    longitude: -112.073561,
    latitude: 33.447561,
    city: "Phoenix",
    state: "AZ",
    zipcode: "85004",
    price: 2493,
    publishedDate: "2022-04-07T03:48:36.741Z",
    distance: 0.1008837060430952,
    daysOld: 114.52,
    correlation: 0.9919,
    address: "11 S Central Ave, Apt 1404",
    county: "Maricopa County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Condo",
    squareFootage: 867,
    movieIndate: "2022-08-03",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
  },
  {
    id: "11-S-Central-Ave,-Phoenix,-AZ-85004",
    formattedAddress: "11 S Central Ave, Phoenix, AZ 85004",
    longitude: -112.07323,
    latitude: 33.44746,
    city: "Phoenix",
    state: "AZ",
    zipcode: "85004",
    price: 1743,
    publishedDate: "2022-07-28T03:49:28.378Z",
    distance: 0.12649925357495181,
    daysOld: 2.52,
    correlation: 0.9914,
    address: "11 S Central Ave",
    county: "Maricopa County",
    propertyType: "Apartment",
    movieIndate: "2022-08-03",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
    bedrooms: 1,
    bathrooms: 1,
    squareFootage: 850,
  },
  {
    id: "11-S-Central-Ave,-Apt-1711,-Phoenix,-AZ-85004",
    formattedAddress: "11 S Central Ave, Apt 1711, Phoenix, AZ 85004",
    longitude: -112.073168,
    latitude: 33.447684,
    city: "Phoenix",
    state: "AZ",
    zipcode: "85004",
    price: 3106,
    publishedDate: "2022-04-07T03:49:26.201Z",
    distance: 0.11150781131432747,
    daysOld: 114.52,
    correlation: 0.9911,
    address: "11 S Central Ave, Apt 1711",
    county: "Maricopa County",
    bedrooms: 2,
    bathrooms: 2,
    propertyType: "Condo",
    squareFootage: 1050,
    movieIndate: "2022-07-30",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
  },
  {
    id: "11-S-Central-Ave,-Apt-2104,-Phoenix,-AZ-85004",
    formattedAddress: "11 S Central Ave, Apt 2104, Phoenix, AZ 85004",
    longitude: -112.073654,
    latitude: 33.447373,
    city: "Phoenix",
    state: "AZ",
    zipcode: "85004",
    price: 2596,
    publishedDate: "2022-04-07T03:48:17.900Z",
    distance: 0.11715490996122033,
    daysOld: 114.52,
    correlation: 0.9908,
    address: "11 S Central Ave, Apt 2104",
    county: "Maricopa County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Condo",
    squareFootage: 867,
    movieIndate: "2022-08-03",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Faulkner Ave",
  },
  {
    id: "11-S-Central-Ave,-Apt-2004,-Phoenix,-AZ-85004",
    formattedAddress: "11 S Central Ave, Apt 2004, Phoenix, AZ 85004",
    longitude: -112.07356,
    latitude: 33.447535,
    city: "Phoenix",
    state: "AZ",
    zipcode: "85004",
    price: 2364,
    publishedDate: "2022-01-10T03:25:35.646Z",
    distance: 0.10353391836684256,
    daysOld: 201.54,
    correlation: 0.9907,
    address: "11 S Central Ave, Apt 2004",
    county: "Maricopa County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Condo",
    squareFootage: 867,
    movieIndate: "2022-08-02",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Faulkner Ave",
  },
  {
    id: "338-S-16th-St,-Unit-5,-Philadelphia,-PA-19102",
    formattedAddress: "338 S 16th St, Unit 5, Philadelphia, PA 19102",
    longitude: -75.165367,
    latitude: 39.953003,
    city: "Philadelphia",
    state: "PA",
    zipcode: "19102",
    price: 800,
    publishedDate: "2022-02-28T03:28:25.783Z",
    distance: 0.04836352674318679,
    daysOld: 152.54,
    correlation: 0.995,
    address: "338 S 16th St, Unit 5",
    county: "Philadelphia County",
    bathrooms: 1,
    propertyType: "Apartment",
    squareFootage: 2947,
    movieIndate: "2022-08-03",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Springfield",
    bedrooms: 1,
  },
  {
    id: "338-S-16th-St,-Unit-8,-Philadelphia,-PA-19102",
    formattedAddress: "338 S 16th St, Unit 8, Philadelphia, PA 19102",
    longitude: -75.165367,
    latitude: 39.953003,
    city: "Philadelphia",
    state: "PA",
    zipcode: "19102",
    price: 850,
    publishedDate: "2022-01-14T03:21:52.654Z",
    distance: 0.04836352674318679,
    daysOld: 197.54,
    correlation: 0.9945,
    address: "338 S 16th St, Unit 8",
    county: "Philadelphia County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Apartment",
    squareFootage: 2947,
    movieIndate: "2022-08-02",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Faulkner Ave",
  },
  {
    id: "334-S-15th-St,-Unit-2ND,-Philadelphia,-PA-19102",
    formattedAddress: "334 S 15th St, Unit 2ND, Philadelphia, PA 19102",
    longitude: -75.165367,
    latitude: 39.953003,
    city: "Philadelphia",
    state: "PA",
    zipcode: "19102",
    price: 2495,
    publishedDate: "2022-01-07T03:20:41.785Z",
    distance: 0.04836352674318679,
    daysOld: 204.54,
    correlation: 0.9944,
    address: "334 S 15th St, Unit 2ND",
    county: "Philadelphia County",
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "Apartment",
    squareFootage: 2000,
    movieIndate: "2022-08-02",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
  },
  {
    id: "1414-S-Penn-Sq,-Unit-19H,-Philadelphia,-PA-19102",
    formattedAddress: "1414 S Penn Sq, Unit 19H, Philadelphia, PA 19102",
    longitude: -75.164924,
    latitude: 39.951498,
    city: "Philadelphia",
    state: "PA",
    zipcode: "19102",
    price: 6150,
    publishedDate: "2022-07-28T03:25:51.205Z",
    distance: 0.1234289840121411,
    daysOld: 2.54,
    correlation: 0.9916,
    address: "1414 S Penn Sq, Unit 19H",
    county: "Philadelphia County",
    bedrooms: 2,
    bathrooms: 2.5,
    propertyType: "Apartment",
    squareFootage: 1467,
    movieIndate: "2022-08-03",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Faulkner Ave",
  },
  {
    id: "1414-S-Penn-Sq,-Unit-23B,-Philadelphia,-PA-19102",
    formattedAddress: "1414 S Penn Sq, Unit 23B, Philadelphia, PA 19102",
    longitude: -75.16494751,
    latitude: 39.95148849,
    city: "Philadelphia",
    state: "PA",
    zipcode: "19102",
    price: 12000,
    publishedDate: "2022-07-28T03:02:04.667Z",
    distance: 0.12407075151210813,
    daysOld: 2.55,
    correlation: 0.9916,
    address: "1414 S Penn Sq, Unit 23B",
    county: "Philadelphia County",
    bedrooms: 3,
    bathrooms: 3.5,
    propertyType: "Apartment",
    squareFootage: 2046,
    movieIndate: "2022-08-04",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
  },
  {
    id: "SE-12th-Ter,-Miami,-FL-33131",
    formattedAddress: "SE 12th Ter, Miami, FL 33131",
    longitude: -80.1912747,
    latitude: 25.761692,
    city: "Miami",
    state: "FL",
    zipcode: "33131",
    price: 4000,
    publishedDate: "2022-04-07T03:29:48.270Z",
    distance: 0.05147536628242433,
    daysOld: 114.53,
    correlation: 0.9952,
    address: "SE 12th Ter",
    county: "Miami-Dade County",
    bedrooms: 2,
    bathrooms: 2,
    propertyType: "Single Family",
    squareFootage: 1145,
    movieIndate: "2022-08-03",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
  },
  {
    id: "1200-Brickell-St,-Miami,-FL-33131",
    formattedAddress: "1200 Brickell St, Miami, FL 33131",
    longitude: -80.192305,
    latitude: 25.762108,
    city: "Miami",
    state: "FL",
    zipcode: "33131",
    price: 3900,
    publishedDate: "2022-07-15T03:52:24.385Z",
    distance: 0.07032723638912984,
    daysOld: 15.52,
    correlation: 0.9951,
    address: "1200 Brickell St",
    county: "Miami-Dade County",
    bedrooms: 2,
    bathrooms: 2,
    movieIndate: "2022-08-02",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Palm Harbor",
    squareFootage: 850,
    propertyType: "Apartment",
  },
  {
    id: "1395-Brickell-Ave,-Unit-2607,-Miami,-FL-33131",
    formattedAddress: "1395 Brickell Ave, Unit 2607, Miami, FL 33131",
    longitude: -80.191604,
    latitude: 25.76067,
    city: "Miami",
    state: "FL",
    zipcode: "33131",
    price: 4900,
    publishedDate: "2022-07-28T03:59:53.935Z",
    distance: 0.11404515213090262,
    daysOld: 2.51,
    correlation: 0.9923,
    address: "1395 Brickell Ave, Unit 2607",
    county: "Miami-Dade County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Condo",
    squareFootage: 851,
    movieIndate: "2022-07-30",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Faulkner Ave",
  },
  {
    id: "1395-Brickell-Ave,-Unit-2711,-Miami,-FL-33131",
    formattedAddress: "1395 Brickell Ave, Unit 2711, Miami, FL 33131",
    longitude: -80.191604,
    latitude: 25.76067,
    city: "Miami",
    state: "FL",
    zipcode: "33131",
    price: 4500,
    publishedDate: "2022-07-28T03:49:47.128Z",
    distance: 0.11404515213090262,
    daysOld: 2.52,
    correlation: 0.9923,
    address: "1395 Brickell Ave, Unit 2711",
    county: "Miami-Dade County",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Condo",
    squareFootage: 729,
    movieIndate: "2022-07-30",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Faulkner Ave",
  },
  {
    id: "1395-Brickell-Ave,-Unit-2602,-Miami,-FL-33131",
    formattedAddress: "1395 Brickell Ave, Unit 2602, Miami, FL 33131",
    longitude: -80.191604,
    latitude: 25.76067,
    city: "Miami",
    state: "FL",
    zipcode: "33131",
    price: 9800,
    publishedDate: "2022-07-28T04:00:19.330Z",
    distance: 0.11404515213090262,
    daysOld: 2.51,
    correlation: 0.9923,
    address: "1395 Brickell Ave, Unit 2602",
    county: "Miami-Dade County",
    bedrooms: 3,
    bathrooms: 3.5,
    propertyType: "Condo",
    squareFootage: 1892,
    movieIndate: "2022-07-30",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Faulkner Ave",
  },
];
export default properties;
