const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

function callback(element){
  // return element.length > 6;
  if (element.length > 6) {
    return true;
  } else {
    return false;
  }

}

const result = words.filter(callback)
