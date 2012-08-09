/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.6",
   build: "0.11.0.150",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'building',
            type:'image',
            rect:[121,57,350,300],
            fill:["rgba(0,0,0,0)",im+"building.jpg"],
            transform:[[-121,-57]]
         },
         {
            id:'behrens',
            type:'image',
            rect:[534,108,350,300],
            fill:["rgba(0,0,0,0)",im+"behrens.png"],
            transform:[[-184,-108]]
         },
         {
            id:'Behnrens_text',
            type:'text',
            rect:[140,84,0,0],
            text:"Andre Behrens",
            align:"auto",
            font:['Arial, Helvetica, sans-serif',27,"rgba(41,51,80,1.00)","normal","none","normal"],
            transform:[[-21,-13]]
         },
         {
            id:'gage',
            type:'image',
            rect:[350,0,350,300],
            fill:["rgba(0,0,0,0)",im+"gage.png"],
            transform:[[0,-3]]
         },
         {
            id:'Gage_text',
            type:'text',
            rect:[156,66,0,0],
            text:"Zach Gage",
            align:"auto",
            font:['Arial, Helvetica, sans-serif',26,"rgba(19,19,17,1.00)","normal","none","normal"],
            transform:[[62,202]]
         },
         {
            id:'ashjenas',
            type:'image',
            rect:[350,0,350,300],
            fill:["rgba(0,0,0,0)",im+"ashjenas.png"]
         },
         {
            id:'Text4',
            type:'text',
            rect:[27,35,0,0],
            text:"Backbone.js",
            align:"auto",
            font:['Arial, Helvetica, sans-serif',26,"rgba(25,59,77,1.00)","normal","none","normal"],
            transform:[[-20,83]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_building}": [
            ["transform", "translateX", '-121px'],
            ["transform", "translateY", '-57px']
         ],
         "${_Gage_text}": [
            ["transform", "translateX", '62.82px'],
            ["color", "color", 'rgba(19,19,17,1.00)'],
            ["transform", "translateY", '202.99px'],
            ["style", "clip", [31,126,31,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "font-size", '26px']
         ],
         "${_Stage}": [
            ["style", "height", '300px'],
            ["style", "width", '350px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden']
         ],
         "${_gage}": [
            ["transform", "translateX", '0px']
         ],
         "${_Behnrens_text}": [
            ["transform", "translateX", '-21px'],
            ["color", "color", 'rgba(41,51,80,1.00)'],
            ["transform", "translateY", '-13.47px'],
            ["style", "clip", [0,231,40,230], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "font-size", '27px']
         ],
         "${_ashjenas}": [
            ["transform", "translateX", '0px']
         ],
         "${_behrens}": [
            ["transform", "translateX", '-184px'],
            ["transform", "translateY", '-108px']
         ],
         "${_Text4}": [
            ["color", "color", 'rgba(25,59,77,1.00)'],
            ["transform", "translateX", '-20.22px'],
            ["style", "clip", [0,0,31,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '83.99px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         labels: {
            "tr_2": 3000,
            "tr_3": 5000,
            "tr_4": 7000
         },
         timeline: [
            { id: "eid25", tween: [ "transform", "${_gage}", "translateX", '-350.01px', { fromValue: '0px'}], position: 5250, duration: 500, easing: "easeOutQuint" },
            { id: "eid32", tween: [ "transform", "${_gage}", "translateX", '-699.99px', { fromValue: '-350.01px'}], position: 7250, duration: 500, easing: "easeOutQuint" },
            { id: "eid31", tween: [ "transform", "${_ashjenas}", "translateX", '-349.98px', { fromValue: '0px'}], position: 7250, duration: 500, easing: "easeOutQuint" },
            { id: "eid39", tween: [ "transform", "${_ashjenas}", "translateX", '-700px', { fromValue: '-349.98px'}], position: 9250, duration: 500, easing: "easeOutQuint" },
            { id: "eid15", tween: [ "style", "${_Behnrens_text}", "clip", [0,231,40,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,231,40,230]}], position: 3500, duration: 250 },
            { id: "eid27", tween: [ "style", "${_Behnrens_text}", "clip", [0,231,40,231], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,231,40,0]}], position: 5000, duration: 250 },
            { id: "eid4", tween: [ "transform", "${_building}", "translateX", '-470.99px', { fromValue: '-121px'}], position: 3000, duration: 500, easing: "easeOutQuint" },
            { id: "eid37", tween: [ "transform", "${_building}", "translateX", '229px', { fromValue: '-470.99px'}], position: 3500, duration: 5500, easing: "easeOutQuint" },
            { id: "eid40", tween: [ "transform", "${_building}", "translateX", '-121.02px', { fromValue: '229px'}], position: 9250, duration: 500, easing: "easeOutQuint" },
            { id: "eid3", tween: [ "transform", "${_behrens}", "translateX", '-533.99px', { fromValue: '-184px'}], position: 3000, duration: 500, easing: "easeOutQuint" },
            { id: "eid26", tween: [ "transform", "${_behrens}", "translateX", '-884px', { fromValue: '-533.99px'}], position: 5250, duration: 500, easing: "easeOutQuint" },
            { id: "eid29", tween: [ "style", "${_Gage_text}", "clip", [0,126,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [31,126,31,0]}], position: 5750, duration: 250 },
            { id: "eid30", tween: [ "style", "${_Gage_text}", "clip", [32,126,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,126,31,0]}], position: 7000, duration: 250 },
            { id: "eid36", tween: [ "style", "${_Text4}", "clip", [0,139,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,31,0]}], position: 7750, duration: 250 },
            { id: "eid38", tween: [ "style", "${_Text4}", "clip", [0,0,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,139,31,0]}], position: 9000, duration: 250 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-295157840");
