pragma circom 2.0.0;

include "./node_modules/circomlib/circuits/poseidon.circom";

template Main() {

    // PRIVATES INPUTS
    signal input  password;
    signal input salt;
    signal input uid;
    // PUBLIC INPUTS
    signal input hashInput;
    // OUTPUTS
    signal output hashOutput;
    // POSEIDON CIRCUIT
    component hash = Poseidon(3);
    // INPUTS POSEIDON CIRCUIT
    hash.inputs[0] <== password;
    hash.inputs[1] <== salt;
    hash.inputs[2] <== uid
    
    hashInput === hash.out;

    hashOutput <== hash.out;

}

component main {public [hashInput]} = Main();