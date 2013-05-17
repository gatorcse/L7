// Generated by CoffeeScript 1.6.2
(function() {
  var hl7, parser, should, vows;

  vows = require('vows');

  should = require('should');

  parser = require('..');

  vows.describe('to string').addBatch({
    'basic test': {
      topic: function() {
        return parser.parse(hl7);
      },
      'to string mirrors original': function(msg) {
        return msg.toString().should.eql(hl7);
      }
    }
  })["export"](module);

  hl7 = "MSH|^~\\&|REG^REG^|XYZ|GOBLET|ZYX|20050912110538|SI&U|SIU^S12|4676115|P|2.3\nPID|||353966||SMITH^JOHN^^^^||19820707|F||C|108 MAIN STREET ^^ANYTOWN^TX^77777^^|HARV|(512)555-0170|||||00362103|123-45-6789||||||||||||\nSCH|1||||||NEW||||20050912110230^20050912110430||||||||||||||||||^^^^^^||3|\nPV1||O|SEROT|3|||1284^JOHNSON^MIKE^S.^^MD~|||SEROT||||1|||1284^JOHNSON^MIKE^S.^^ MD|SERIES|787672|B|||||||||N||||||||||||A|||20050912110230|||||| PV2|||HAND BRACE NEEDS REPAIRED|||||||||||20050912||||||||||A||20050725|||||O||||||\nNK1|0001|HULK^INCREDIBLE|M|123 FAKE ST^^OUTLAND^^00000|123456789||";

}).call(this);
