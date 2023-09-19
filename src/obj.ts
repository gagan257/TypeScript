let emp: {
  // defining obj values and types
  readonly id: number; // now we cannot change id of emp because of readonly property
  name: string;
} = { id: 1, name: "sample" }; // assigning values

// OR (not recommended)

let emp2: {
  // defining obj values and types
  id: number;
  name?: string; // optional
} = { id: 1 }; // assigning values

// RESUSE OF SAME TYPE (Type Aliases)

type Sample = {
  // defining structure
  readonly id: number;
  name: string;
};

let a: Sample = {
  // using type structure sample in a obj
  id: 1,
  name: "namehere",
};
