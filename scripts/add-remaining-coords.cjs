// Script to add remaining lat/lng coordinates to cities that are missing them
const fs = require('fs');
const path = require('path');

const remainingCoords = {
  "barsbuettel": [53.5667, 10.1833],
  "appen": [53.6500, 9.7667],
  "bendestorf": [53.3500, 9.9667],
  "norderstedt-garstedt": [53.6833, 10.0000],
  "maschen": [53.3833, 10.0167],
  "hittfeld": [53.3833, 9.9500],
  "meckelfeld": [53.4167, 10.0333],
  "steinkirchen": [53.5167, 9.6167],
  "oldendorf-elbe": [53.5667, 9.3667],
  "handorf": [53.3000, 10.3167],
  "brietlingen": [53.3167, 10.4333],
  "tespe": [53.3833, 10.3833],
  "marschacht": [53.4167, 10.3667],
  "drage": [53.4333, 10.3500],
  "hoopte": [53.4333, 10.2333],
  "over": [53.4333, 10.2000],
  "asendorf": [53.3167, 10.4500],
  "garlstorf": [53.2833, 10.0500],
  "soderstorf": [53.2000, 10.1167],
  "betzendorf": [53.1833, 10.2667],
  "kirchgellersen": [53.2333, 10.3000],
  "westergellersen": [53.2333, 10.2667],
  "radbruch": [53.3167, 10.2833],
  "rottorf": [53.3833, 10.1500],
  "pattensen": [53.2667, 10.2333],
  "luhdorf": [53.3833, 10.0500],
  "spröetze": [53.3500, 9.8667],
  "holm-seppensen": [53.3000, 9.8333],
  "dibbersen": [53.3500, 9.8333],
  "trelde": [53.4667, 9.6000],
  "kakenstorf": [53.4000, 9.7500],
  "welle": [53.4167, 9.6000],
  "wistedt": [53.3333, 9.7667],
  "handeloh": [53.2500, 9.8167],
  "wörme": [53.2333, 9.8500],
  "inzmühlen": [53.1500, 9.8667],
  "wintermoor": [53.2000, 9.8500],
  "neuenkirchen-heide": [53.1000, 9.7500],
  "müden-örtze": [52.8833, 10.0833],
  "unterlüß": [52.8500, 10.2333],
  "eimke": [52.9667, 10.5333],
  "evendorf": [53.1833, 10.3500],
  "lüchow": [52.9667, 11.1500],
  "bremen": [53.0793, 8.8017],
  "bremerhaven": [53.5396, 8.5809],
  "rotenburg-wuemme": [53.1117, 9.4094],
  "verden": [52.9236, 9.2356],
  "achim": [53.0167, 9.0333],
  "oyten": [53.0500, 9.0167],
  "ottersberg": [53.1167, 9.1500],
  "lilienthal": [53.1455, 8.9131],
  "worpswede": [53.2167, 8.9333],
  "osterholz-scharmbeck": [53.2289, 8.7933],
  "ritterhude": [53.1833, 8.7667],
  "schwanewede": [53.2333, 8.6000],
  "stuhr": [53.0333, 8.7500],
  "weyhe": [52.9833, 8.8667],
  "syke": [52.9167, 8.8167],
  "bassum": [52.8500, 8.7333],
  "twistringen": [52.8000, 8.6500],
  "diepholz": [52.6067, 8.3706],
  "sulingen": [52.6833, 8.8000],
  "zeven": [53.2967, 9.2750],
  "sittensen": [53.2833, 9.5000],
  "tarmstedt": [53.2333, 9.0833],
  "sottrum": [53.1167, 9.2333],
  "scheessel": [53.1667, 9.4833],
  "fintel": [53.1667, 9.6500],
  "lauenbrück": [53.2000, 9.5667],
  "gyhum": [53.2000, 9.3000],
  "visselhövede": [52.9833, 9.5833],
  "bothel": [53.0667, 9.5000],
  "brockel": [53.0500, 9.5167],
  "hemsbünde": [53.1000, 9.3833],
  "kirchwalsede": [53.0167, 9.5333],
  "thedinghausen": [52.9667, 9.0333],
  "dörverden": [52.8500, 9.2333],
  "kirchlinteln": [52.9333, 9.3167],
  "langwedel": [52.9667, 9.1833],
  "blender": [52.9333, 9.1333],
  "emtinghausen": [52.9500, 9.0000],
  "grasberg": [53.1833, 8.9833],
  "hambergen": [53.3000, 8.8333],
  "gnarrenburg": [53.3833, 9.0167],
  "bremervörde": [53.4833, 9.1333],
  "beverstedt": [53.4333, 8.8167],
  "loxstedt": [53.4667, 8.6500],
  "schiffdorf": [53.5333, 8.6500],
  "hagen-im-bremischen": [53.3500, 8.6500],
  "ganderkesee": [53.0333, 8.5333],
  "hude": [53.1067, 8.4617],
  "wildeshausen": [52.9000, 8.4333],
  "dötlingen": [52.9333, 8.3833],
  "wardenburg": [53.0667, 8.1833],
  "hatten": [53.0167, 8.4000],
  "großenkneten": [52.9333, 8.2667],
  "bad-zwischenahn": [53.1833, 8.0000],
  "wiefelstede": [53.2500, 8.1167],
  "rastede": [53.2500, 8.2000],
  "westerstede": [53.2500, 7.9333],
  "edewecht": [53.1333, 7.9833],
  "apen": [53.2167, 7.8167],
  "barssel": [53.1667, 7.7500],
  "elsfleth": [53.2333, 8.4667],
  "lemwerder": [53.1667, 8.6167],
  "berne": [53.1833, 8.5333],
  "stadland": [53.3833, 8.4333],
  "butjadingen": [53.5333, 8.3333],
  "jade": [53.3500, 8.2500],
};

const filePath = path.join(__dirname, '..', 'src', 'data', 'cities.ts');
let content = fs.readFileSync(filePath, 'utf8');

let added = 0;
for (const [slug, [lat, lng]] of Object.entries(remainingCoords)) {
  // Try both CRLF and LF patterns
  const patternCRLF = `slug: "${slug}",\r\n        name:`;
  const patternLF = `slug: "${slug}",\n        name:`;
  
  if (content.includes(patternCRLF)) {
    content = content.replace(patternCRLF, `slug: "${slug}",\r\n        lat: ${lat},\r\n        lng: ${lng},\r\n        name:`);
    added++;
  } else if (content.includes(patternLF)) {
    content = content.replace(patternLF, `slug: "${slug}",\n        lat: ${lat},\n        lng: ${lng},\n        name:`);
    added++;
  } else {
    console.log(`⚠️  Not found: ${slug}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`✅ Added coordinates to ${added} more cities`);
