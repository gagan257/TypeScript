function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("No Name Found");
}

greet("Gagan");
greet(null);
greet(undefined);
