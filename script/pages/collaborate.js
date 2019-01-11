new Vue({
  el: '#collaborate',

  template: `
    <!-- <main class="collaborate-container"> -->
    <main class="content-container">
        
      <section class="collaborate-content">

        <section class="collaborate-introduction-content">
          <h2 class="collaborate-introduction_title">Collaboration is the new competition</h2>

          <p class="collaborate-introduction_paragraph" role="text">Lorem ipsum mollitia laboriosam aper iampis icing elit. Dolor sit amet consect etur adipisicing elit. Possimus quis delectus sap iente. Nesciunt mollitia laboriosam aperiampisicing elit. Possimus quis delectus sapi ente. Nesciunt mollitia laboriosam aperiam olor sit amet volu ptate dicta cumque. volu ptate dicta cumque.</p>

          <div class="collaborate-introduction_signature">- Spencer</div>

          <div class="collaborate-introduction_availability">available for work February 2019</div>
          
        </section>

        <section class="collaborate-location-content">

          <!-- <h3 class="collaborate-location_header">Currently located</h3> -->

          <ul class="collaborate-location_locations">

            <li class="collaborate-location_location">
              <h4 class="collaborate-location_location-header">Los Angeles</h4>
              <ul class="collaborate-location_location-deatils">
                <li class="collaborate-location_location-detail_time">
                  <i class="fal fa-clock"></i> <span id="time-la"></span>
                </li>
                <li class="collaborate-location_location-detail_day">
                  <div id="day-la">SUNDAY</div>
                </li>
              
                <!--
                <li class="collaborate-location_location-detail_email">
                    <a href="mailto:LA@ssbramson.com" aria-label="This will send an email to LA@ssbramson.com">email</a>
                </li>
                -->
              </ul>
              
            </li>

            <li class="collaborate-location_location">
              <h4 class="collaborate-location_location-header">New York City</h4>
              <ul class="collaborate-location_location-deatils">
                
                <li class="collaborate-location_location-detail_time">
                  <i class="fal fa-clock"></i> <span id="time-nyc"></span>
                </li>
                <li class="collaborate-location_location-detail_day">
                  <div id="day-nyc">SUNDAY</div>
                </li>

              </ul>
              
              <h4 class="collaborate-location_location-header"><a href="mailto:NYC@ssbramson.com" aria-label="This will send an email to NYC@ssbramson.com">New York City</a></h4>
              
            </li>

            

          </ul>

        </section>

      </section>

    </main>
  `
})