// Q 1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  
  const vowels = ["A", "E", "I", "O", "U"];
  
  const filteredStates = statesInIndia.filter((state) => {
    return !vowels.includes(state[0].toUpperCase());
  });
  
  console.log(filteredStates);