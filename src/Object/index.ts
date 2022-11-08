Object.defineProperties(Object.prototype, {
    isEmpty: {
        value: function (this) {
            console.log('LOG ~ file: index.ts ~ line 3 ~ this', this);
            return true;
        },
    },
});

Object.defineProperty(Object.prototype, 'methodOnSteriods',{
    value: function(){ /* Makes breakfast, solves world peace, takes out trash */ },
    writable: true,
    configurable: true,
    enumerable: false
  });

export {};
