context = describe;

function suma(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

describe("algunos conceptos que no tengo claros", function() {
  describe("la función suma", function() {
    it("devuelve la suma de dos numeros", function() {
      var a = 5;
      var b = 6;

      var result = suma(a, b);

      expect(result).toBe(11);
    });

    it("devuelve la suma de dos numeros negativos", function() {
      var a = -5;
      var b = -7;

      var result = suma(a, b);

      expect(result).toBe(-12);
    });

    it("devuelve cero si sumos dos ceros", function() {
      var a = 0;
      var b = 0;

      var result = suma(a, b);

      expect(result).toBe(0);
    });
  });

  describe("la función multiplicar", function() {
    it("devuelve el producto de dos numeros", function() {
      var a = 10;
      var b = 12;

      var result = multiplicar(a, b);

      expect(result).toBe(120);
    });

    it("devuelve cero si uno de los numeros de entrada es cero", function() {
      var a = 3;
      var b = 0;

      var result = multiplicar(a, b);

      expect(result).toBe(0);
    });

    it("devuelve el producto incluso cuando hay numero negativos", function() {
      var a = -3;
      var b = 2;

      var result = multiplicar(a, b);

      expect(result).toBe(-6);
    });
  });
});

describe("Comprobar los matches de Jasmine", function() {
  it("tobeFalsy y tobe false funcionan igual", function() {
    expect(1 == "3").toBeFalsy();
    expect(1 == "3").toBe(false); //Otra forma igual de válida
    expect(1 != "3").toBeTruthy();
    expect(1 != "3").toBe(true);
  });
  it("para los strings toBe y toEqual son intercambiables", function() {
    expect(1 + "a").toBe("1a");
    expect(1 + "a").toEqual("1a");
  });
  it("para los numeros toBe y toEqual son intercambiables", function() {
    var a = 5;
    var b = 5;

    expect(a).toBe(b);
    expect(a).toEqual(b);
  });

  it("tambien existe not to be", function() {
    var a = 5;
    var b = 6;

    expect(a).not.toBe(b);
    expect(a).not.toEqual(b);
  });

  it("para los objetos el toBe solo devuelve true si es EXACTAMENTE EL MISMO OBJETO", function() {
    var objetoA = { nombre: "Paco", apellido: "Vioque" };
    var objetoB = { nombre: "Paco", apellido: "Vioque" };

    expect(objetoA).not.toBe(objetoB);
  });

  it("para los objetos el toEqual devuelve true si los objetos son iguales, aunque no sean el mismo", function() {
    var objetoA = { nombre: "Paco", apellido: "Vioque" };
    var objetoB = { nombre: "Paco", apellido: "Vioque" };

    expect(objetoA).toEqual(objetoB);
  });

  it("para dos objetos distintos el toEqual devuelve false", function() {
    var objetoA = { nombre: "Paco", apellido: "Vioque" };
    var objetoB = { nombre: "Maruja", apellido: "Cortes" };

    expect(objetoA).not.toEqual(objetoB);
  });

  it("tambien puedo comparar dos propiedades", function() {
    var objetoA = { nombre: "Paco", apellido: "Vioque" };
    var objetoB = { nombre: "Paco", apellido: "El Chocolatero" };

    expect(objetoA.nombre).toEqual(objetoB.nombre);
  });

  it("ojo, nombre es un string, dentro de un objeto, pero un string, así que toBe y toEqual son intercambiables", function() {
    var objetoA = { nombre: "Paco", apellido: "Vioque" };
    var objetoB = { nombre: "Paco", apellido: "El Chocolatero" };

    expect(objetoA.nombre).toBe(objetoB.nombre);
  });

  it("para array, el toBe funciona si los arrays son EXACTAMENTE EL MISMO, aun siendo iguales", function() {
    var array1 = [1, 2, 3];
    var array2 = [1, 2, 3];

    expect(array1).not.toBe(array2);
  });

  it("para array, el toEqual devuelve true si tiene los mismos elementos, aunque no sea exactamente el mismo", function() {
    var array1 = [1, 2, 3];
    var array2 = [1, 2, 3];

    expect(array1).toEqual(array2);
  });

  it("para array, el toEqual devuelve false si tienen distinto contenido", function() {
    var array1 = [1, 2, 3];
    var array2 = [5, 6, 7];

    expect(array1).not.toEqual(array2);
  });

  it("el toBe con objetos se comporta igual : si son arrays diferentes devuelve false", function() {
    var objetoA = { nombre: "Paco", apellido: "Vioque" };
    var objetoB = { nombre: "Paco", apellido: "Vioque" };
    var array1 = [objetoA, objetoB];
    var array2 = [objetoA, objetoB];

    expect(array1).not.toBe(array2);
  });

  it("el toEqual con objetos se comporta igual : si son arrays diferentes devuelve false", function() {
    var objetoA = { nombre: "Paco", apellido: "Vioque" };
    var objetoB = { nombre: "Paco", apellido: "Vioque" };
    var array1 = [objetoA, objetoB];
    var array2 = [objetoA, objetoB];

    expect(array1).toEqual(array2);
  });

  it("el toEqual requiere que los objetos que contienen sean los mismos en el mismoOrden", function() {
    var objetoA = { nombre: "Paco", apellido: "Vioque" };
    var objetoB = { nombre: "Paco", apellido: "Chocolatero" };
    var array1 = [objetoA, objetoB];
    var array2 = [objetoB, objetoA];

    expect(array1).not.toEqual(array2);
  });

  it("esto es curioso: el toEqual de arrays, si contiene objetos iguales pero no los mismos, devuelve TRUE", function() {
    var objetoA = { nombre: "Paco", apellido: "Vioque" };
    var objetoB = { nombre: "Paco", apellido: "Vioque" };
    var array1 = [objetoA];
    var array2 = [objetoB];

    expect(array1).toEqual(array2);
  });

  it("toBeUndefined, sirve para comprobar que una variable esta declarada pero no inicializada", function() {
    var a;

    expect(a).toBeUndefined();
  });

  it("si esa variable es igual a una funcion que ha devuelto undefined, también es undefined", function() {
    function devuelveUndefined() {
      return undefined;
    }

    var a = devuelveUndefined();

    expect(a).toBeUndefined();
  });

  it("Si en una función de me olvida el return es como si devolviese undefined", function() {
    function suma(a, b) {
      var result = a + b;
      //return result; se me ha olvidado poner ese return
    }

    var c = suma(2, 3);

    expect(c).toBeUndefined();
  });

  it("Si no se me olvida el return, entonces c si está definido ", function() {
    function suma(a, b) {
      var result = a + b;
      return result;
    }

    var c = suma(2, 3);

    expect(c).toBeDefined();
  });

  it("toBeNull sirve para verificar que una es null", function() {
    var a = null;

    expect(a).toBeNull();
  });

  it("los matchers funcionan con variables, valores a pelo, resultados de funciones , expresiones ...", function() {
    var a = 5;

    expect(a).toBe(5);
    expect(5).toBe(5);
    expect(suma(3, 2)).toBe(5);
    expect(10 - 5).toBe(5);
  });

  it("los matchers funcionan con variables, valores a pelo, resultados de funciones , expresiones  TAMBIEN PARA BOOL...", function() {
    function esMenorQue2(numero) {
      return numero < 2;

      //Versión larga
      // if(numero < 2)
      // {
      //   return true;
      // }
      // else
      // {
      //   return false;
      // }
    }

    var a = true;

    expect(a).toBeTruthy();
    expect(true).toBeTruthy();
    expect(esMenorQue2(1)).toBeTruthy();
    expect(10 > 5).toBeTruthy();
  });

  it("toContain() sirve para comprobar si un array contiene o no un elemento", function() {
    var array = [1, 2, 3];

    expect(array).toContain(2);
    expect(array).not.toContain(4);
  });

  it("toBeLessThan() sirve para comprobar que un elmenteo vale menos que otro", function() {
    var a = 3;
    var b = 6;

    expect(a).toBeLessThan(b);
    expect(b).toBeGreaterThan(a);
  });

  it("toThrow(), sirve para comprobar que se lanza excepción, un fallo", function() {
    function funcionQueSiExiste(){
      return true
    }
   
    expect(function() {
      funcionQueNoExiste()
    }).toThrow()

    expect(function() {
      funcionQueSiExiste()
    }).not.toThrow()
  });
});

describe("the JavaScript language", function() {
  describe("has different types and operators", function() {
    it("considers numbers to be equal to their string representation", function() {
      expect(1 == "1").toBeTruthy();
      expect(1 != "1").toBeFalsy();
    });

    it("knows that numbers and strings are not exactly the same", function() {
      expect(1 === "1").toBeFalsy();
      expect(1 !== "1").toBeTruthy();
    });

    it("joins parts as string when using the plus operator", function() {
      expect(1 + "a").toEqual("1a");
    });

    it("operates integers before joining the string", function() {
      expect(1 + 1 + "2").toEqual("22");
    });

    it("knows the type of the variable", function() {
      var x = 1;

      expect(typeof x).toEqual("number");
    });

    it("surprises me, NaN is not comparable with NaN", function() {
      expect(5 / "a").toEqual(5 / "a");
      //expect(typeof(NaN)).toEqual();
      expect(isNaN(5 / "a")).toBeTruthy();
    });

    it("considers an empty string to be falsy", function() {
      //expect("" == false).toBe......();// Truthy or Falsy
      //expect("" === false).toBe.....();// Truthy or Falsy
    });

    it("considers zero to be falsy", function() {
      //expect(0 == false).toBe......();// Truthy or Falsy
      //expect(0 === false).toBe.....();// Truthy or Falsy
    });

    it("considers nulls to be falsy", function() {
      var x = null;
      var result;

      if (x) {
        result = true;
      } else {
        result = false;
      }

      //expect(result == false).toBe......();// Truthy or Falsy
      //expect(null === false).toBe.....();// Truthy or Falsy
      //expect(null == false).toBe....();// Truthy or Falsy
    });

    it("knows the type of a function", function() {
      function x() {}

      expect(typeof x).toBe("function");
      //expect(typeof(xxx)).toBe('...');
    });

    it("has arrays and they can contain anything inside", function() {
      var arr = [1, 2, 3, 4];
      arr.push(5);
      arr[9] = 6;
      var matrix = [["a", "b", "c"], ["d", "e", "f"], ["g", 7, 8]];

      /*
      expect(arr[1]).toEqual();
      expect(arr[4]).toEqual();
      expect(arr[6]).toEqual();
      expect(arr[9]).toEqual();
      expect(matrix[0][2]).toEqual();
      */
    });

    it("may contain functions inside arrays", function() {
      var arr = [
        1,
        2,
        function(arg) {
          return 3 + arg;
        }
      ];

      //expect(arr[2](1)).toEqual();
    });

    it("concatenate arrays - well, kind of", function() {
      var a = [1, 2, 3];
      var b = [4, 5, 6];

      //expect(a + b).toEqual();
    });

    it("joins arrays and strings", function() {
      var a = [1, 2, 3];

      //expect ("1" + a).toEqual();
      //expect(a + "1").toEqual();
    });

    it("joins arrays and other things", function() {
      var a = [1, 2, 3];
      var b = ["x", "y", "z"];

      //expect(1 + a).toEqual();
      //expect(a + 1).toEqual();
      //expect(1 + b).toEqual();
      //expect(true + a).toEqual();
    });

    it("can't compare arrays", function() {
      var a = [1, 2, 3];
      var b = [1, 2, 3];

      //expect(a == b).toBe.....();  // Truthy or Falsy
      //expect(a === b).toBe.....(); // Truthy or Falsy
    });

    it("is not the same to compare by value than by reference ", function() {
      var a = [1, 2, 3];
      var b = [1, 2, 3];

      expect(a).toEqual(b); // Jasmine toEqual compares by value
      expect(a).not.toBe(b); // Jasmine toBe compares by reference
    });
  });

  describe("considers functions as first class citizens", function() {
    it("can declare named functions", function() {
      function example() {
        return "some example";
      }

      //expect(example()).toEqual();
    });

    it("can declare anonymous functions", function() {
      var someVar = function(a, b) {
        return a + b;
      };

      //expect(typeof(someVar)).toBe();
      //expect(someVar(1,1)).toBe();
    });

    it("may return anything", function() {
      function example(arg) {
        return [arg, arg * 2, arg * 3];
      }

      var result = example(2);

      //expect(result[1]).toEqual();
    });

    it("may return arrays that contains functions and so on", function() {
      function example() {
        // write the missing code here
      }

      //expect(example()[0](1)[1]).toEqual(10);
    });

    it("doesn't care about the declaration order when they are named", function() {
      function exampleA() {
        return exampleB(1);
      }

      //expect(exampleA()).toEqual();

      function exampleB(arg1) {
        return arg1;
      }
    });

    it("matters, the declaration order when they are anonymous", function() {
      var exampleA = function() {
        return exampleB(1);
      };

      //expect(exampleA()).toEqual(1);

      var exampleB = function(arg1) {
        return arg1;
      };
    });

    it("can use optional parameters", function() {
      function example(a, b, c) {
        if (c) {
          return a + b + c;
        }
        return a + b;
      }

      //expect(example(1,1,1)).toBe();
      //expect(example(1,1)).toBe();
    });

    it("anonymous functions are anonymous", function() {
      var x = function z() {
        return 1;
      };
      //expect(typeof(z)).toEqual();
      //expect(x()).toEqual();
    });

    it("can create closures with free variables", function() {
      function external() {
        var a = 1;

        function internal() {
          return a + 1;
        }

        return internal();
      }

      //expect(external()).toBe();
    });

    it("can create closures with several free variables", function() {
      function external() {
        var a = 1,
          b = 2;

        function internal() {
          var c = 3;
          return a + b + c;
        }
      }

      //expect(external()).toBe(6);
    });

    it("defines a pure function when there are no free variables", function() {
      function external() {
        var a = 1,
          b = 2;

        function internal(a, b) {
          var c = 1;
          return a + b + c;
        }

        return internal(4, 4);
      }

      //expect(external()).toBe();
    });

    it("may return arrays that contains closures and so on", function() {
      function example() {
        // write the missing code here
      }

      //expect(example()[0](1)[1]).toEqual(10);
      //expect(example()[0](2)[1]).toEqual(11);
      //expect(example()[0](3)[1]).toEqual(12);
    });

    it("passes primitive types as values (a copy) to functions", function() {
      function example(arg) {
        arg = "test!";
      }

      var x = 1;
      var y = "example";
      var z = true;

      example(x);
      //expect(x).toEqual();

      example(y);
      //expect(y).toEqual();

      example(z);
      //expect(z).toEqual();
    });

    it("passes arrays by reference", function() {
      function example(arg) {
        arg[0] = 100;
      }

      var x = [1, 2, 3];

      example(x);
      //expect(x).toEqual();
    });

    it("passes objects by reference", function() {
      function example(arg) {
        arg.property = "test";
      }

      var x = { property: "cool!" };

      example(x);
      //expect(x).toEqual();
    });

    it("may return a function as the result of invoking a function", function() {
      function add(a, b) {
        return a + b;
      }

      function example() {
        return add;
      }

      //expect(example()(1,2)).toEqual();
      var f = example();
      //expect(f(2,2)).toEqual();
    });

    it("can return closures as a function result", function() {
      function plus(amount) {
        return function(number) {
          return number + amount;
        };
      }

      var f = plus(5);

      //expect(f(3)).toBe();
    });

    it("can have functions that receive other functions as arguments", function() {
      function add(a, b) {
        return a + b;
      }

      function example(arg) {
        return arg(2, 2) + 1;
      }

      //expect(example(add)).toEqual();
    });

    it("may have functions as the input and the output", function() {
      function plus(originalFunction) {
        return function(arg1) {
          return originalFunction() + arg1;
        };
      }

      var f = plus(function() {
        return 1;
      });

      //expect(f(2)).toBe();
    });

    it("can invoke functions indirectly using the special 'call'", function() {
      function f(a, b) {
        return a + b;
      }

      //expect(f.call(f,1,1)).toEqual();
    });

    it("can invoke functions indirectly using the special 'apply'", function() {
      function f(a, b) {
        return a + b;
      }

      //expect(f.apply(f, [1,1])).toEqual();
    });

    it("doesnt have a private scope inside blocks", function() {
      var j = 0;
      for (var i = 0; i < 5; i++) {
        j += i;
      }

      //expect(i).toEqual();
      //expect(j).toEqual();
    });
  });

  describe("has multiple ways to define and create objects", function() {
    it("can define object literals", function() {
      var obj = {
        name: "bob",
        theName: function() {
          return this.name;
        }
      };

      //expect(obj.theName()).toBe();
    });

    it("can create properties dynamically", function() {
      var obj = {
        name: "bob",
        surname: "sponge"
      };
      obj.address = "palm tree";

      //expect(obj.address).toEqual();
      //expect(obj['address']).toEqual();
      //expect(obj['name']).toEqual();
    });

    it("may define complex objects", function() {
      var user;
      // write the contents of the obj to make the satisfy the expectations:

      //expect(user.address.street).toEqual('sesame');
      //expect(user.friends[0].name).toEqual('triki');
    });

    it("has a pattern called, the Module Pattern", function() {
      function createObject() {
        var points = 0;

        return {
          addPoint: function() {
            ++points;
          },
          score: function() {
            return points;
          }
        };
      }

      var obj = createObject();
      obj.addPoint();

      //expect(obj.score()).toEqual();
      //expect(typeof(obj.points)).toEqual();
    });

    it("may create objects also with the module pattern", function() {
      function createObject(initialScore) {
        // write the code here
      }

      /*
      var obj = createObject(5, 'red');
      obj.incrementScoreIn(5);
      expect(obj.color).toEqual('red');
      expect(obj.points()).toEqual(10);
      */
    });

    it("can define constructors", function() {
      function Obj() {
        var name = "bob";

        this.theName = function() {
          return name;
        };
      }

      var obj = new Obj();
      //expect(obj.theName()).toBe();
    });

    it("may contain 'static' methods", function() {
      function Obj() {
        var name = "bob";

        this.theName = function() {
          return name;
        };
      }

      Obj.someStaticMethod = function() {
        return 22;
      };

      //expect(Obj.someStaticMethod()).toBe();
    });

    it("can have have methods in the prototype", function() {
      function Obj() {
        var name = "bob";
      }

      Obj.prototype.theName = function() {
        return this.name;
      };

      var obj = new Obj();
      //expect(obj.theName()).toEqual();
      //expect(obj.theName).toBe(new Obj().theName);
    });

    it("can define a factory", function() {
      function obj() {
        var self = {};
        var name = "bob";

        self.theName = function() {
          return name;
        };

        return self;
      }

      var instance = obj();
      //expect(instance.theName()).toBe();
      //expect(instance.theName).not.toBe(obj().theName);
    });

    it("can create methods dynamically on an object instance", function() {
      var obj = {};
      var methodNames = ["meow", "jump"];

      for (var i = 0; i < methodNames.length; i++) {
        obj[[methodNames[i]]] = function() {
          return "it works";
        };
      }

      //expect(obj.meow()).toEqual();
    });

    describe("the polymorphism", function() {
      it("may use constructor plus prototype", function() {
        function Parent() {
          this.name = "parent";
        }
        Parent.prototype.someMethod = function() {
          return 10;
        };

        function Child() {
          Parent.call(this); // constructor stealing
          this.name = "child";
        }
        Child.prototype = Object.create(Parent.prototype); // prototype chaining

        var child = new Child();
        //expect(child.someMethod()).toEqual();
        //expect(child.name).toEqual();
      });

      it("may use the functional inheritance", function() {
        function parent() {
          var name = "parent";
          var self = {};
          self.someMethod = function() {
            return 10;
          };
          return self;
        }

        function child() {
          var name = "child";
          var self = parent();
          return self;
        }

        var instance = child();
        //expect(instance.someMethod()).toBe();
      });
    });
  });

  describe("commons patterns with functions and behaviors", function() {
    it("can invoke functions immediately to take advantage of scopes", function() {
      var myNamespace = {};

      (function(theNamespace) {
        var counter = 0;

        theNamespace.addOne = function() {
          counter++;
        };

        theNamespace.giveMeTheCount = function() {
          return counter;
        };
      })(myNamespace);

      myNamespace.addOne();
      myNamespace.addOne();

      //expect(myNamespace.giveMeTheCount()).toBe();
    });

    it("hoists variables the way you probably dont expect", function() {
      function generate() {
        var functions = [];
        for (var i = 0; i < 5; i++) {
          functions.push(function() {
            return i;
          });
        }
        return functions;
      }

      //expect(generate()[0]()).toEqual();
      //expect(generate()[1]()).toEqual();
    });
  });

  context("has ways to simulate classes", function() {
    // "Class"
    function Cat() {
      this.kilos = 1;
      this.feed = function() {
        this.kilos++;
      };
      this.isPurring = function() {
        return true;
      };
    }

    //////////////////////////////////////
    // "Class"
    //////////////////////////////////////
    function Lion(energy) {
      Cat.call(this);
      this.energy = energy || 100;
      var self = this;

      var run = function() {
        // private method
        self.energy -= 10;
      };
      var attack = function() {
        // private method
        self.energy -= 5;
      };
      this.playWithFriend = function(friend) {
        if (friend.isPurring()) self.energy += 10;
      };
      this.hunt = function() {
        // public method
        run();
        attack();
        this.onHunting(); // fire event
      };
      this.onHunting = function() {
        /* event */
      };
    }

    context("and the THIS keyword", function() {
      var cat;

      beforeEach(function() {
        cat = new Cat();
        window.kilos = 0;
      });

      it("sometimes works as expected in other languages", function() {
        cat.feed();
        cat.feed();

        //expect(cat.kilos).toEqual();
      });

      it("works different on dettached functions", function() {
        window.kilos = 10;
        var feed = cat.feed;

        feed();

        //expect(window.kilos).toEqual();
        //expect(cat.kilos).toEqual();
      });

      it("can be bound explicitly with CALL and APPLY", function() {
        var feed = cat.feed;
        feed.apply(cat);

        //expect(cat.kilos).toEqual();
      });

      it("can be bound in modern browsers with BIND", function() {
        var feed = cat.feed;
        var bound = feed.bind(cat);

        bound();

        //expect(cat.kilos).toEqual();
      });

      it("works different when function is attached to other object", function() {
        var otherCat = new Cat();
        otherCat.kilos = 10;
        otherCat.feed = cat.feed;

        otherCat.feed();
        //expect(otherCat.kilos).toEqual();
        //expect(cat.kilos).toEqual();
      });

      it("can be handled using the SELF trick", function() {
        var energy = 200;
        var lion = new Lion(energy);

        lion.hunt();

        //expect(lion.energy).toEqual();
      });

      it("interprest the THIS when the function is executed", function() {
        var energy = 200;
        var lion = new Lion();

        lion.hunt = function() {
          this.energy = 4000;
        };
        lion.hunt();

        //expect(lion.energy).toEqual();
      });
    });
  });
});
