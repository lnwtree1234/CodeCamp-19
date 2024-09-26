const names = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jack', lastName: 'Dann' },
    { firstName: 'Joe', lastName: 'Dunne' }
  ];
  
  for (const { firstName, lastName } of names) {
    console.log(`Full name: ${firstName} ${lastName}`);
  }
  