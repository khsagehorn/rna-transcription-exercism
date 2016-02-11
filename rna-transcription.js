var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input){
  var rna = [];

  for (var i = 0; i < input.length; i++) {
    if (input[i] === "C"){
      rna.push("G");
    }
    if (input[i] === "G") {
      rna.push("C");
    }
    if (input[i] === "A") {
      rna.push("U");
    }
    if (input[i] === "T") {
      rna.push("A");
    }
  }
  return rna.join("");
}





module.exports = DnaTranscriber;