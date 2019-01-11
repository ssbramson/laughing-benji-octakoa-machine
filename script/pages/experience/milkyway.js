new Vue({
  el: '#experienceDetail-milkyway',

  template: `
  <main class="experience_detail-container">

    <section class="experience_detail-content" v-bind:class="[show ? blurClass : '', backClass]">

      <div class="experience_detail-client_logo-area">
      
        <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 190.2505 54.8051">

          <path d="M157.85417,33.74875c0,1.4375-.625,3.8125-2.4375,3.8125-3.1875,0-2.3223-2.6954-5.75-8-2.8457-4.4058-8.5-5.3746-10.625-5.4996,3.8125-.3125,16.8125-.1875,16.8125-8.9384,0-8.75-13.0625-9.1875-16.625-9.1875h-26.417v1.9804h3.544c4.4902,0,4.082,3.0996,4.082,3.0996v23.733c0,3.625-1.0166,4.9589-3.9541,4.9589h-2.4424c-3.0625,0-5.0625-4.1464-5.0625-4.1464l-17.188-30.438h-3.4883s-14.5332,26.6274-16.5117,30.188a7.7994,7.7994,0,0,1-6.8447,4.3964h-1.5923c-4.2915,0-3.9775-4.6464-3.9775-4.6464V11.77755c0-4.043,4.04-3.8614,4.04-3.8614h2.4927V5.93575H46.29117l-9.8535,24.311-9.584-24.311H7.31657v1.9804h2.501c3.1738,0,3.6611,2.4766,3.6611,3.0899v24.0552c0,4.3281-6.5,4.6464-6.5,4.6464v1.8282h17.25v-1.8282c-7.3115,0-7.0986-4.6464-7.0986-4.6464V9.37325l12.6992,32.1626h5.8369l13.0342-31.8482v25.3736c0,3.08-.9717,4.6464-4.2217,4.6464h-1.9492v1.8282h40.5742v-1.8282h-3.3125c-5.5625,0-3.5498-4.5117-3.5498-4.5117l2.6128-5.4472h15l3.5313,6.207s2.1875,3.7519-2.4068,3.7519h-3.6875v1.8282h46.5835v-1.8282h-2.3955c-4.5,0-4.375-3.5214-4.375-4.6464V24.52455c3.0195,0,7.8633.125,8.4375,6.4117.5703,6.2871.9727,11.375,10.6875,11.375,7.1797,0,10.375-3.3125,10.375-8.5625Zm-77.375-6.7144,5.75-10.7881,6.0938,10.7881Zm54.875-4.5361h-4.25v-10.875s-.5-3.5,4.8125-3.5,7.875,3.498,7.875,7.3125C143.79167,22.049,136.47917,22.49825,135.35417,22.49825Zm43.3125-3.9375c-5.8877-1.125-8.5273-3.6778-8.0625-6.375.3623-2.0977,2.3906-4.5918,7.5879-4.5918,10.5996,0,13.8496,10.5918,13.8496,10.5918h2.4756V5.81075h-2.9756a2.298,2.298,0,0,1-2.5,2.0625c-2.0762.0488-4.625-2.75-11.4375-2.75-10.2324,0-15.875,5.6054-15.875,11.25,0,5.6464,4.1348,8.9716,16.25,11.5634,6.0313,1.2867,9.625,2.6871,10,5.9371s-2.9512,6.0996-8.3887,6.0996c-12.0488,0-15.4238-11.9742-15.4238-11.9742h-2.7041v13.6265h2.7861c0-1.7519,2.6524-2.6855,5.1055-1.6269a24.72418,24.72418,0,0,0,10.25,2.375c8.6875,0,17.625-4.4375,17.625-11.5625C197.22917,22.81075,189.13547,20.56075,178.66667,18.56075Z" transform="translate(-6.97867 -5.12325)" style="fill: #005581"/>
          
          <path d="M124.07487,54.34045c-.8506-.332-1.5996-.5644-1.5996-1.0644v-.0332c0-.3496.2793-.6152.8223-.6152a3.82736,3.82736,0,0,1,1.7021.5664.75063.75063,0,0,0,.4111.1152.93856.93856,0,0,0,.8955-.998,1.04682,1.04682,0,0,0-.5283-.9473,5.00324,5.00324,0,0,0-2.4365-.6817,2.7046,2.7046,0,0,0-2.8769,2.8262v.0332c0,1.7305,1.247,2.3125,2.3486,2.6778.8652.3007,1.6289.4824,1.6289,1.0312v.0332c0,.4004-.293.666-.9395.666a3.8115,3.8115,0,0,1-2.1279-.7988.7924.7924,0,0,0-.4404-.1328.92874.92874,0,0,0-.8809.998,1.03827,1.03827,0,0,0,.4258.8653,5.02409,5.02409,0,0,0,2.9648,1.0136,2.7027,2.7027,0,0,0,3.0088-2.8769v-.0332C126.45277,55.35615,125.17647,54.75655,124.07487,54.34045Zm8.583-3.6914a2.72888,2.72888,0,0,0-2.3047,1.4297v-.0996a1.12437,1.12437,0,1,0-2.2314,0v6.586a1.12436,1.12436,0,1,0,2.2314,0v-3.8086c0-1.1973.543-1.8125,1.3946-1.8125s1.3505.6152,1.3505,1.8125v3.8086a1.124,1.124,0,1,0,2.2305,0v-4.6075C135.32877,51.91275,134.34537,50.64905,132.65787,50.64905Zm8.0674.0664a6.13842,6.13842,0,0,0-2.5098.4649,1.05328,1.05328,0,0,0-.6025.9824.97275.97275,0,0,0,.9248,1.0313.86357.86357,0,0,0,.3232-.0664,4.54581,4.54581,0,0,1,1.5411-.25,1.48651,1.48651,0,0,1,1.6884,1.6289v.1504a4.99228,4.99228,0,0,0-1.9228-.3653c-1.8643,0-3.1709.8965-3.1709,2.8438v.0332a2.56786,2.56786,0,0,0,2.7012,2.7265,2.87451,2.87451,0,0,0,2.3779-1.1308v.0176a1.05437,1.05437,0,0,0,1.0713,1.0468,1.14624,1.14624,0,0,0,1.0869-1.2129v-4.0586a4.21246,4.21246,0,0,0-.8516-2.8437A3.37812,3.37812,0,0,0,140.72527,50.71545Zm1.3945,5.8711a1.58572,1.58572,0,0,1-1.747,1.5625,1.079,1.079,0,0,1-1.2178-1.08v-.0332c0-.7989.5869-1.2305,1.541-1.2305a3.123,3.123,0,0,1,1.4238.332Zm9.8858.3164a.96967.96967,0,0,0-.6026.2325,2.10891,2.10891,0,0,1-1.4677.6152c-1.2178,0-1.9961-1.0977-1.9961-2.4609v-.0332a2.191,2.191,0,0,1,1.9082-2.4297,1.98238,1.98238,0,0,1,1.3945.5664.98279.98279,0,0,0,.6455.25,1.07453,1.07453,0,0,0,1.0137-1.1328,1.17843,1.17843,0,0,0-.3526-.8633,3.65159,3.65159,0,0,0-2.6865-.9981c-2.4072,0-4.125,2.0957-4.125,4.6407v.0332c0,2.5449,1.7324,4.6054,4.0957,4.6054a3.62408,3.62408,0,0,0,2.7891-1.1464,1.13432,1.13432,0,0,0,.3232-.7989A1.01018,1.01018,0,0,0,152.00557,56.903Zm7.1523-2.246,1.7617-1.7129a1.58146,1.58146,0,0,0,.5137-1.0977,1.05139,1.05139,0,0,0-.9824-1.1309,1.32271,1.32271,0,0,0-.9844.5645l-2.7891,2.9941v-5.5214a1.12393,1.12393,0,1,0-2.2304,0v9.8125a1.12391,1.12391,0,1,0,2.2304,0v-1.4473l.8965-.9141,1.9512,3.043a1.03642,1.03642,0,0,0,.9687.582,1.0794,1.0794,0,0,0,1.043-1.1465,1.431,1.431,0,0,0-.2793-.8144Zm7.9014-5.0567h.1914a1.05718,1.05718,0,0,0,.1465-2.0625,4.91737,4.91737,0,0,0-.9102-.0664,2.27758,2.27758,0,0,0-1.8057.6992,3.191,3.191,0,0,0-.6308,2.1621v.5645h-.0879a.989.989,0,0,0-.9248,1.0488.97275.97275,0,0,0,.9248,1.0313h.0879v5.5879a1.12436,1.12436,0,1,0,2.2314,0v-5.5879h.9395a1.03738,1.03738,0,0,0,0-2.0625h-.9688v-.3496C166.25257,49.90105,166.54557,49.60025,167.05927,49.60025Zm15.4306,1.0488c-2.2353,0-3.8955,2.0782-3.8955,4.6407v.0332c0,2.5605,1.6465,4.6054,3.8682,4.6054,2.2363,0,3.8955-2.0781,3.8955-4.6386v-.0332C186.35807,52.69405,184.71257,50.64905,182.48987,50.64905Zm1.8614,4.6739c0,1.3125-.6973,2.4277-1.8614,2.4277-1.124,0-1.8877-1.1484-1.8877-2.4609v-.0332c0-1.3145.6963-2.4297,1.8604-2.4297,1.125,0,1.8887,1.1484,1.8887,2.4629Zm-11.127-4.6739c-2.2353,0-3.8955,2.0782-3.8955,4.6407v.0332c0,2.5605,1.6465,4.6054,3.8682,4.6054,2.2363,0,3.8955-2.0781,3.8955-4.6386v-.0332C177.09247,52.69405,175.447,50.64905,173.22427,50.64905Zm1.8613,4.6739c0,1.3125-.6972,2.4277-1.8613,2.4277-1.124,0-1.8877-1.1484-1.8877-2.4609v-.0332c0-1.3145.6963-2.4297,1.8604-2.4297,1.125,0,1.8886,1.1484,1.8886,2.4629Zm19.9239-7.834a1.19548,1.19548,0,0,0-1.1162,1.2637v3.2265a2.91455,2.91455,0,0,0-2.4512-1.3301c-1.8643,0-3.582,1.6289-3.582,4.6075v.0332c0,2.9765,1.747,4.6054,3.582,4.6054a2.81638,2.81638,0,0,0,2.4512-1.4453v.1153a1.12436,1.12436,0,1,0,2.2314,0v-9.8125A1.19537,1.19537,0,0,0,195.00947,47.489Zm-1.0869,7.8008c0,1.4785-.8663,2.4609-1.9082,2.4609s-1.9229-.9824-1.9229-2.4609v-.0332c0-1.4981.8809-2.4629,1.9229-2.4629s1.9082.9824,1.9082,2.4629Z" transform="translate(-6.97867 -5.12325)" style="fill: #231f20"/>

        </svg>


      </div>

      <article class="experience_detail-overview" role="contentinfo">

        <p class="experience_detail-client_description" rol2e="text">
          Created in 1923 and designed to capture the taste of malted milk shakes, MILKY WAY® Candy was named after a famed malted milk drink of the day, not the Milky Way galaxy. MILKY WAY® Bars are made of chocolate malt-flavored nougat and caramel covered with milk chocolate.
        </p>

        <h2 class="experience_detail-client_header" role="heading">Client's Request</h2>

        <p class="experience_detail-client_request_description" role="text">
          Lorem ipsum sit amet consectetur adipisicing elit. Dolore rata ratione prident, aliquam ipsa accusamus excepturi sint officia minus laudantium ipsum. A facilis magnam est consectetur fuga incidunt quam. A facilis magnam est consectetur fuga incidunt.
        </p>

        <h2 class="experience_detail-client_header">Services Provided</h2>

        <ul class="experience_detail-provided_services">
          <li class="experience_detail-provided_service">User Acquisition</li>
          <li class="experience_detail-provided_service">Evangelism Conversation</li>
          <li class="experience_detail-provided_service">Brand Awareness</li>
          <li class="experience_detail-provided_service">Campus Takeovers</li>
        </ul>

      </article>

      <article class="experience_detail-snippets">

        <div class="experience_detail-snippet" role="contentinfo">
          <div class="experience_detail-snippet_header" role="heading">Client</div>
          <ul class="experience_detail-snippet_details" role="list">
            <li class="experience_detail-snippet_detail" role="listitem">Milky Way</li>
          </ul>
        </div>

        <div class="experience_detail-snippet" role="contentinfo">
          <div class="experience_detail-snippet_header" role="heading">Sector</div>
          <ul class="experience_detail-snippet_details" role="list">
            <li class="experience_detail-snippet_detail" role="listitem">Confectionery</li>
          </ul>
        </div>

        <div class="experience_detail-snippet" role="contentinfo">
          <div class="experience_detail-snippet_header" role="heading">Industy</div>
          <ul class="experience_detail-snippet_details" role="list">
            <li class="experience_detail-snippet_detail" role="listitem">Candy</li>
          </ul>
        </div>

        <!--
        <div class="experience_detail-snippet" role="contentinfo">
          <div class="experience_detail-snippet_header" role="heading">Ticker</div>
          <ul class="experience_detail-snippet_details" role="list">
            <li class="experience_detail-snippet_detail" role="listitem">
              <a href="#" class="" aria-label="" target="_blank" rel="noreferrer">SPOT</a>
            </li>
          </ul>
        </div>
        -->

        <div class="experience_detail-snippet" role="contentinfo">
          <div class="experience_detail-snippet_header" role="heading">Agency</div>
          <ul class="experience_detail-snippet_details" role="list">
            <li class="experience_detail-snippet_detail" role="listitem">Buzz University</li>
          </ul>
        </div>

      </article>

    </section>

    <section class="next-experience-container">

      <div class="next-experience">
        <!-- <div class="next-experience-header">Next Highlight//</div> -->
        <div class="next-experience-header">next client </div>

        <div class="next-experience-button">
          <!-- <span class="next-experience-header">Next >> </span> -->
          <a href="/playtex.html" class="next-experience-link" aria-label="">> Playtex Tampons</a>
        </div>
      </div>

      <div class="next-experience-view_all-icon-container">

        <button @click="show = !show">
              <i class="fal fa-window-restore"></i>
            </button>

      </div>

    </section>

    <transition name="fade">
      <div class="experience_detail-modal_container" v-if="show">

        <ul class="experience_detail-modal-highlighted_clients">
          <li class="experience_detail-modal-highlighted_client" v-for="experienceClientLink in experienceClientLinks">
            <a :href="experienceClientLink.linkURL" class="experience-highlighted_client-link" aria-label="Go to detail page" role="link">{{ experienceClientLink.linkTitle }}</a>
          </li>
        </ul>

      </div>
    </transition>

  </main>
  `,
  
  data: {
    experienceClientLinks: [
      { linkTitle: 'Google', linkURL: '/google.html' },
      { linkTitle: 'Blackberry', linkURL: '/blackberry.html' },
      { linkTitle: 'Procter Gamble', linkURL: '/procter_gamble.html' },
      { linkTitle: 'Thomason Reuters', linkURL: '/thomson_reuters.html' },
      { linkTitle: 'Kendrick Lamar', linkURL: '/kendrick_lamar.html' },
      { linkTitle: 'Milkyway', linkURL: '/milkyway.html' },
      { linkTitle: 'Playtex', linkURL: '/playtex.html' }
    ],
    
    show: false,
    backClass: 'bk',
    blurClass: 'blur'
  }
})