new Vue({
  el: '#experienceDetail-pg',

  template: `
  <main class="experience_detail-container">

    <section class="experience_detail-content" v-bind:class="[show ? blurClass : '', backClass]">

      <div class="experience_detail-client_logo-area">

        <svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 192.756 192.756" class="experience_detail-client_logo">

          <g fill-rule="evenodd" clip-rule="evenodd">
            
            <path d="M184.168 105.379v1.182c1.967-.545 3.754-1.727 4.812-3.879.666-1.363-1.211-3.484-2.361-1.303-.029.666.787.303.939.971-.242 1.363-1.15 2.061-2.15 2.635-.422.183-.846.333-1.24.394zM184.168 98.803v1.303c1.361-.393 2.754-1.029 3.754-1.697 1.422-.969 2.391-2.667 1.846-4.303-.363-.667-1.09-1.364-1.756-1.364-1.393-.122-2.693-.03-3.844.273v1.637a7.784 7.784 0 0 1 1.119-.667c2.271-.788 2.604.879.879 3.243-.393.543-1.15 1.09-1.998 1.575zM184.168 94.651v-1.637c-3.693.939-6.295 3.939-7.385 8.304-.998 1.879-1.938 3.031-2.604 3.031l5.084-17.791-5.084.788-.242.939h1.09l-4.025 14.577v3.607c.182.182.424.303.756.363 1.09.273 3.662-1.516 4.691-3.424.727 1.939 1.635 3.09 4.51 3.424a9.57 9.57 0 0 0 3.209-.273v-1.182c-.938.182-1.816.092-2.604-.576-1.059-.969-.969-2.545-.514-4.242.908.061 1.998-.121 3.117-.455v-1.303c-1.059.576-2.27 1-3.057 1 .394-1.998 1.394-3.908 3.058-5.15zM171.002 94.196v5.062a28.67 28.67 0 0 0 .484-1.879c0-1.002.061-2.274-.484-3.183zM171.002 99.258v-5.062a2.437 2.437 0 0 0-1.211-.939c-2.33-1.212-4.268.03-5.842 1.364v1.424c1.271-1.273 2.633-2.031 3.541-1.606.908.455.061 6.88-2.725 9.698a17.41 17.41 0 0 1-.816.697v1.637c.242-.092.455-.121.635-.182 3.422-1.576 5.357-3.76 6.418-7.031z"/>
            
            <path d="M171.002 106.471v-3.607l-.334 1.213c-.242 1.212-.15 1.97.334 2.394zM163.949 86.65v3.03l.787-3.182-.787.152z"/>

            <path d="M163.949 89.68v-3.03l-4.025.667-.121.939h.998l-4.086 14.639c-.727 1.484-1.725 2.879-1.695.969a473.486 473.486 0 0 0 2.361-9.243c.242-.97.182-1.728-1.119-2.061-2.543-.273-4.602 2.273-5.902 3.909-.334-1.606.514-2.97-.395-3.758-3.389-1.485-5.932 2.576-7.596 4.092.121-1.516.908-2.971 1.059-4.516l-5.146.395-.119 1 1.119.03-2.18 8.184c-1.574 1.879-3.936 4.031-2.754 1.424l3.299-10.637-3.723-.031-.121.697c-1.18-1.031-3.027-1.122-4.873-.576v1.728c1.211-.727 2.633-1.394 4.42.03-.666 3.576-1.363 7.152-4.42 9.123v1.363c.514-.363 1.059-.758 1.604-1.121-.303 4.637 2.754 2.395 5.934.15-.242.971-.395 1.395-.455 2.455h3.662l.455-2.484c.908-4.395 3.207-7.486 6.6-9.395a1715.744 1715.744 0 0 0-3.09 11.911h3.754l.545-2.303c1-5.244 3.844-8.881 5.994-9.608l-2.24 9.424c-.273.971-.182 1.729.332 2.395 1.938.697 3.512-.271 4.662-1.455.848 1.123 2.572 1.971 4.115 1.971 1.182 0 2.332-.303 3.148-.484v-1.637c-1.09.818-2.33 1.545-3.209 1.213-1.15-.426-.605-3.607.031-5.395.635-1.547 1.877-3.334 3.178-4.607v-1.424c-.605.485-1.119.969-1.574 1.363l1.573-6.306z"/>
            <path d="M128.93 94.499v-1.728a11.347 11.347 0 0 0-2.967 1.485c-1.875 1.364-3.57 3.425-4.479 5.789v4.789c.332.666.787 1.242 1.332 1.545 2.662.637 4.449-.271 6.113-1.363v-1.363c-.787.516-1.756.908-2.875 1.15-1.09-.271-1.514-.969-1.514-1.576.03-3.364 2.06-6.698 4.39-8.728zM121.484 94.469v1.152l.332-1.213-.332.061zM121.484 87.074v3c.211-.94.514-1.879.666-2.788-.242-.06-.455-.152-.666-.212zM121.484 90.074v-3c-3.24-1-7.053-.97-10.352.061-3.119 1-5.812 3.031-7.355 5.334-.787 1.03-1.303 2.001-1.635 2.94v5.455c.182.516.424 1.031.695 1.516 1.574 2.85 5.902 4.213 9.021 4.455 2.119 0 5.023.031 6.84-1.092l2.785-10.122V94.47l-6.205 1-.09.939c.543-.031.967.031 1.209.182l-2.209 8.729c-1.029.121-1.877-.029-2.785-.15-2.967-.818-4.146-2.85-4.934-5.699-.514-3.454 1.121-6.273 3.844-8.667 2.725-2.395 7.264-3.213 11.139-.606.001-.033.001-.093.032-.124zM121.484 104.834v-4.789a10.412 10.412 0 0 0-.637 2.305c.001.757.214 1.695.637 2.484zM102.143 104.682v1.061c.182-.15.363-.332.516-.514l-.184-.758c-.121.09-.243.15-.332.211z"/>
            <path d="M102.143 100.863v-5.455c-.727 1.971-.635 3.789 0 5.455zM90.641 101.227v-6.94c-.363.728-.575 1.455-.605 2.061-1.453.334-3.45.789-4.57 2.242v6.82c1.422 1.303 2.754 1.818 4.177 1.818.303 0 .636 0 .999-.031v-1.758c-1.332-.271-2.18-1.334-2.724-2.576-.636-1.637.877-3.818 2.058-4.758-.001 1.061.241 2.122.665 3.122zM85.465 92.863v3.091c1.18-.364 1.483-1.818.727-3.031-.242-.06-.484-.06-.727-.06zM85.465 95.954v-3.091c-2.421.03-4.812 3-5.63 4.577l-.303-.031 1.362-5.273-5.176 1.454-.121.91.938.03-1.271 4.939c-.242.971-1.06 1.697-1.483 2.334-1.12 1.213-2.542 2.395-4.116 2.879v1.365c1.665-.576 3.087-1.668 4.419-2.971l-1.09 3.334h3.693c1.694-4.607 3.45-9.305 6.931-11.517.423.576.847.879 1.241 1.122.213 0 .425 0 .606-.061zM85.465 105.41v-6.82a3.029 3.029 0 0 0-.515.85c-.848 2.15-1.029 3.727.424 5.879l.091.091z"/>

            <path d="M69.666 98.561v1.666c1.12-.242 2.24-.758 3.571-1.787 1.302-.939 2.089-2.91 1.816-4.395-.515-.849-1.029-1.363-1.937-1.515a8.132 8.132 0 0 0-3.451.303v1.697a7.87 7.87 0 0 1 .756-.667c3.451-1.303 2.24 2.091.545 3.667a9.347 9.347 0 0 1-1.3 1.031z"/>

            <path d="M69.666 94.529v-1.697c-3.602 1.091-6.326 4.607-6.992 8.121-1.18 2.031-2.149 3.396-3.027 3.699-.363-.455-.121-1.152.061-1.91l2.785-8.728 2.179-.03.272-1.424-2.059-.03.939-3.667c-.727.546-2.543 2.213-3.814 3-1.029.636-2.24 1-2.24 1.545 0 .212.635.243.999.516a120.038 120.038 0 0 0-1.301 4.94c-.394 1.031-1.06 1.879-1.847 2.697-1.665 1.484-3.542 3.273-5.508 3.365-.938-.244-1.12-1.184-1.362-2.031-.151-3.426 1.302-6.85 3.753-8.911.636-.546 1.907-1.121 2.664-.667 0 .515-1.029 1.333-.756 2.03.242.788 1.332 1.029 1.876 1.029.484-.271.877-.756.999-1.181 0-.697-.122-1.364-.515-1.878-1.665-1.546-3.481-1.395-5.418-.849-2.724 1.364-4.843 3.152-5.509 5.274-.302.908-.484 1.637-.575 2.273v2.545c.212 1.424.243 2.334 2.18 3.365.908.484 3.057.424 4.692-.213 1.604-.637 3.117-2.092 4.085-3.061.122.848-.363 2.182.364 3.182.514.363 1.482.727 1.815.727 1.938 0 2.724-1.727 3.875-2.666.484.818.605 1.545 1.725 2.182 2.209.607 4.056.516 5.66-.029v-1.365c-.727.213-1.453.303-2.179.152-.636-.273-1.06-.545-1.302-.818-.393-1.242-.605-2.637.303-3.486 1.149-.029 2.148-.061 3.178-.303v-1.666c-1.089.637-2.149.879-2.997 1.09.484-2.151 1.604-3.818 2.997-5.122zM45.27 96.105v2.363a7.737 7.737 0 0 0 0-2.363z"/>
            <path d="M45.27 98.469v-2.363a7.599 7.599 0 0 0-.938-2.485c-1.422-1.637-3.692-1.637-5.479-1.545-.212.03-.424.091-.605.121v2.061c.03-.061.091-.121.151-.212.787-.697 2.21-1.273 3.391-.424 1.149 2.697-.575 5.456-1.423 8.304-.666.939-1.271 2.031-2.119 2.729v1.939c2.573-.697 4.722-2.455 5.812-4.607.574-1.184 1.028-2.366 1.21-3.518zM45.27 102.561v-2.545c-.151.938-.151 1.697 0 2.514v.031z"/>
            <path d="M38.248 94.256v-2.061c-2.664.576-5.024 2.333-6.083 4.455-.061.121-.122.242-.151.334v7.971c1.483 1.545 3.632 1.758 5.63 1.758.181-.029.393-.061.605-.121v-1.939c-.575.455-1.271.727-2.119.637-1.029-.092-1.786-1.395-1.786-2.213-.394-3.153 1.876-6.245 3.904-8.821zM32.013 92.408v3.152c.151-.031.303-.061.515-.121 1.028-.788.847-2.364.181-2.94a2.914 2.914 0 0 0-.696-.091zM32.013 95.56v-3.152c-2.331-.06-3.875 2.606-5.055 4.364l-.272.031c.242-1.485.908-3.425 1.271-4.789l-4.63 1.03c.151-.727.544-2.303.544-2.697-.061-1.667-.999-2.788-2.149-3.607-1.755-1.212-2.906-1.182-4.963-1.182h-1.423v1.363c1.454.122 2.028.485 2.936 1.061.787 1 1.12 2.304.605 3.667-.605 1.637-1.937 2.698-3.542 3.395v1.758c1.756-.092 3.42-.426 4.812-1.061 1.847-1.485 2.785-1.818 3.663-1.606-.394 2.061-2.845 10.396-3.36 12.183h3.602c1.06-3.969 1.755-6.273 3.087-7.971.666-.969 1.059-2.061 1.846-2.606.272-.394.878-1.303 1.332-1.394.576 1.274 1.059 1.334 1.696 1.213zM32.013 104.955v-7.971c-1.18 2.576-1.816 4.789-.545 7.273.151.274.332.485.545.698z"/>
            <path d="M15.335 86.922v-1.363c-2.482 0-5.418-.03-7.354-.03.393.97 1.392 1.212.908 2.758-1.029 3.637-3.147 10.94-3.905 13.882-.454 1.635-.908 2.332-2.149 4.061 2.088.061 5.297.15 7.506.061-.938-1.061-.999-2.273-.696-3.547.394-1.727 1.211-4.363 1.726-6.152 1.301.213 2.633.303 3.965.213v-1.758c-.151.061-.272.121-.393.151-1.029.212-2.089.333-3.391.394l2.21-8.728c.605-.002 1.119.028 1.573.058zM100.326 105.076c-1.422.121-2.996-.182-3.753-1.395 0-.424.546-1.182.636-1.455.516-1.121 1.332-.848 2.33-.848 1.242-1-.029-3.516-1.693-2.363-.666.453-1.272 2.182-2.301 3.939-1.241-1.637-1.968-3.213-2.089-5.365 1.786-.697 4.025-1.303 4.269-3.333.121-.97-.424-2.273-1.181-2.697-1.302-.424-2.331-.546-3.512 0-.999.545-1.846 1.606-2.391 2.727v6.94a10.572 10.572 0 0 0 2.875 3.971c-.515.273-1.483.242-2.481.273-.151 0-.272 0-.394-.031v1.758c1.361-.09 2.936-.424 3.965-1.395.938.697 1.574.82 2.816 1.031 1.088.213 3.328-.029 4.721-1.092v-1.061c-.635.275-1.393.396-1.817.396zM94.02 93.21c.702-.703 1.277-.8 1.677-.703.524.127.718 1.347-.079 2.146-.897.899-.619.672-2.316 1.183 0 0 .016-1.922.718-2.626z"/>
            
          </g>
        </svg>

      </div>

      <article class="experience_detail-overview" role="contentinfo">

        <p class="experience_detail-client_description" rol2e="text">
          The Procter & Gamble Company manufactures and markets consumer products in countries throughout the world. The Company provides products in the laundry and cleaning, paper, beauty care, food and beverage, and health care segments. Procter & Gamble products are sold primarily through mass merchandisers, grocery stores, and drug stores.
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
            <li class="experience_detail-snippet_detail" role="listitem">Procter & Gamble</li>
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
            <li class="experience_detail-snippet_detail" role="listitem">Consumer Product</li>
          </ul>
        </div>

        <div class="experience_detail-snippet" role="contentinfo">
          <div class="experience_detail-snippet_header" role="heading">Ticker</div>
          <ul class="experience_detail-snippet_details" role="list">
            <li class="experience_detail-snippet_detail" role="listitem">
              <a href="#" class="" aria-label="" target="_blank" rel="noreferrer">PG</a>
            </li>
          </ul>
        </div>

        <div class="experience_detail-snippet" role="contentinfo">
          <div class="experience_detail-snippet_header" role="heading">Agency</div>
          <ul class="experience_detail-snippet_details" role="list">
            <li class="experience_detail-snippet_detail" role="listitem">influencers@</li>
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
          <a href="/spotify.html" class="next-experience-link" aria-label="">> Spotify</a>
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
            <a :href="experienceClientLink.linkURL" class="experience-highlighted_client-link" aria-label="Go to detail page" role="link">{{ experienceClientLink.linkTitle }}
                    </a>
          </li>
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