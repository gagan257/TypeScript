// method 1
type dragable = {
  drag: () => void;
};

// method 2
type resizeable = {
  resize: () => void;
};

// mix of both methods
type mix = dragable & resizeable;

// using it

let textBox: mix = {
  drag: () => {},
  resize: () => {},
};
