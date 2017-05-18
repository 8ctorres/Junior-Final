var exports = module.exports = {};

let lang = "eng";

exports.selectlanguage = function(str){
  if (str.toLowerCase()=="en" || str.toLowerCase()=="eng" || str.toLowerCase()=="english") {
    lang = "eng";
    return "English selected";
  }
  else if (str.toLowerCase()=="es" || str.toLowerCase()=="esp" || str.toLowerCase()=="español") {
    lang = "esp";
    return "Español seleccionado";
  }
  else if (str.toLowerCase()=="gl" || str.toLowerCase()=="gal" || str.toLowerCase()=="galego") {
    lang = "gal"
    return "Galego seleccionado";
  }
  else {
    lang = "eng";
    return "Language not recognized. English is automatically assigned";
  }
}

exports.typeofproblem = function(){
  if (lang=="eng") {
    return "What type of problem do you want to solve? (Motion / Force / Momentum / Kinetic Energy) ";
  }
  else if (lang=="esp") {
    return "¿Qué tipo de problema quieres resolver? (Movimiento / Fuerza / Momento / Energía cinética) ";
  }
  else if (lang=="gal") {
    return "Qué tipo de problema qués resolver? (Movemento / Forza / Momento / Enerxía cinética) ";
  }
}

exports.unknownvalue = function(){
  if (lang=="eng") {
    return "What is your unknown value? ";
  }
  else if (lang=="esp") {
    return "¿Cuál es tu valor desconocido? ";
  }
  else if (lang=="gal") {
    return "Cal é o valor que descoñeces? ";
  }
}

exports.motionvalues = function(){
  if (lang=="eng") {
      return "(Distance / Velocity / Time / Acceleration) ";
    }
    else if (lang=="esp") {
      return "(Distancia / Velocidad / Tiempo / Aceleración) ";
    }
    else if (lang=="gal") {
      return "(Distancia / Velocidade / Tempo / Aceleración) ";
    }
}

exports.forcevalues = function(){
  if (lang=="eng") {
      return "(Force / Mass / Acceleration) ";
    }
    else if (lang=="esp") {
      return "(Fuerza / Masa / Aceleración) ";
    }
    else if (lang=="gal") {
      return "(Forza / Masa / Aceleración) ";
    }
}

exports.momentumvalues = function(){
  if (lang=="eng") {
      return "(Momentum / Mass / Velocity) ";
    }
    else if (lang=="esp") {
      return "(Momento / Masa / Velocidad) ";
    }
    else if (lang=="gal") {
      return "(Momento / Masa / Velocidade) ";
    }
}

exports.energyvalues = function(){
  if (lang=="eng") {
      return "(Energy / Mass / Velocity) ";
    }
    else if (lang=="esp") {
      return "(Energía / Masa / Velocidad) ";
    }
    else if (lang=="gal") {
      return "(Enerxía / Masa / Velocidade) ";
    }
}

exports.motion = function(){
  if (lang=="eng") {
    return "motion"
  }
  else if (lang=="esp") {
    return "movimiento"
  }
  else if (lang=="gal") {
    return "movemento"
  }
}

exports.distance = function(){
  if (lang=="eng") {
    return "distance"
  }
  else if (lang=="esp") {
    return "distancia"
  }
  else if (lang=="gal") {
    return "distancia"
  }
}

exports.whatisyourtime = function(){
  if (lang=="eng") {
    return "What is your time in seconds? "
  }
  else if (lang=="esp") {
    return "Cuánto es el tiempo en segundos? "
  }
  else if (lang=="gal") {
    return "Cánto é o tempo en segundos? "
  }
}

exports.whatisyourvelocity = function(){
  if (lang=="eng") {
    return "What is your velocity in m/s? ";
  }
  else if (lang=="esp") {
    return "Cuál es la velocidad en m/s? ";
  }
  else if (lang=="gal") {
    return "Cal é a velocidade en m/s? ";
  }
}

exports.isthereacceleration = function(){
  if (lang=="eng") {
    return "Is there any acceleration ? (Yes / No) ";
  }
  else if (lang=="esp") {
    return "Hay aceleración? (Si / No) ";
  }
  else if (lang=="gal") {
    return "Hai aceleración? (Si / Non) ";
  }
}

exports.whatisyouracceleration = function(){
  if (lang=="eng") {
    return "What is your acceleration in m/s2? ";
  }
  else if (lang=="esp") {
    return "Cuál es la aceleración en m/s2? ";
  }
  else if (lang=="gal") {
    return "Cal é a aceleración en m/s2? ";
  }
}

exports.notrecognized = function(){
  if (lang=="eng") {
    return "Not recognized. Please try again";
  }
  else if (lang=="esp") {
    return "Entrada desconocida. Por favor, reintentar";
  }
  else if (lang=="gal") {
    return "Non se recoñece. Por favor, volva a intentar";
  }
}

exports.yes = function(){
  if (lang=="eng") {
    return "yes";
  }
  else if (lang=="esp") {
    return "si";
  }
  else if (lang=="gal") {
    return "si";
  }
}

exports.y = function(){
  if (lang=="eng") {
    return "y";
  }
  else if (lang=="esp") {
    return "s";
  }
  else if (lang=="gal") {
    return "s";
  }
}

exports.no = function(){
  if (lang=="eng") {
    return "no";
  }
  else if (lang=="esp") {
    return "no";
  }
  else if (lang=="gal") {
    return "non";
  }
}

exports.n = function(){
  return "n";
}

exports.speed = function(){
    if (lang=="eng") {
      return "speed";
    }
    else if (lang=="esp") {
      return "velocidad";
    }
    else if (lang=="gal") {
      return "velocidade";
    }
}

exports.velocity = function(){
    if (lang=="eng") {
      return "velocity";
    }
    else if (lang=="esp") {
      return "velocidad";
    }
    else if (lang=="gal") {
      return "velocidade";
    }
}

exports.whatisyourdistance = function(){
    if (lang=="eng") {
      return "What is your distance in meters? ";
    }
    else if (lang=="esp") {
      return "Cuál es la distancia en metros? ";
    }
    else if (lang=="gal") {
      return "Cal é a distancia en metros? ";
    }
}

exports.time = function(){
    if (lang=="eng") {
      return "time";
    }
    else if (lang=="esp") {
      return "tiempo";
    }
    else if (lang=="gal") {
      return "tempo";
    }
}

exports.acceleration = function(){
    if (lang=="eng") {
      return "acceleration";
    }
    else if (lang=="esp") {
      return "aceleracion";
    }
    else if (lang=="gal") {
      return "aceleracion";
    }
}

exports.force = function(){
  if (lang=="eng") {
      return "force";
    }
    else if (lang=="esp") {
      return "fuerza";
    }
    else if (lang=="gal") {
      return "forza";
    }
}

exports.mass = function(){
  if (lang=="eng") {
      return "mass";
    }
    else if (lang=="esp") {
      return "masa";
    }
    else if (lang=="gal") {
      return "masa";
    }
}

exports.whatisyourforce = function(){
  if (lang=="eng") {
      return "What is your force in Newtons? ";
    }
    else if (lang=="esp") {
      return "Cuál es la fuerza en Newtowns? ";
    }
    else if (lang=="gal") {
      return "Cal é a forza en Newtowns? ";
    }
}

exports.whatisyourmass = function(){
  if (lang=="eng") {
      return "What is your mass in kilograms? ";
    }
    else if (lang=="esp") {
      return "Cuál es la masa en kilogramos? ";
    }
    else if (lang=="gal") {
      return "Cal é a masa en kilogramos? ";
    }
}

exports.momentum = function(){
  if (lang=="eng") {
      return "momentum";
    }
    else if (lang=="esp") {
      return "momento";
    }
    else if (lang=="gal") {
      return "momento";
    }
}

exports.whatisyourinitialvelocity = function(){
  if (lang=="eng") {
      return "What is your initial speed in m/s? ";
    }
    else if (lang=="esp") {
      return "Cuál es la velocidad inicial en m/s? ";
    }
    else if (lang=="gal") {
      return "Cal é a velocidade inicial en m/s? ";
    }
}

exports.whatisyourfinalvelocity = function(){
  if (lang=="eng") {
      return "What is your final speed in m/s? ";
    }
    else if (lang=="esp") {
      return "Cuál es la velocidad final en m/s? ";
    }
    else if (lang=="gal") {
      return "Cal é a velocidade final en m/s? ";
    }
}

exports.whatisyourmomentum = function(){
  if (lang=="eng") {
      return "What is your momentum? ";
    }
    else if (lang=="esp") {
      return "Cuál es el momento? ";
    }
    else if (lang=="gal") {
      return "Cal é o momento? ";
    }
}

exports.energy = function(){
  if (lang=="eng") {
      return "energy";
    }
    else if (lang=="esp") {
      return "energia";
    }
    else if (lang=="gal") {
      return "Cal é o momento? ";
    }
}

exports.kineticenergy = function(){
  if (lang=="eng") {
      return "kinetic energy";
    }
    else if (lang=="esp") {
      return "energia cinetica";
    }
    else if (lang=="gal") {
      return "energia cinetica";
    }
}

exports.problemonlycalculateskinetic = function(){
  if (lang=="eng") {
      return "ATTENTION. This program ONLY calculates KINETIC ENERGY, not potential or any others";
    }
    else if (lang=="esp") {
      return "ATENCIÓN. Este programa SOLAMENTE resuelve problemas de ENERGÍA CINÉTICA, no potencial o ningúna otra";
    }
    else if (lang=="gal") {
      return "ATENCIÓN. Este programa SOAMENTE resolve problemas de ENERXÍA CINÉTICA, non potencial ou ningunha outra";
    }
}

exports.whatisyourkinetic = function(){
  if (lang=="eng") {
      return "What is your KINETIC energy in joules? ";
    }
    else if (lang=="esp") {
      return "Cuál es la energía CINÉTICA en julios? ";
    }
    else if (lang=="gal") {
      return "Cal é a enerxía CINÉTICA en joules? ";
    }
}

exports.dontknowhowto = function(){
  if (lang=="eng") {
      return "I actually don't know how to do that. Go ask your physics teacher.";
    }
    else if (lang=="esp") {
      return "No sé como hacer eso. Pregúntale a tu profe de física";
    }
    else if (lang=="gal") {
      return "Eu eso non o sei facer. Pregúntalle ao teu profe de física";
    }
}
