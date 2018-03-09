"use strict";

const elements = (() => {
  const create = (elementType, classNameOrId) => {
    let element = document.createElement(`${elementType}`);
    let value;
    if (classNameOrId !== "") {
      if (classNameOrId[0] === ".") {
        value = classNameOrId.slice(1);
        element.classList.add(`${value}`);
      } else if (classNameOrId[0] === "#"){
        element.id = value;
      } else {
        console.error("Improper format: classNameOrId is missing '.' or '#'");
      }
    }
    return element;
  };

  const append = (parentIdTagOrClassName, child) => {
    // not entirely necessary but I think it makes the functions \
    // using it look neater
    let parent = document.querySelector(`${parentIdTagOrClassName}`);
    parent.appendChild(child);
  };

  const isMissingValue = (input) => {
    return input.value === "";
  };

  const setText = (elementId, text) => {
    elementId.innerText = text;
  };

  const toggle = (() => {
    const visibility = (id) => {
      const element = document.getElementById(`${id}`);
      if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    }

    return { visibility };
  })();

  return {
          create,
          append,
          isMissingValue,
          setText,
          toggle
        };
})();
