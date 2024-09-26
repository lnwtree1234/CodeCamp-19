const q = {
    prop: 'Hello',
    prop2: {
      prop2: {
        nested: ['a', 'b', 'c']
      }
    }
  };
  
  const { prop: x, prop2: { prop2: { nested: [, y] } } } = q;
  
  console.log(x); // Hello
  console.log(y); // b
  