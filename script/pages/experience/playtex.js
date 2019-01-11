new Vue({
  el: '#experienceDetail-playtex',

  template: `
  <main class="experience_detail-container">

    <section class="experience_detail-content" v-bind:class="[show ? blurClass : '', backClass]">

      <div class="experience_detail-client_logo-area">
        
        <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 192 192">
          <g>
            
            <path d="M149.506 98.486c2.16.334 3.934-.18 5.014-.617l2.264-3.241.18-2.16c-1.105 1.877-4.578 3.575-7.457 3.472v2.546h-.001zm0-10.082c2.211-1.081 4.424-2.263 6.738-3.42.668-.335.873-1.055.898-1.697v-.232c0-.463-.102-.9-.205-1.131-1.105-2.932-3.162-5.015-7.432-4.244v4.5c2.107-.951 4.346-1.209 4.68-.643.412.643-2.031 2.392-4.115 3.446-.18.103-.385.206-.564.283v3.138zm-64.965 6.738c.489-.437.978-.9 1.466-1.363.823-.823-1.749 3.627 2.443 6.688 2.854 2.057 2.7 4.191 15.045-7.614-1.234 4.758-.309 5.581 1.826 6.944 2.623 1.672 4.242 1.441 9.463-3.626 1.826-1.749 4.039-4.141 6.713-7.304 0 0 .977-.746 1.004.952.076 4.269-.283 42.486 1.361 45.83.412.875 1.416.797 1.852.746l.465-2.932c-.465-.336-.67-1.287-.85-2.932-1.131-10.34 1.414-29.859.566-39.427-.025-.463-.053-1.517.102-1.208 1.518 3.086 5.221 2.983 6.43 2.443l1.441-.026c-.979 4.964-1.826 10.339-2.521 16.099l2.289 1.518a157.03 157.03 0 0 1 3.807-17.719l1.492-.052c1.055-.72 1.773-.643 2.186.206 2.855 4.167 5.863 5.709 8.385 6.122V95.94c-.979-.026-1.879-.257-2.598-.771-2.059-1.466-3.113-2.829-3.498-4.167 2.082-.72 4.09-1.594 6.096-2.597v-3.138c-2.006.977-4.424 1.877-4.682 1.492-.283-.412 1.338-2.7 3.652-4.063.334-.18.693-.36 1.029-.515v-4.5c-.541.103-1.133.231-1.75.437-4.088 1.286-7.611 4.655-7.844 8.95l-1.055.18c3.986-13.322 8.334-22.812 8.615-26.464.078-2.083-1.773-3.24-2.828-2.083-3.627 6.687-7.123 16.562-9.902 29.267l-.076.026c-6.225 1.234-9.902 1.105-10.52-.797-.719-1.26-1.49-1.518-2.391-1.492-1.312.077-2.521 1.852-3.549 2.855-20.602 20.189-9.182 2.134-8.23-.515-.258-2.134-.387-3.755-2.365-3.678-.824.052-1.75 1.183-2.496 1.955-25.101 26.103-12.705 3.395-9.181-3.446-.489-.514-1.569-.977-1.955-1.26.771-.9 1.518-1.62 1.568-1.62.952-.335-.746-4.398-1.929-3.473-1.852.541-5.4 2.572-9.079 5.272v5.375c3.395-2.932 6.456-4.243 6.815-3.575.412.746-2.314 4.295-5.941 7.407-.283.231-.565.489-.875.72v3.42h.004zm0-22.066v-7.973c2.444-2.906 5.015-5.812 7.664-8.77 1.595.489 2.521 1.877 2.958 4.784-.823-.694-3.24 2.624-5.478 5.298-1.621 1.903-3.344 4.192-5.144 6.661 0 0 1.8-2.469 0 0zm-41.2 14.48c.591-2.469 1.26-5.015 1.903-7.407-1.028-.283-2.083-.54-3.112-.823-4.912 13.039-8.77 24.665-5.555 26.438l5.016-2.16c-1.338-.797-.438-6.609 1.105-13.425.694.823 1.363 1.621 2.058 2.443 17.797-8.692 27.287-13.219 31.71-17.076-4.629 6.635-8.564 13.759-11.47 22.117l3.215 2.855c.797-.078 4.269-2.109 4.835-3.395.746.9 2.057 2.264 4.372 2.727.283.281 1.131.23 1.543-.104 1.312-1.08 3.446-2.676 5.581-4.604v-3.42c-3.292 2.726-6.429 4.655-6.79 4.038-.437-.668 1.98-4.089 5.761-7.664.335-.334.695-.643 1.029-.926v-5.375c-5.22 3.832-10.75 9.001-12.087 13.142-3.498 4.552-2.212.514-.54-2.34 3.575-6.146 8.256-13.45 12.627-19.52v-7.973a169.95 169.95 0 0 0-5.118 6.404c.411-1.337.36-2.726 0-4.372-2.006-8.487-28.419-14.762-54.728-2.083-10.751 5.168-20.37 13.835-21.862 20.728v3.446c.669 2.598 2.983 4.707 7.536 5.941.18-.412.386-.823.566-1.234C-3.415 92.905 15 70.479 37.837 64.332c19.083-5.092 37.06-2.032 38.474 2.751 1.081 3.627-7.535 10.083-32.97 20.473 0 0 25.435-10.39 0 0z"/>
            <path d="M169.693 91.156c-4.576-4.5-7.201-8.307-8.924-11.805-.539-.154-1.08-.051-1.619.283 2.34 4.681 5.117 9.31 8.871 12.808.053.051.104.103.154.154a150.37 150.37 0 0 0-14.428 16.279l1.801 1.518c4.5-5.785 9.465-11.006 14.84-15.765 4.938 4.526 9.85 8.642 14.84 12.062.592.387 1.543.438 1.723-.566.129-.873.051-1.516-.463-2.441-.643-1.133-1.105-1.363-1.441-.154-5.451-3.807-9.721-7.176-13.09-10.262 5.453-4.655 11.316-8.821 17.541-12.577.693-2.572.643-4.449-.953-4.757-6.455 4.447-12.756 9.437-18.852 15.223 0 0 6.096-5.786 0 0z"/>
          </g>
        </svg>

      </div>

      <article class="experience_detail-overview" role="contentinfo">

        <p class="experience_detail-client_description" rol2e="text">
        Playtex Products, LLC manufactures and sells feminine products. The company also provides feminine care products that include sport compact tampons, sport tampons, sport fresh balance products, glide tampons, and wipes. As well, offering feeding bottles, baby bottles cups, diaper disposal systems; mealtime products that include curve spoons, infant spoons, and toddler utensils.
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
            <li class="experience_detail-snippet_detail" role="listitem">Playtex Tampon</li>
          </ul>
        </div>

        <div class="experience_detail-snippet" role="contentinfo">
          <div class="experience_detail-snippet_header" role="heading">Sector</div>
          <ul class="experience_detail-snippet_details" role="list">
            <li class="experience_detail-snippet_detail" role="listitem">Consumer Staple</li>
          </ul>
        </div>

        <div class="experience_detail-snippet" role="contentinfo">
          <div class="experience_detail-snippet_header" role="heading">Industy</div>
          <ul class="experience_detail-snippet_details" role="list">
            <li class="experience_detail-snippet_detail" role="listitem">Consumer Products</li>
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
          <a href="/procter_gamble.html" class="next-experience-link" aria-label="">> Procter & Gamble</a>
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