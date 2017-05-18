const readline = require('readline');
const equations = require('./equations')
const lang = require('./language')


function getLang(){
  let language = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  language.question("Please select a language... (English / Español / Galego) ", function (str){
    console.log(lang.selectlanguage(str));
    language.close();
    getInput();
  });
}

function getInput(){
    let physics = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

        physics.question(lang.typeofproblem(), function(str){
          if (str.toLowerCase()==lang.motion()) {
            physics.question(lang.unknownvalue()+lang.motionvalues(), function(str){
              if (str.toLowerCase()==lang.distance()) {
                physics.question(lang.whatisyourtime(), function(str){
                  let t = str;
                    physics.question(lang.whatisyourvelocity(), function(str){
                      let v = str;
                        physics.question(lang.isthereacceleration(), function(str){
                          if (str.toLowerCase()==lang.no() || str.toLowerCase()==lang.n()) {
                            let a = 0;
                            console.log(equations.motion_distance(t,v));
                            physics.close();
                          }
                          else if (str.toLowerCase()==lang.yes() || str.toLowerCase()==lang.y()){
                            physics.question(lang.whatisyouracceleration(), function(str){
                              let a = str;
                              console.log(equations.motion_distance_wa(t,v,a));
                              physics.close();
                            });
                          }
                          else {
                            console.log(lang.notrecognized());
                            physics.close();
                            getInput();
                          }
                        });
                      });
                });
              }
              else if (str.toLowerCase()==lang.speed() || str.toLowerCase()==lang.velocity()) {
                physics.question(lang.whatisyourtime(), function(str){
                  let t = str;
                  physics.question(lang.whatisyourdistance(), function(str){
                    let d = str;
                    physics.question(lang.isthereacceleration(), function(str){
                      if (str.toLowerCase()==lang.no() || str.toLowerCase()==lang.n()) {
                        let a = 0;
                        console.log(equations.motion_velocity(t,d));
                        physics.close();
                      }
                      else if (str.toLowerCase()==lang.yes() || str.toLowerCase()==lang.y()) {
                        physics.question(lang.whatisyouracceleration(),function (str){
                          let a = str;
                          console.log(equations.motion_velocity_wa(t,d,a));
                          physics.close();
                        }) ;
                      }
                      else {
                        console.log(lang.notrecognized());
                        physics.close();
                        getInput();
                      }
                    });
                  });
                });
              }
              else if (str.toLowerCase()==lang.time()) {
                physics.question(lang.whatisyourdistance(), function(str){
                  let d = str;
                    physics.question(lang.whatisyourvelocity(), function(str){
                      let v = str;
                        physics.question(lang.isthereacceleration(),function(str){
                          if (str.toLowerCase()==lang.no() || str.toLowerCase()==lang.n()) {
                            let a = 0;
                            console.log(equations.motion_time(d,v));
                            physics.close();
                          }
                          else if (str.toLowerCase()==lang.yes() || str.toLowerCase()==lang.y()) {
                            physics.question(lang.whatisyouracceleration(),function(str){
                              let a = str;
                              console.log(equations.motion_time_wa(d,v,a));
                              physics.close();
                            });
                          }
                          else {
                            console.log(lang.notrecognized());
                            physics.close();
                            getInput();
                          }
                        });
                });
                });
              }
              else if (str.toLowerCase()==lang.acceleration()) {
                physics.question(lang.whatisyourdistance(), function(str){
                  let d = str;
                  physics.question(lang.whatisyourvelocity(), function(str){
                    let v = str;
                    physics.question(lang.whatisyourtime(), function(str){
                      let t = str;
                      console.log(equations.motion_acceleration(d,v,t));
                      physics.close();
                    });
                  });
                });
              }
              else {
                console.log(lang.notrecognized())
                physics.close();
                getInput();
              }
          });
          }

          else if (str.toLowerCase()==lang.force()) {
            physics.question(lang.unknownvalue()+lang.forcevalues(), function(str){
              if (str.toLowerCase()==lang.force()) {
                physics.question(lang.whatisyourmass(), function(str){
                  let m = str;
                  physics.question(lang.whatisyouracceleration(), function(str){
                    let a = str;
                    console.log(equations.force_force(m,a));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()==lang.mass()) {
                physics.question(lang.whatisyourforce(), function(str){
                  let f = str;
                  physics.question(lang.whatisyouracceleration(), function(str){
                    let a = str;
                    console.log(equations.force_mass(f,a));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()==lang.acceleration()) {
                physics.question(lang.whatisyourforce(), function(str){
                  let f = str;
                  physics.question(lang.whatisyourmass(), function(str){
                    let m = str;
                    console.log(equations.force_acceleration(f,m));
                    physics.close();
                  });
                });
              }
              else {
                console.log(lang.notrecognized());
                physics.close();
                getInput();
              }
            });
          }
          else if (str.toLowerCase()==lang.momentum()) {
            physics.question(lang.unknownvalue()+lang.momentumvalues(), function(str){
              if (str.toLowerCase()==lang.momentum()) {
                physics.question(lang.whatisyourmass(), function(str){
                  let m = str;
                  physics.question(lang.whatisyourinitialvelocity(), function(str){
                    let vi = str;
                    physics.question(lang.whatisyourfinalvelocity(), function(str){
                      let vf = str;
                      let v = vf-vi;
                      console.log(equations.momentum_momentum(m,v));
                      physics.close();
                    });
                  });
                });
              }
              else if (str.toLowerCase()==lang.mass()) {
                physics.question(lang.whatisyourmomentum(),function(str){
                  let p = str;
                  physics.question(lang.whatisyourinitialvelocity(), function(str){
                    let vi = str;
                    physics.question(lang.whatisyourfinalvelocity(), function(str){
                      let vf = str;
                      let v = vf-vi;
                      console.log(equations.momentum_mass(p,v));
                      physics.close();
                    });
                  });
                });
              }
              else if (str.toLowerCase()==lang.speed() || str.toLowerCase()==lang.velocity()) {
                physics.question(lang.whatisyourmomentum(),function(str){
                  let p = str;
                  physics.question(lang.whatisyourmass(), function(str){
                    let m = str;
                    console.log(equations.momentum_velocity(p,m));
                    physics.close();
                  });
                });
              }
              else {
                console.log(lang.notrecognized());
                physics.close();
                getInput();
              }
            });
          }
          else if (str.toLowerCase()==lang.energy() || str.toLowerCase()==lang.kineticenergy()) {
            if (str.toLowerCase()==lang.energy()){
              console.log(lang.problemonlycalculateskinetic())
            }
            physics.question(lang.unknownvalue()+lang.energyvalues(),function(str){
              if (str.toLowerCase()==lang.energy() || str.toLowerCase()==lang.kineticenergy()) {
                physics.question(lang.whatisyourmass(), function(str){
                  let m = str;
                  physics.question(lang.whatisyourvelocity(), function(str){
                    let v = str;
                    console.log(equations.energy_energy(m,v));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()==lang.mass()) {
                physics.question(lang.whatisyourkinetic(), function(str){
                  let ec = str;
                  physics.question(lang.whatisyourvelocity(), function(str){
                    let v = str;
                    console.log(equations.energy_mass(ec,v));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()==lang.speed() || str.toLowerCase()==lang.velocity()) {
                physics.question(lang.whatisyourkinetic(), function(str){
                  let ec = str;
                  physics.question(lang.whatisyourmass(), function(str){
                    let m = str;
                    console.log(equations.energy_velocity(ec,m));
                    physics.close();
                  });
                });
              }
              else {
                console.log(lang.notrecognized());
                physics.close();
                getInput();
              }
            });
          }
          else {
            console.log(lang.notrecognized())
            physics.close();
            getInput();
          }
        });
}

let z = "Manolo!!!";
if (z=="Qué che parese?") {
  console.log("Justouche, eh??");
}

getLang();

//github 8ctorres
