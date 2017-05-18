const readline = require('readline');
const equations = require('./physics')

function getLang(){
  let lang = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  lang.question("Please select a language... (English / Español / Galego) ", function (str){
    console.log(equations.selectlanguage(str));
    lang.close();
    getInput();
  });
}

function getInput(){
    let physics = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

        physics.question(equations.lang_typeofproblem(), function(str){
          if (str.toLowerCase()==equations.lang_motion()) {
            physics.question(equations.lang_unknownvalue()+equations.lang_motionvalues(), function(str){
              if (str.toLowerCase()==equations.lang_distance()) {
                physics.question(equations.lang_whatisyourtime(), function(str){
                  let t = str;
                    physics.question(equations.lang_whatisyourvelocity(), function(str){
                      let v = str;
                        physics.question(equations.lang_isthereacceleration(), function(str){
                          if (str.toLowerCase()==equations.lang_no() || str.toLowerCase()==equations.lang_n()) {
                            let a = 0;
                            console.log(equations.motion_distance(t,v));
                            physics.close();
                          }
                          else if (str.toLowerCase()==equations.lang_yes() || str.toLowerCase()==equations.lang_y()){
                            physics.question(equations.lang_whatisyouracceleration(), function(str){
                              let a = str;
                              console.log(equations.motion_distance_wa(t,v,a));
                              physics.close();
                            });
                          }
                          else {
                            console.log(equations.lang_notrecognized());
                            physics.close();
                            getInput();
                          }
                        });
                      });
                });
              }
              else if (str.toLowerCase()==equations.lang_speed() || str.toLowerCase()==equations.lang_velocity()) {
                physics.question(equations.lang_whatisyourtime(), function(str){
                  let t = str;
                  physics.question(equations.lang_whatisyourdistance(), function(str){
                    let d = str;
                    physics.question(equations.lang_isthereacceleration(), function(str){
                      if (str.toLowerCase()==equations.lang_no() || str.toLowerCase()==equations.lang_n()) {
                        let a = 0;
                        console.log(equations.motion_velocity(t,d));
                        physics.close();
                      }
                      else if (str.toLowerCase()==equations.lang_yes() || str.toLowerCase()==equations.lang_y()) {
                        physics.question(equations.lang_whatisyouracceleration(),function (str){
                          let a = str;
                          console.log(equations.motion_velocity_wa(t,d,a));
                          physics.close();
                        }) ;
                      }
                      else {
                        console.log(equations.lang_notrecognized());
                        physics.close();
                        getInput();
                      }
                    });
                  });
                });
              }
              else if (str.toLowerCase()==equations.lang_time()) {
                physics.question(equations.lang_whatisyourdistance(), function(str){
                  let d = str;
                    physics.question(equations.lang_whatisyourvelocity(), function(str){
                      let v = str;
                        physics.question(equations.lang_isthereacceleration(),function(str){
                          if (str.toLowerCase()==equations.lang_no() || str.toLowerCase()==equations.lang_n()) {
                            let a = 0;
                            console.log(equations.motion_time(d,v));
                            physics.close();
                          }
                          else if (str.toLowerCase()==equations.lang_yes() || str.toLowerCase()==equations.lang_y()) {
                            physics.question(equations.lang_whatisyouracceleration(),function(str){
                              let a = str;
                              console.log(equations.motion_time_wa(d,v,a));
                              physics.close();
                            });
                          }
                          else {
                            console.log(equations.lang_notrecognized());
                            physics.close();
                            getInput();
                          }
                        });
                });
                });
              }
              else if (str.toLowerCase()==equations.lang_acceleration()) {
                physics.question(equations.lang_whatisyourdistance(), function(str){
                  let d = str;
                  physics.question(equations.lang_whatisyourvelocity(), function(str){
                    let v = str;
                    physics.question(equations.lang_whatisyourtime(), function(str){
                      let t = str;
                      console.log(equations.motion_acceleration(d,v,t));
                      physics.close();
                    });
                  });
                });
              }
              else {
                console.log(equations.lang_notrecognized())
                physics.close();
                getInput();
              }
          });
          }

          else if (str.toLowerCase()==equations.lang_force()) {
            physics.question(equations.lang_unknownvalue()+equations.lang_forcevalues(), function(str){
              if (str.toLowerCase()==equations.lang_force()) {
                physics.question(equations.lang_whatisyourmass(), function(str){
                  let m = str;
                  physics.question(equations.lang_whatisyouracceleration(), function(str){
                    let a = str;
                    console.log(equations.force_force(m,a));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()==equations.lang_mass()) {
                physics.question(equations.lang_whatisyourforce(), function(str){
                  let f = str;
                  physics.question(equations.lang_whatisyouracceleration(), function(str){
                    let a = str;
                    console.log(equations.force_mass(f,a));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()==equations.lang_acceleration()) {
                physics.question(equations.lang_whatisyourforce(), function(str){
                  let f = str;
                  physics.question(equations.lang_whatisyourmass(), function(str){
                    let m = str;
                    console.log(equations.force_acceleration(f,m));
                    physics.close();
                  });
                });
              }
              else {
                console.log(equations.lang_notrecognized());
                physics.close();
                getInput();
              }
            });
          }
          else if (str.toLowerCase()==equations.lang_momentum()) {
            physics.question(equations.lang_unknownvalue()+equations.lang_momentumvalues(), function(str){
              if (str.toLowerCase()==equations.lang_momentum()) {
                physics.question(equations.lang_whatisyourmass(), function(str){
                  let m = str;
                  physics.question(equations.lang_whatisyourinitialvelocity(), function(str){
                    let vi = str;
                    physics.question(equations.lang_whatisyourfinalvelocity(), function(str){
                      let vf = str;
                      let v = vf-vi;
                      console.log(equations.momentum_momentum(m,v));
                      physics.close();
                    });
                  });
                });
              }
              else if (str.toLowerCase()==equations.lang_mass()) {
                physics.question(equations.lang_whatisyourmomentum(),function(str){
                  let p = str;
                  physics.question(equations.lang_whatisyourinitialvelocity(), function(str){
                    let vi = str;
                    physics.question(equations.lang_whatisyourfinalvelocity(), function(str){
                      let vf = str;
                      let v = vf-vi;
                      console.log(equations.momentum_mass(p,v));
                      physics.close();
                    });
                  });
                });
              }
              else if (str.toLowerCase()==equations.lang_speed() || str.toLowerCase()==equations.lang_velocity()) {
                physics.question(equations.lang_whatisyourmomentum(),function(str){
                  let p = str;
                  physics.question(equations.lang_whatisyourmass(), function(str){
                    let m = str;
                    console.log(equations.momentum_velocity(p,m));
                    physics.close();
                  });
                });
              }
              else {
                console.log(equations.lang_notrecognized());
                physics.close();
                getInput();
              }
            });
          }
          else if (str.toLowerCase()==equations.lang_energy() || str.toLowerCase()==equations.lang_kineticenergy()) {
            if (str.toLowerCase()==equations.lang_energy()){
              console.log(equations.lang_problemonlycalculateskinetic())
            }
            physics.question(equations.lang_unknownvalue()+equations.lang_energyvalues(),function(str){
              if (str.toLowerCase()==equations.lang_energy() || str.toLowerCase()==equations.lang_kineticenergy()) {
                physics.question(equations.lang_whatisyourmass(), function(str){
                  let m = str;
                  physics.question(equations.lang_whatisyourvelocity(), function(str){
                    let v = str;
                    console.log(equations.energy_energy(m,v));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()==equations.lang_mass()) {
                physics.question(equations.lang_whatisyourkinetic(), function(str){
                  let ec = str;
                  physics.question(equations.lang_whatisyourvelocity(), function(str){
                    let v = str;
                    console.log(equations.energy_mass(ec,v));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()==equations.lang_speed() || str.toLowerCase()==equations.lang_velocity()) {
                physics.question(equations.lang_whatisyourkinetic(), function(str){
                  let ec = str;
                  physics.question(equations.lang_whatisyourmass(), function(str){
                    let m = str;
                    console.log(equations.energy_velocity(ec,m));
                    physics.close();
                  });
                });
              }
              else {
                console.log(equations.lang_notrecognized());
                physics.close();
                getInput();
              }
            });
          }
          else {
            console.log(equations.lang_notrecognized())
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
