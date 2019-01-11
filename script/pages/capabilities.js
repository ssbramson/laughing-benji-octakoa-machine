Vue.component('tabs', {
  template: `
    <div class="capabilities-content">
      <div class="capabilities-navigation-content">
        <ul class="capabilities-navigation_tabs"><li v-for="tab in tabs" :class="['capabilities-navigation_tab', { 'is-active': tab.isActive }]"><a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a></li></ul>
      </div>
      <div class="capabilities-list-container">
        <slot></slot>
      </div>
    </div>
  `,

    data() {
        return { tabs: [] };
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.href == selectedTab.href);
            });
        }
    }
});


Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {
        return {
            isActive: false
        };
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    },
});

new Vue({
    el: '#capabilities'
});