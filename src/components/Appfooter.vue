<template>
    <div>
  <b-row class="Appfooter">
    <b-col id="footer1" cols="4">
     
      <ul>
       <li><h6> Help Centre</h6></li>
       <li>Help Center</li>
        <li>Contact us</li>
        <li>How to shop on CruiseMart?</li>
        <li>Delivery options and timelines</li>
        <li>How to return a product on Cruisemart?</li>
        <li>Corporate and bulk purchases</li>
      </ul>
    </b-col>
    <b-col id="footer1" cols="4">
      <ul>
        <li><h6>About CruiseMart</h6></li>
        <li>About us</li>
        <li>CruiseMart Express</li>
        <li>Terms and Conditions</li>
         <li>Privacy policy</li>
         <li>Stay Safe</li>
       
      </ul>
      </b-col>
    <b-col id="footer1" cols="4">
      <ul>
        <li> <h6> Our Coverage</h6></li>
        <li>Algeria</li>
         <li>Egypt</li>
           <li>Ghana</li>
          <li>Ivory Coast</li>
          <li>Nigeria</li>
       
      </ul>
    </b-col>
  </b-row>
  <b-row id="PaymentLinks">
    <b-col cols="4">
        <h6>JOIN US ON SOCIAL MEDIA</h6>
        <div class="images">
     <i class="fab fa-twitter"></i>
     <i class="fab fa-facebook-f"></i>
     <i class="fab fa-youtube"></i>
     <i class="fab fa-instagram"></i>
  
      </div>
    </b-col>
    <b-col cols="4">
        <h6>PAYMENT METHODS & DELIVERY PARTNERS</h6>
        <div class="images">
        <i class="fab fa-cc-visa"></i>
         <i class="fab fa-cc-mastercard"></i>
         <i class="fab fa-dhl"></i>
        </div>
      </b-col>
       <b-col cols="4">
      </b-col>
       </b-row>
    </div>
</template>
<style scoped>
.Appfooter ul li{
  list-style-type: none;
  font-size: 12px;
  color: rgb(145, 138, 138);
  text-align: left;
}
.Appfooter{
  margin-top: 30px;
  background-color: rgb(29, 27, 27);
  color: white;
  overflow: hidden;
}
#head{
  margin-bottom: 10px;
  margin-top: 20px;
}


#PaymentLinks{
  background-color:rgb(77, 73, 73);
  color: white;

}
.images{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  margin-left: 150px;
  margin-bottom: 10px;
}
/*############# Mobile Responsive #########*/
@media screen and (max-width: 680px){
  .images{
    margin-top: 25px;
    margin-left: 10px;
    width: 100px;
  }
}
</style>