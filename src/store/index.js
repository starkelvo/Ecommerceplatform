import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    products:[
      {
     id: 1,
     name: "KQRAS Men's Smart Watches Sport Fitness Tracker Color Screen-Black",
    //  imageLink:require("../../src/assets/images/smartwatch.jpg"),
     price: "₦2,999",
     category: "Clothings",
     details: "1.SMS, information, call reminders. 2.Bluetooth synchronization. 3.Data synchronization does not require cable. 4.Remote camera, take photos by phone through remote control of the wristband. 5.Activity tracker, record your daily activity: steps, distance, time, calories; check and share your data anytime. 6.Anti-lost, the wristband will remind you with vibration when your phone is 5m away from you. 7.When the Bluetooth is disconnected or the phone is out of the Bluetooth distance, the watch will alert you. 8.Sleep monitor, check sleep trend chart to view your sleep time and quality. 9.Sedentary reminder, set it to remind you to walk or exercise after a long time sit. 10.IPX7 Waterproof, smart bracelet from water (Not for swimming or taking a shower). 11.Blood pressure",
    images: [
      'smartwatch.jpg',
    ]
   },
    {
     id: 2,
     name: "KQRAS Men's Smart Watches Sport Fitness Tracker Color Screen-Black",
    //  imageLink:require("../../src/assets/images/mobile watch.jpg"),
     price: "₦4,999",
     category: "Clothings",
     details: "1.SMS, information, call reminders. 2.Bluetooth synchronization. 3.Data synchronization does not require cable. 4.Remote camera, take photos by phone through remote control of the wristband. 5.Activity tracker, record your daily activity: steps, distance, time, calories; check and share your data anytime. 6.Anti-lost, the wristband will remind you with vibration when your phone is 5m away from you. 7.When the Bluetooth is disconnected or the phone is out of the Bluetooth distance, the watch will alert you. 8.Sleep monitor, check sleep trend chart to view your sleep time and quality. 9.Sedentary reminder, set it to remind you to walk or exercise after a long time sit. 10.IPX7 Waterproof, smart bracelet from water (Not for swimming or taking a shower). 11.Blood pressure",
    images: [
      'mobile watch.jpg',
    ]
   },
    {
     id: 3,
      name: "V9 Smart Mobile Sport Watch With SIM And Memory Card Slot",
    //  imageLink:require("../../src/assets/images/wristband.jpg"),
     price: "₦3,999",
     category: "Clothings",
     details: "1.SMS, information, call reminders. 2.Bluetooth synchronization. 3.Data synchronization does not require cable. 4.Remote camera, take photos by phone through remote control of the wristband. 5.Activity tracker, record your daily activity: steps, distance, time, calories; check and share your data anytime. 6.Anti-lost, the wristband will remind you with vibration when your phone is 5m away from you. 7.When the Bluetooth is disconnected or the phone is out of the Bluetooth distance, the watch will alert you. 8.Sleep monitor, check sleep trend chart to view your sleep time and quality. 9.Sedentary reminder, set it to remind you to walk or exercise after a long time sit. 10.IPX7 Waterproof, smart bracelet from water (Not for swimming or taking a shower). 11.Blood pressure",
    images: [
      'wristband.jpg',
    ]
   },
    {
     id: 4,
     name: "Sony PS3 Controller Wireless Game Pad - DualShock 3 For Official PlayStation 3- Black",
    //  imageLink:require("../../src/assets/images/gamepad.jpg"),
     price: "₦3,999",
     category: "Clothings",
     details: "1.SMS, information, call reminders. 2.Bluetooth synchronization. 3.Data synchronization does not require cable. 4.Remote camera, take photos by phone through remote control of the wristband. 5.Activity tracker, record your daily activity: steps, distance, time, calories; check and share your data anytime. 6.Anti-lost, the wristband will remind you with vibration when your phone is 5m away from you. 7.When the Bluetooth is disconnected or the phone is out of the Bluetooth distance, the watch will alert you. 8.Sleep monitor, check sleep trend chart to view your sleep time and quality. 9.Sedentary reminder, set it to remind you to walk or exercise after a long time sit. 10.IPX7 Waterproof, smart bracelet from water (Not for swimming or taking a shower). 11.Blood pressure",
    images: [
      'gamepad.jpg',
      'nintendo.jpg'
    ]
   },
    {
     id: 5,
     
     name: "Portable High Definition Handheld Game 4.3'' Black",
    //  imageLink:require("../../src/assets/images/nintendo.jpg"),
     price: "₦3,999",
     category: "Clothings",
     details: "1.SMS, information, call reminders. 2.Bluetooth synchronization. 3.Data synchronization does not require cable. 4.Remote camera, take photos by phone through remote control of the wristband. 5.Activity tracker, record your daily activity: steps, distance, time, calories; check and share your data anytime. 6.Anti-lost, the wristband will remind you with vibration when your phone is 5m away from you. 7.When the Bluetooth is disconnected or the phone is out of the Bluetooth distance, the watch will alert you. 8.Sleep monitor, check sleep trend chart to view your sleep time and quality. 9.Sedentary reminder, set it to remind you to walk or exercise after a long time sit. 10.IPX7 Waterproof, smart bracelet from water (Not for swimming or taking a shower). 11.Blood pressure",
    images: [
      'nintendo.jpg',
    ]
   },
    {
     id: 6,
     name: "Samsung Galaxy A30s 6.4-Inch (4GB,64GB ROM) Android 9.0",
    //  imageLink:require("../../src/assets/images/samsung.jpg"),
     price: "₦3,999",
     category: "Clothings",
     details: "1.SMS, information, call reminders. 2.Bluetooth synchronization. 3.Data synchronization does not require cable. 4.Remote camera, take photos by phone through remote control of the wristband. 5.Activity tracker, record your daily activity: steps, distance, time, calories; check and share your data anytime. 6.Anti-lost, the wristband will remind you with vibration when your phone is 5m away from you. 7.When the Bluetooth is disconnected or the phone is out of the Bluetooth distance, the watch will alert you. 8.Sleep monitor, check sleep trend chart to view your sleep time and quality. 9.Sedentary reminder, set it to remind you to walk or exercise after a long time sit. 10.IPX7 Waterproof, smart bracelet from water (Not for swimming or taking a shower). 11.Blood pressure",
    images: [
      'samsung.jpg',
    ]
   },
   {
     id: 7,
     name: "Elegant Designer Athletic Sneakers V2- Gold & Black",
    //  imageLink:require("../../src/assets/images/shoe.jpg"),
     price: "₦3,999",
     category: "Clothings",
     details:"1.SMS, information, call reminders. 2.Bluetooth synchronization. 3.Data synchronization does not require cable. 4.Remote camera, take photos by phone through remote control of the wristband. 5.Activity tracker, record your daily activity: steps, distance, time, calories; check and share your data anytime. 6.Anti-lost, the wristband will remind you with vibration when your phone is 5m away from you. 7.When the Bluetooth is disconnected or the phone is out of the Bluetooth distance, the watch will alert you. 8.Sleep monitor, check sleep trend chart to view your sleep time and quality. 9.Sedentary reminder, set it to remind you to walk or exercise after a long time sit. 10.IPX7 Waterproof, smart bracelet from water (Not for swimming or taking a shower). 11.Blood pressure",
    images: [
      'shoe.jpg',
    ]
   },
    {
     id: 8,
     name: "Intex Inflatable Air Bed With Pump ( Durabeam Standard)",
    //  imageLink:require("../../src/assets/images/shoe.jpg"),
     price: "₦13,999",
     category: "Clothings",
     details: "1.SMS, information, call reminders. 2.Bluetooth synchronization. 3.Data synchronization does not require cable. 4.Remote camera, take photos by phone through remote control of the wristband. 5.Activity tracker, record your daily activity: steps, distance, time, calories; check and share your data anytime. 6.Anti-lost, the wristband will remind you with vibration when your phone is 5m away from you. 7.When the Bluetooth is disconnected or the phone is out of the Bluetooth distance, the watch will alert you. 8.Sleep monitor, check sleep trend chart to view your sleep time and quality. 9.Sedentary reminder, set it to remind you to walk or exercise after a long time sit. 10.IPX7 Waterproof, smart bracelet from water (Not for swimming or taking a shower). 11.Blood pressure",
    images: [
      'bed.jpg',
    ]
   },
    {
     id: 9,
      name: "Classy Top-Notch Men's Casual Shoe---BLACK",
    //  imageLink:require("../../src/assets/images/shoe.jpg"),
     price: "₦3,999",
     category: "Clothings",
     details: "1.SMS, information, call reminders. 2.Bluetooth synchronization. 3.Data synchronization does not require cable. 4.Remote camera, take photos by phone through remote control of the wristband. 5.Activity tracker, record your daily activity: steps, distance, time, calories; check and share your data anytime. 6.Anti-lost, the wristband will remind you with vibration when your phone is 5m away from you. 7.When the Bluetooth is disconnected or the phone is out of the Bluetooth distance, the watch will alert you. 8.Sleep monitor, check sleep trend chart to view your sleep time and quality. 9.Sedentary reminder, set it to remind you to walk or exercise after a long time sit. 10.IPX7 Waterproof, smart bracelet from water (Not for swimming or taking a shower). 11.Blood pressure",
    images: [
      'casualshoe.jpg',
    ]
   },
    {
     id: 10,
     name: "Chrysolite Designs God Over Everything Print T-Shirt - Navy Blue",
    //  imageLink:require("../../src/assets/images/shoe.jpg"),
     price: "₦2,999",
     category: "Clothings",
     details: "1.SMS, information, call reminders. 2.Bluetooth synchronization. 3.Data synchronization does not require cable. 4.Remote camera, take photos by phone through remote control of the wristband. 5.Activity tracker, record your daily activity: steps, distance, time, calories; check and share your data anytime. 6.Anti-lost, the wristband will remind you with vibration when your phone is 5m away from you. 7.When the Bluetooth is disconnected or the phone is out of the Bluetooth distance, the watch will alert you. 8.Sleep monitor, check sleep trend chart to view your sleep time and quality. 9.Sedentary reminder, set it to remind you to walk or exercise after a long time sit. 10.IPX7 Waterproof, smart bracelet from water (Not for swimming or taking a shower). 11.Blood pressure",
    images: [
      'polo.jpg',
    ]
   },
   {
    id: 11,
    name: "Shark Bottom Tide Shoes Men's Personality Sneakers -Black",
   //  imageLink:require("../../src/assets/images/shoe.jpg"),
    price: "₦2,999",
    category: "Clothings",
    details: "1.SMS, information, call reminders. 2.Bluetooth synchronization. 3.Data synchronization does not require cable. 4.Remote camera, take photos by phone through remote control of the wristband. 5.Activity tracker, record your daily activity: steps, distance, time, calories; check and share your data anytime. 6.Anti-lost, the wristband will remind you with vibration when your phone is 5m away from you. 7.When the Bluetooth is disconnected or the phone is out of the Bluetooth distance, the watch will alert you. 8.Sleep monitor, check sleep trend chart to view your sleep time and quality. 9.Sedentary reminder, set it to remind you to walk or exercise after a long time sit. 10.IPX7 Waterproof, smart bracelet from water (Not for swimming or taking a shower). 11.Blood pressure",
   images: [
     'shark.jpg',
   ]
  },
  {
    id: 12,
    name: "Sony PS4 Pad Official Controller With Touchpad Lightbar",
   //  imageLink:require("../../src/assets/images/shoe.jpg"),
    price: "₦2,999",
    category: "Clothings",
    details: "1.SMS, information, call reminders. 2.Bluetooth synchronization. 3.Data synchronization does not require cable. 4.Remote camera, take photos by phone through remote control of the wristband. 5.Activity tracker, record your daily activity: steps, distance, time, calories; check and share your data anytime. 6.Anti-lost, the wristband will remind you with vibration when your phone is 5m away from you. 7.When the Bluetooth is disconnected or the phone is out of the Bluetooth distance, the watch will alert you. 8.Sleep monitor, check sleep trend chart to view your sleep time and quality. 9.Sedentary reminder, set it to remind you to walk or exercise after a long time sit. 10.IPX7 Waterproof, smart bracelet from water (Not for swimming or taking a shower). 11.Blood pressure",
   images: [
     'camopad.jpg',
   ]
  }
   ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    product: (state) => (id) => {
      return state.products.filter(p => p.id === Number(id))[0]
    }
  },
  modules: {
  }
})
