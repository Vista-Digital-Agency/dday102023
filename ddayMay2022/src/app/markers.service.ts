import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkersService {

  constructor() {
    
  }

/*  Under Construction
    {
      lat: 37.330858, 
      lng: -79.537261,
      image: "learningCenter"
    },
*/

/*colors
Green: #008b3a
Blue: #214281
Orange: #f49200
Red: #d32324*/

  getLabels() {
    var labels = [
      {
        lat: 37.331231, 
        lng: -79.536121,
        image: "reynoldsGarden"
      },
      {
        lat: 37.331101, 
        lng: -79.537031,
        image: "victoryGarden"
      },
      {
        lat: 37.330755, 
        lng: -79.535956,
        image: "grayPlaza"
      },
      {
        lat: 37.330724, 
        lng: -79.536563,
        image: "homage"
      },
      {
        lat: 37.330762, 
        lng: -79.537273,
        image: "giftShop"
      },
      {
        lat: 37.330514, 
        lng: -79.537297,
        image: "pavilion"
      },
      {
        lat: 37.330169, 
        lng: -79.537296,
        image: "smokingArea"
      },
      {
        lat: 37.330058, 
        lng: -79.535798,
        image: "estesPlaza"
      },
      {
        lat: 37.329470, 
        lng: -79.536309,
        image: "parade"
      }
    ];
    
    return labels;
  }

  getMarkers() {
    var markers = [
      {
        number: 1,
        name: 'Homage',
        section: 'Reynolds Garden',
        lat: 37.331222,
        lng: -79.535837,
        info: "Centered within the garden folly stands The Supreme Commander, a sculpture of General Dwight D. Eisenhower, Supreme Commander for Operation Overlord. Overhead, a tile mosaic map depicts the plan for the coming invasion. Eisenhower is surrounded by portrait busts of his principal subordinates: Air Chief Marshal Sir Arthur William Tedder, Deputy Supreme Commander; Admiral Sir Bertram H. Ramsay, Allied Naval Commander; Air Chief Marshal Sir Trafford L. Leigh-Mallory, Allied Air Forces Commander; Field Marshal Sir Bernard L. Montgomery, D-Day Assault Commander; Lt. Gen. Omar N. Bradley, U.S. 1st Army Commander; and Lt. Gen. Walter Bedell Smith, Chief of Staff."
      },
      {
        number: 2,
        name: '',
        section: 'Reynolds Garden',
        lat: 37.331123, 
        lng: -79.535338,
        info: "Portrait bust of Winston Churchill at the northeast entryway. Churchill was prime minister of the United Kingdom for most of the war, from 1940 to 1945. His tenacity, leadership, and eloquence were crucial to England’s fighting spirit and key ingredients to victory."
      },
      {
        number: 3,
        name: '',
        section: 'Reynolds Garden',
        lat: 37.331200,
        lng: -79.536494,
        info: "Portrait bust of Franklin Delano Roosevelt at the northwest entryway. Roosevelt, United States president from 1933 to 1945, presided over the American war effort with unshakable determination. He envisioned not only victory, but a workable peace afterward. Sadly, he didn’t live to see his dream become reality, dying of a stroke in April 1945."
      },
      {
        number: 4,
        name: '',
        section: 'Reynolds Garden',
        lat: 37.330932, 
        lng: -79.535814,
        info: "The patterned central area of the garden echoes the design of the SHAEF (Supreme Headquarters Allied Expeditionary Force) shoulder patch, worn by those tasked with planning the invasion. An example can be found on the southern wall above the text of Eisenhower’s Order of the Day for 6 June 1944. Arranged on either side of the Order are plaques honoring various Allied forces participating on D-Day."
      },
      {
        number: 5,
        name: '',
        section: 'Reynolds Garden',
        lat: 37.330787, 
        lng: -79.535780,
        info: "Plaques along the eastern and western garden walls mark the transition from preparing for the invasion to initiating it. Monuments along the eastern wall recognize academies, colleges, and universities that prepared many of the Allied leaders for their wartime service. Along the western wall, plaques honor infantry regiments that took part in the Normandy invasion."
      },
      {
        number: 5,
        name: '',
        section: 'Reynolds Garden',
        lat: 37.330812, 
        lng: -79.536115,
        info: "Plaques along the eastern and western garden walls mark the transition from preparing for the invasion to initiating it. Monuments along the eastern wall recognize academies, colleges, and universities that prepared many of the Allied leaders for their wartime service. Along the western wall, plaques honor infantry regiments that took part in the Normandy invasion."
      },
      {
        number: 6,
        name: '',
        section: 'Gray Plaza',
        lat: 37.330760, 
        lng: -79.535953,
        info: "The plaza floor is divided into five segments, alluding to the five D-Day landing beaches: Utah, Omaha, Gold, Juno, and Sword."
      },
      {
        number: 7,
        name: '',
        section: 'Gray Plaza',
        lat: 37.330645, 
        lng: -79.536273,
        info: "Enclosing the plaza are bronze plaques bearing the names of the 4,415 Allied service members killed in action on D-Day. The names of American service members are on the western wall; the names of the other Allied Expeditionary Force members are on the eastern wall. Guests can search names using the Memorial app or view an alphabetical register inside the Gift Shop."
      },
      {
        number: 7,
        name: '',
        section: 'Gray Plaza',
        lat: 37.330611, 
        lng: -79.535655,
        info: "Enclosing the plaza are bronze plaques bearing the names of the 4,415 Allied service members killed in action on D-Day. The names of American service members are on the western wall; the names of the other Allied Expeditionary Force members are on the eastern wall. Guests can search names using the Memorial app or view an alphabetical register inside the Gift Shop."
      },
      {
        number: 8,
        name: '',
        section: 'Gray Plaza',
        lat: 37.330418, 
        lng: -79.536146,
        info: "The beach tableau depicts the fierce struggle Allied soldiers waged up and down the landing beaches. A stylized bunker serves as a backdrop for the scene."
      },
      {
        number: 9,
        name: '',
        section: 'Gray Plaza',
        lat: 37.330406, 
        lng: -79.535958,
        info: "A granite “Higgins Boat” represents the thousands of various landing craft that transported troops from ships to shore on the morning of D-Day. For its versatility, the “Higgins Boat” was later credited by Eisenhower with winning the war for the Allies."
      },
      {
        number: 10,
        name: '',
        section: 'Gray Plaza',
        lat: 37.330360, 
        lng: -79.535772,
        info: "Nearby, two “hedgehogs” typify the range of obstacles the Germans set in the tidal flats to scuttle landing craft making their way to shore."
      },
      {
        number: 11,
        name: '',
        section: 'Gray Plaza',
        lat: 37.330315, 
        lng: -79.535974,
        info: "The beach sculptures Through the Surf, Death on Shore, Across the Beach, and Scaling the Wall capture troops in various poses of battle, honoring the valor, fidelity, and sacrifice that were the hallmarks of Operation Overlord."
      },
      {
        number: 12,
        name: '',
        section: 'Gray Plaza',
        lat: 37.330329, 
        lng: -79.536464,
        info: "West of the beach tableau, George “Jimmy” Green Circle pays homage to the service and achievements of the naval forces of Operation Neptune, the seagoing component of D-Day. Green Circle’s monuments emphasize major vessels, exceptional leadership, and the U.S. Coast Guard’s role."
      },
      {
        number: 13,
        name: '',
        section: 'Gray Plaza',
        lat: 37.330183, 
        lng: -79.535441,
        info: "East of the beach tableau, Maurice T. Lawhorne Circle pays tribute to the roles and contributions of the AEF’s air forces on D-Day. More than 11,000 aircraft flew in support of the D-Day operations. Lawhorne Circle includes a series of narrative monuments to distinguished units and leaders."
      },
      {
        number: 14,
        name: '',
        section: 'Estes Plaza',
        lat: 37.330185, 
        lng: -79.535963,
        info: "Final Tribute is a sober tribute to the more than 4,400 members of the Allied Expeditionary Force who were killed on D-Day. Emblematic of death in battle, the inverted rifle and helmet powerfully address the ultimate sacrifice of the fallen."
      },
      {
        number: 15,
        name: '',
        section: 'Estes Plaza',
        lat: 37.330053, 
        lng: -79.535900,
        info: "A triumphal arch rises forty-four and a half feet above Estes Plaza – a pointed allusion to D-Day’s occurrence on the sixth day of the sixth month of 1944. The word OVERLORD inscribed on its facade is the official name of the operation now known simply as D-Day. The black and white stripes emblazoned on the arch recall the alternating stripes that made Allied aircraft readily identifiable."
      },
      {
        number: 16,
        name: '',
        section: 'Estes Plaza',
        lat: 37.330092, 
        lng: -79.536063,
        info: 'The National D-Day Memorial Seal is inscribed on the floor of Estes Plaza directly beneath the Overlord Arch. Rendered in Latin, the motto Ad commemorandum fortitudinem, fidelitatem, sacrificiumeorum translates to “Remembering their valor, fidelity, and sacrifice.”'
      },
      {
        number: 17,
        name: '',
        section: 'Estes Plaza',
        lat: 37.329919, 
        lng: -79.535776,
        info: "The flags of the twelve nations of the AEF fly in an arc along the exterior of Estes Plaza (weather permitting). Beginning with the flag of the United States, the flags of the eleven other nations fly alphabetically: Australia, Belgium, Canada, Czechoslovakia, France, Greece, the Netherlands, New Zealand, Norway, Poland, and the United Kingdom. Nearby, the allegorical sculpture Valor, Fidelity, Sacrifice honors these qualities in all members of the Allied Expeditionary Force at D-Day."
      },
      {
        number: 17,
        name: '',
        section: 'Estes Plaza',
        lat: 37.329958, 
        lng: -79.536303,
        info: "The flags of the twelve nations of the AEF fly in an arc along the exterior of Estes Plaza (weather permitting). Beginning with the flag of the United States, the flags of the eleven other nations fly alphabetically: Australia, Belgium, Canada, Czechoslovakia, France, Greece, the Netherlands, New Zealand, Norway, Poland, and the United Kingdom. Nearby, the allegorical sculpture Valor, Fidelity, Sacrifice honors these qualities in all members of the Allied Expeditionary Force at D-Day."
      },
      {
        number: 18,
        name: '',
        section: 'Stettinius Parade',
        lat: 37.329104, 
        lng: -79.536090,
        info: "Le Monument aux Morts was created by French sculptor Edmond de Laheudrie in memory of the forty-four men of Trévières, France, who died in World War I. In the days following D-Day, shrapnel or a round struck the head of the statue, disfiguring it. This recasting of de Laheudrie’s sculpture preserves the World War II damage that still mars the World War I original, a reminder that despite the hard-won success at Normandy, D-Day was but the beginning of the end of the war in Europe. The damaged statue serves as a silent lesson on the fragility of peace and the transience of victory."
      },
      {
        number: 19,
        name: '',
        section: 'Stettinius Parade',
        lat: 37.328718, 
        lng: -79.536137,
        info: "The Purple Heart Monument stands in the shadow of the garrison flag. Emplaced by the Military Order of the Purple Heart and National D-Day Memorial Foundation, it is dedicated in particular tribute to those who received the Purple Heart for their service on D-Day."
      },
      {
        number: 20,
        name: '',
        section: 'Stettinius Parade',
        lat: 37.328867, 
        lng: -79.536033,
        info: "Beyond D-Day: Set in the eastern quadrant of the smaller circle around the flagstaff in Stettinius Parade stands a portrait bust of Clement R. Atlee, the successor of Churchill."
      },
      {
        number: 21,
        name: '',
        section: 'Stettinius Parade',
        lat: 37.328884, 
        lng: -79.536217,
        info: "Set in the western quadrant stands a portrait bust of Harry S. Truman, the successor of Roosevelt."
      },
      {
        number: 'A',
        name: 'John Robert “Bob” Slaughter Portrait Bust',
        section: 'Other',
        lat: 37.330381, 
        lng: -79.536927,
        info: "Bob Slaughter, who served with Company D of the 116th Infantry Regiment of the 29th Division, landed on Omaha Beach on 6 June 1944. He was wounded twice while in France. Slaughter’s vision for a national memorial to the Normandy invasion led to the creation of the National D-Day Memorial, which was officially dedicated in 2001."
      },
      {
        number: 'B',
        name: 'Homage Sculpture',
        section: 'Other',
        lat: 37.330726, 
        lng: -79.536487,
        info: "Homage Sculpture"
      },
      {
        number: 'C',
        name: 'Gold Star Families Memorial Monument',
        section: 'Other',
        lat: 37.330621, 
        lng: -79.535444,
        info: "Gold Star Families Memorial Monument"
      },
      {
        number: 'D',
        name: 'Fleda A. Ring Education Quonset Hut',
        section: 'Other',
        lat: 37.330893, 
        lng: -79.537169,
        info: "Fleda A. Ring Education Quonset Hut"
      },
      {
        number: 'E',
        name: 'W.E. Stevens Family Victory Garden',
        section: 'Other',
        lat: 37.331074, 
        lng: -79.537034,
        info: "W.E. Stevens Family Victory Garden"
      },
      {
        //number: '0xf1bb',
        number: '0xf324',
        name: '',
        section: 'OtherIcon',
        lat: 37.330231, 
        lng: -79.536271,
        info: "Men's Restroom"
      },
      {
        //number: '0xf271',
        number: '0xf3aa',
        name: '',
        section: 'OtherIcon',
        lat: 37.330207, 
        lng: -79.535765,
        info: "Women's Restroom"
      },
      {
        number: '0xf201',
        name: '',
        section: 'OtherIcon',
        lat: 37.330320, 
        lng: -79.537264,
        info: "Bobbie G. Johnson Pavilion"
      },
      {
        number: '0xf11f',
        //number: '0xf3f8',
        name: '',
        section: 'OtherIcon',
        lat: 37.330683, 
        lng: -79.537259,
        info: "Bobbie & Peggy Johnson Quonset Hut Gift Shop"
      },
      {
        number: '',
        name: '',
        section: 'OtherIcon',
        lat: 37.330125, 
        lng: -79.537246,
        info: "Smoking Section"
      }


      // women f271
      // food f201
      // shop f11f
      /*{
        number: 1,
        name: 'Homage',
        lat: 37.330728,
        lng: -79.536537,
        info: "As you proceed from the John Robert “Bob” Slaughter portrait bust north towards Reynolds Garden, you will pass by Homage. This monument is a fitting tribute to those sons of Bedford who served and sacrificed for our freedom but is also emblematic of those communities across our country that nurtured those who went away to war and grieved for those who never returned"
      },
      {
        number: 2,
        name: "Sculpture of General Dwight D. Eisenhower",
        lat: 37.331163,
        lng: -79.535834,
        info: "Centered within the garden folly stands The Supreme Commander, a sculpture of General Dwight D. Eisenhower, Supreme Commander for Operation Overlord. Overhead, a tile mosaic map depicts the plan for the coming invasion. Eisenhower is surrounded by portrait busts of his principal subordinates: Air Chief Marshal Sir Arthur William Tedder, Deputy Supreme Commander; Admiral Sir Bertram H. Ramsay, Allied Naval Commander; Air Chief Marshal Sir Trafford L. Leigh-Mallory, Allied Air Forces Commander; Field Marshal Sir Bernard L. Montgomery, D-Day Assault Commander; Lt. Gen. Omar N. Bradley, US 1st Army Commander; and Lt. Gen. Walter Bedell Smith, Chief of Staff."
      },
      {
        number: 3,
        name: "",
        lat: 37.330939, 
        lng: -79.535787,
        info: "The patterned central area of the garden echoes the design of the SHAEF (Supreme Headquarters Allied Expeditionary Force) shoulder patch, worn by those tasked with planning the invasion. An example can be found on the southern wall above the text of the Supreme Commander’s Order of the Day for 6 June 1944. Arranged on either side of the Order are monuments honoring the major ground forces participating in D-Day."
      },
      {
        number: 4,
        name: "",
        lat: 37.330757, 
        lng: -79.535728,
        info: "Plaques along the eastern and western garden walls mark the transition from preparing the invasion to initiating it. Monuments along the eastern wall recognize academies, colleges, and universities that prepared many of the Allied leaders for their wartime service. Along the western wall, plaques honor the infantry regiments that took part in the Normandy invasion."
      },
      {
        number: 4,
        name: "",
        lat: 37.330776, 
        lng: -79.536183,
        info: "Plaques along the eastern and western garden walls mark the transition from preparing the invasion to initiating it. Monuments along the eastern wall recognize academies, colleges, and universities that prepared many of the Allied leaders for their wartime service. Along the western wall, plaques honor the infantry regiments that took part in the Normandy invasion."
      },
      {
        number: 5,
        name: "",
        lat: 37.330648, 
        lng: -79.535361,
        info: "For every American who has died in battle, there are grieving family members left behind, who also have made heroic sacrifices. Virginia’s first Gold Star Families Memorial Monument pays tribute to parents, children, spouses, and siblings of those who died in service to their nation at any point in our nation’s history. The stirring “missing man” in the center is a reminder of the profound absence felt by the survivors."
      },
      {
        number: 6,
        name: "",
        lat: 37.330619, 
        lng: -79.535966,
        info: "The plaza floor is divided into five segments, alluding to the five D-Day landing beaches: Utah, Omaha, Gold, Juno, and Sword."
      },
      {
        number: 7,
        name: "",
        lat: 37.330646, 
        lng: -79.536268,
        info: "Enclosing the plaza are bronze plaques bearing the names of the 4,413 Allied service members killed in action on D-Day. The names of United States service members are on the western wall; the names of the other Allied Expeditionary Force members are on the eastern wall. There is an alphabetical register of names inside the Gift Shop."
      },
      {
        number: 7,
        name: "",
        lat: 37.330608, 
        lng: -79.535647,
        info: "Enclosing the plaza are bronze plaques bearing the names of the 4,413 Allied service members killed in action on D-Day. The names of United States service members are on the western wall; the names of the other Allied Expeditionary Force members are on the eastern wall. There is an alphabetical register of names inside the Gift Shop."
      },
      {
        number: 8,
        name: "",
        lat: 37.330453, 
        lng: -79.536165,
        info: "The beach tableau depicts the fierce struggle Allied soldiers waged up and down the landing beaches. A stylized bunker serves as a backdrop for the scene."
      },
      {
        number: 9,
        name: "",
        lat: 37.330465, 
        lng: -79.535916,
        info: "A granite “Higgins Boat” represents the thousands of various landing craft that transported troops from ships to shore on the morning of D-Day. For its versatility, the “Higgins Boat” was later credited by Eisenhower with winning the war for the Allies."
      },
      {
        number: 10,
        name: "",
        lat: 37.330404, 
        lng: -79.535759,
        info: "Nearby, two “hedgehogs” typify the range of obstacles the Germans set in the tidal flats to scuttle landing craft making their way to shore."
      },
      {
        number: 11,
        name: "",
        lat: 37.330353, 
        lng: -79.535949,
        info: "The beach sculptures Through the Surf, Death on Shore, Across the Beach, and Scaling the Wall capture troops in various poses of battle; honoring the valor, fidelity, and sacrifice that was the hallmark of Operation Overlord."
      },
      {
        number: 12,
        name: "",
        lat: 37.330288, 
        lng: -79.536434,
        info: "West of the beach tableau, George “Jimmy” Green Circle gives homage to the service and achievements of the naval forces of Operation Neptune, the seagoing component of D-Day. Green Circle’s monuments emphasize major vessels and exceptional leadership. More than 5,000 ships participated in the D-Day invasion."
      },
      {
        number: 13,
        name: "",
        lat: 37.330245, 
        lng: -79.535551,
        info: "East of the beach tableau, Maurice T. Lawhorne Circle pays tribute to the roles and contributions of the AEF’s air forces on D-Day. More than 11,000 aircraft flew in support of the D-Day operations. Lawhorne Circle includes a series of narrative monuments to distinguished units and leaders."
      },
      {
        number: 14,
        name: "",
        lat: 37.330158, 
        lng: -79.536030,
        info: "Final Tribute is a sober tribute to the more than 4,400 members of the Allied Expeditionary Force who were killed on D-Day. Emblematic of death in battle, the inverted rifle and helmet powerfully address the ultimate sacrifice of the fallen."
      },
      {
        number: 15,
        name: "",
        lat: 37.330091, 
        lng: -79.535887,
        info: "A triumphal arch rises forty-four-and-a-half feet above Estes Plaza – a pointed allusion to D-Day’s occurrence on the sixth day of the sixth month of 1944. The word OVERLORD inscribed on its facade is the official name of the operation now known simply as D-Day. The black and white stripes emblazoned on the arch recalls the alternating black-and- white stripes that made Allied aircraft readily identifiable."
      },
      {
        number: 16,
        name: "",
        lat: 37.330134, 
        lng: -79.536143,
        info: 'The National D-Day Memorial Seal is inscribed on the floor of Estes Plaza directly beneath Overlord Arch. Rendered in Latin, the motto Ad commemorandum fortitudinem, fidelitatem, sacrificiumeorum translates to “Remembering their valor, fidelity, and sacrifice.”'
      },
      {
        number: 17,
        name: "",
        lat: 37.329978, 
        lng: -79.536268,
        info: "The flags of the twelve nations of the AEF fly in an arc along the exterior of Estes Plaza. Beginning with the flag of the United States, the flags of the eleven other nations fly alphabetically; Australia, Belgium, Canada, Czechoslovakia, France, Greece, Netherlands, New Zealand, Norway, Poland, and the United Kingdom. Nearby, the allegorical sculpture Valor, Fidelity, Sacrifice honors these qualities in all members of the Allied Expeditionary Force at D-Day."
      },
      {
        number: 18,
        name: "",
        lat: 37.329475, 
        lng: -79.536075,
        info: "Le Monument aux Morts was created by French sculptor Edmond de Laheudrie in memory of the forty-four men of Trévières, France, who died in World War I. In the days following D-Day, shrapnel or a round struck the head of the statue, disfiguring it. This recasting of Laheudrie’s sculpture preserves the World War II damage that still mars the World War I original, a reminder that despite the hard-won success at Normandy, D-Day was but the beginning of the end of the war in Europe. The damaged statue serves as a silent lesson on the fragility of peace and the transience of victory."
      },
      {
        number: 19,
        name: "",
        lat: 37.328798, 
        lng: -79.536139,
        info: "The Purple Heart Monument stands in the shadow of the garrison flag. Emplaced by the Military Order of the Purple Heart and National D-Day Memorial Foundation, it is dedicated in particular tribute to those who received the Purple Heart for their service on D-Day."
      },
      {
        number: 20,
        name: "",
        lat: 37.329083, 
        lng: -79.535927,
        info: "Beyond D-Day: Set in the eastern and western quadrants of the smaller circle around the flag staff in Stettinius Parade stand Clement R. Atlee and Harry S. Truman, the respective successors of Churchill and Roosevelt."
      },
      {
        number: 20,
        name: "",
        lat: 37.329093, 
        lng: -79.536303,
        info: "Beyond D-Day: Set in the eastern and western quadrants of the smaller circle around the flag staff in Stettinius Parade stand Clement R. Atlee and Harry S. Truman, the respective successors of Churchill and Roosevelt."
      }*/
    ];
    return markers;
  }
}
