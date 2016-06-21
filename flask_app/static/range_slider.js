// ----------------------------------------------------------------------------------------- date ----- //
$("#dateSlider").dateRangeSlider({arrows:false},
                                 {bounds:{min: new Date(1992, 9, 4), max: new Date(2012, 3, 4)}},
                                 {defaultValues:{min: new Date(1992, 9, 4), max: new Date(2012, 3, 4)}},
                                 {valueLabels:"change", delayOut: 4000, durationIn: 1000, durationOut: 1000},
                                 {step:{days:1}},
                                 {wheelMode: "scroll"/*, wheelSpeed: 1*/});

// ------------------------------------------------------------------------------------- latitude ----- //
$("#slider_lat").rangeSlider({arrows:false},
                             {bounds:{min: -90, max: 90}},
                             {defaultValues:{min: -90, max: 90}},
                             {valueLabels:"change", delayOut: 4000, durationIn: 1000, durationOut: 1000},
                             {step: 1},
                             {wheelMode: "scroll"/*, wheelSpeed: 1*/});

// ------------------------------------------------------------------------------------ longitude ----- //
$("#slider_lon").rangeSlider({arrows:false},
                             {bounds:{min: 0, max: 360}},
                             {defaultValues:{min: 0, max: 360}},
                             {valueLabels:"change", delayOut: 4000, durationIn: 1000, durationOut: 1000},
                             {step: 1},
                             {wheelMode: "scroll"/*, wheelSpeed: 1*/});

// ------------------------------------------------------------------------------------- duration ----- //
$("#slider_dur").rangeSlider({arrows:false},
                             {bounds:{min: 3, max: 167}},
                             {defaultValues:{min: 3, max: 167}},
                             {valueLabels:"change", delayOut: 4000, durationIn: 1000, durationOut: 1000},
                             {step: 1},
                             {wheelMode: "scroll"/*, wheelSpeed: 1*/});