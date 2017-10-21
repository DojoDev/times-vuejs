import Vue from 'vue'
import App from './App.vue'
import {Time} from './time'

new Vue({
  el: '#app',
  data:{
    times:[
      new Time("America MG",    require('./assets/america_mg_60x60.png')),
      new Time("Atletico PR",   require('./assets/atletico-pr_60x60.png')),
      new Time("Atletico MG",   require('./assets/atletico_mg_60x60.png')),
      new Time("Chapecoense",   require('./assets/chapecoense_60x60.png')),
      new Time("Corinthians",   require('./assets/corinthians_60x60.png')),
      new Time("Coritiba",      require("./assets/coritiba_60x60.png")),
      new Time("Botafogo",      require("./assets/botafogo_60x60.png")),
    ],
    alfabeto:{
      a:'A',
      b:'B',
      c:'C',
      d:'D',
      e:'E',
    }
    }
      
/* title: "Hello, its my first Vue JS 2",
      bool: true,
      intNumber: 10,
      intFloat: 20.10,
      objeto:{
      	name: "Raffael Nunes"
      },
      link: "http://localhost:8080",
      body:{
      	content:"iuhasdhaisduhaiduhadiuashdiuahdaiudhasiudhasdiuahsdiuahdasuidhasiudhasiu"
      }*/
  })
