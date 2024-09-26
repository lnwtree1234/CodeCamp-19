const users = [
    { user: "Name1" },
    { user: "Name2", age: 2 },
    { user: "Name2" },
    { user: "Name3", age: 4 }
  ];
  
  for (const { user, age = "unknown" } of users) {
    console.log(`User: ${user}, Age: ${age}`);
  }
  