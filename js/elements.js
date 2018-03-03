const elements = (() => {
  const retrieve = (classIdOrTag) => {
    if (classIdOrTag[0] === '#') {
      return document.getElementById(`${classIdOrTag}`);
    } else {
      return document.querySelectorAll(`${classIdOrTag}`);
    }
  };

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
    let parent = document.querySelector(`${parentIdTagOrClassName}`);
    if (parent !== null) {
      parent.appendChild(child);
    } else {
      console.error(`Cannot append ${child} to ${parent}`);
    }
  };

  const isMissingValue = (input) => {
    return input.value === "";
  };
  return { retrieve, create, append, isMissingValue };
})();
