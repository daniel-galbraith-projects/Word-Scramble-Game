const data = [
  {
    lastName: "Smith",
    firstName: "Emma",
    dob: "2015-09-02",
    age: 8,
    gender: "Female",
    email: "emma.smith@example.com",
    question: 10,
    correct: 7,
    percentage: 70,
    difficulty: "Medium",
  },
  {
    lastName: "Garcia",
    firstName: "Liam",
    dob: "2014-07-14",
    age: 9,
    gender: "Female",
    email: "liam.garcia@example.com",
    question: 12,
    correct: 9,
    percentage: 75,
    difficulty: "Hard",
  },
  {
    lastName: "Johnson",
    firstName: "Olivia",
    dob: "2013-03-22",
    age: 10,
    gender: "Female",
    email: "olivia.johnson@example.com",
    question: 15,
    correct: 13,
    percentage: 87,
    difficulty: "Hard",
  },
  {
    lastName: "Davis",
    firstName: "Noah",
    dob: "2012-12-01",
    age: 11,
    gender: "other",
    email: "noah.davis@example.com",
    question: 20,
    correct: 16,
    percentage: 80,
    difficulty: "Medium",
  },
  {
    lastName: "Wilson",
    firstName: "Ava",
    dob: "2011-08-19",
    age: 12,
    gender: "Female",
    email: "ava.wilson@example.com",
    question: 8,
    correct: 5,
    percentage: 63,
    difficulty: "Easy",
  },
  {
    firstName: "John",
    lastName: "Doe",
    dob: "2009-06-12", // date of birth in YYYY-MM-DD format
    age: 12,
    gender: "male",
    email: "john.doe@example.com",
    question: 20,
    correct: 16,
    percentage: 80,
    difficulty: "medium",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    dob: "2010-03-22", // date of birth in YYYY-MM-DD format
    age: 11,
    gender: "female",
    email: "jane.doe@example.com",
    question: 20,
    correct: 18,
    percentage: 90,
    difficulty: "easy",
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    dob: "2008-09-04", // date of birth in YYYY-MM-DD format
    age: 13,
    gender: "male",
    email: "bob.smith@example.com",
    question: 25,
    correct: 20,
    percentage: 80,
    difficulty: "hard",
  },
  {
    firstName: "Alice",
    lastName: "Jones",
    dob: "2011-02-15", // date of birth in YYYY-MM-DD format
    age: 10,
    gender: "female",
    email: "alice.jones@example.com",
    question: 18,
    correct: 15,
    percentage: 83.33,
    difficulty: "medium",
  },
  {
    firstName: "David",
    lastName: "Lee",
    dob: "2008-12-31",
    age: 13,
    gender: "male",
    email: "david.lee@example.com",
    question: 30,
    correct: 22,
    percentage: 73.33,
    difficulty: "hard",
  },
  {
    firstName: "Samantha",
    lastName: "Kim",
    dob: "2010-07-05",
    age: 11,
    gender: "female",
    email: "samantha.kim@example.com",
    question: 20,
    correct: 19,
    percentage: 95,
    difficulty: "easy",
  },
  {
    firstName: "Michael",
    lastName: "Chang",
    dob: "2009-05-20",
    age: 12,
    gender: "male",
    email: "michael.chang@example.com",
    question: 25,
    correct: 24,
    percentage: 96,
    difficulty: "medium",
  },
  {
    firstName: "Emily",
    lastName: "Nguyen",
    dob: "2010-11-11",
    age: 11,
    gender: "female",
    email: "emily.nguyen@example.com",
    question: 18,
    correct: 16,
    percentage: 88.89,
    difficulty: "hard",
  },
  {
    firstName: "William",
    lastName: "Li",
    dob: "2009-02-28",
    age: 12,
    gender: "male",
    email: "william.li@example.com",
    question: 20,
    correct: 16,
    percentage: 90,
    difficulty: "medium",
  },
  {
    firstName: "Sophia",
    lastName: "Zhang",
    dob: "2010-04-16",
    age: 11,
    gender: "male",
    email: "william.li@example.com",
    question: 13,
    correct: 9,
    percentage: 60,
    difficulty: "medium",
  },
  {
    firstName: "Gia",
    lastName: "Zhang",
    dob: "2010-04-16",
    age: 9,
    gender: "male",
    email: "gia@example.com",
    question: 5,
    correct: 3,
    percentage: 60,
    difficulty: "medium",
  },
  {
    firstName: "Daniel",
    lastName: "Zhang",
    dob: "2010-04-16",
    age: 11,
    gender: "male",
    email: "daniel.li@example.com",
    question: 15,
    correct: 11,
    percentage: 88,
    difficulty: "medium",
  },
  {
    firstName: "Junior",
    lastName: "Zhang",
    dob: "2010-04-16",
    age: 8,
    gender: "male",
    email: "william.li@example.com",
    question: 20,
    correct: 8,
    percentage: 75,
    difficulty: "medium",
  },
  {
    firstName: "Mark",
    lastName: "Burn",
    dob: "2010-04-16",
    age: 10,
    gender: "male",
    email: "william.li@example.com",
    question: 20,
    correct: 19,
    percentage: 95,
    difficulty: "medium",
  },
  {
    firstName: "Kayla",
    lastName: "Zhang",
    dob: "2010-04-16",
    age: 12,
    gender: "male",
    email: "william.li@example.com",
    question: 11,
    correct: 9,
    percentage: 40,
    difficulty: "medium",
  },
  {
    firstName: "Chin",
    lastName: "Zhang",
    dob: "2010-04-16",
    age: 12,
    gender: "male",
    email: "william.li@example.com",
    question: 20,
    correct: 15,
    percentage: 30,
    difficulty: "medium",
  },
  {
    firstName: "Allen",
    lastName: "Zhang",
    dob: "2010-04-16",
    age: 9,
    gender: "male",
    email: "william.li@example.com",
    question: 23,
    correct: 18,
    percentage: 11,
    difficulty: "easy",
  },
  {
    firstName: "Mu",
    lastName: "Zhang",
    dob: "2010-04-16",
    age: 8,
    gender: "male",
    email: "william.li@example.com",
    question: 20,
    correct: 3,
    percentage: 50,
    difficulty: "hard",
  },
  {
    firstName: "Kartel",
    lastName: "Zhang",
    dob: "2010-04-16",
    age: 12,
    gender: "female",
    email: "william.li@example.com",
    question: 20,
    correct: 9,
    percentage: 53,
    difficulty: "medium",
  },
  {
    firstName: "Dana",
    lastName: "Zhang",
    dob: "2010-04-16",
    age: 11,
    gender: "female",
    email: "william.li@example.com",
    question: 21,
    correct: 11,
    percentage: 65,
    difficulty: "medium",
  },

  {
    firstName: "Krissy",
    lastName: "Zhang",
    dob: "2010-04-16",
    age: 10,
    gender: "female",
    email: "william.li@example.com",
    question: 25,
    correct: 18,
    percentage: 39,
    difficulty: "hard",
  },
  {
    firstName: "corn",
    lastName: "chin",
    dob: "2010-04-16",
    age: 10,
    gender: "female",
    email: "corn.li@example.com",
    question: 13,
    correct: 8,
    percentage: 39,
    difficulty: "hard",
  },
  {
    firstName: "Jovan",
    lastName: "smith",
    dob: "2010-04-16",
    age: 11,
    gender: "male",
    email: "william.li@example.com",
    question: 16,
    correct: 13,
    percentage: 39,
    difficulty: "hard",
  },
  {
    firstName: "Candy",
    lastName: "Hung",
    dob: "2010-04-16",
    age: 9,
    gender: "female",
    email: "Candy.li@example.com",
    question: 24,
    correct: 19,
    percentage: 39,
    difficulty: "easy",
  },
];