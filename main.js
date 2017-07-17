//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (details) {
  this.name = details.name;
  // this.status = details.status;
  this.color = details.color;
  this.hungry = details.hungry;
  this.pet = details.pet;
};

let sadie = new Dog({
  name : "sadie",
  status : "normal",
  color: "black",
  hungry: false,
  owner: "mason"
});

let moonshine = new Dog({
  name : "moonshine",
  hungry: true,

})

let atticus = new Dog ({
  name: "atticus",


})

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (details) {
this.name = details.name;
this.cool = details.cool;
this.feed = function(dog){
  dog.hungry = false;
};
this.pet = function(dog){
  dog.status = 'happy';
};
}

let mason = new Human ({
  name: "mason",
  cool: false,
});
let julia = new Human ({
  name: "julia",
  cool: true,
  feed: "moonshine"
});

// Instances of Human
// Needed: mason, julia
