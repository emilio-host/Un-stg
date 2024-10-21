import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class unSdg extends DDDSuper(LitElement) {
  static get tag() {
    return "UN-STG";
  }

  static get properties() {
    return {
      goal: { type: String },
      colorOnly: { type: Boolean },
      itemWidth: { type: String }, 
      itemHeight: { type: String }, 
    };
  }

  constructor() {
    super();
    this.goal = "all";
    this.colorOnly = false;
    this.itemWidth = "500px"; 
    this.itemHeight = "200px"; 
    this.goals = {
      1: {
        //Image: 1,
        link: "https://unfoundation.org/blog/post/reversal-and-resilience-sdg-progress-after-a-year-of-covid-19/",
        title: "Reversal and Resilience: SDG Progress After a Year of COVID-19"
      },
      2: {
        //Image: 2,
        link: "https://unfoundation.org/blog/post/hungrier-than-ever-generations-of-undernourished-and-overlooked-mothers-women-and-girls/",
        title: "Hungrier Than Ever: Generations Of Undernourished And Overlooked Mothers, Women And Girls"
      },
      3: {
        //Image: 3,
        link: "https://unfoundation.org/blog/post/health-for-all-our-experts-reflect-on-whos-75-years-of-impact/",
        title: "Health For All: Our Experts Reflect On WHO's 75 Years Of Impact"
      },
      4: {
        //Image: 4,
        link: "https://unfoundation.org/blog/post/7-innovative-ways-american-universities-are-driving-progress-on-the-sdgs/",
        title: "7 Innovative Ways American Universities are Driving Progress on the SDGs"
      },
      5: {
        //Image: 5,
        link: "https://unfoundation.org/blog/post/stand-with-her-6-women-led-organizations-tackling-gender-based-violence/",
        title: "Stand With Her: 6 Women-Led Organizations Tackling Gender-Based Violence"
      },
      6: {
        //Image: 6,
        link: "https://unfoundation.org/blog/post/the-last-straw-how-you-can-beat-plastic-pollution/",
        title: "The Last Straw: How You Can Beat Plastic Pollution"
      },
      7: {
        //Image: 7,
        link: "https://unfoundation.org/blog/post/in-india-a-cleaner-way-of-cooking-fuels-climate-action-in-the-home/",
        title: "In India, a Cleaner Way of Cooking Fuels Climate Action in the Home"
      },
      8: {
        //Image: 8,
        link: "http://unfoundation.org/blog/post/protectors-of-progress-manyang-redefines-refugees/",
        title: "Protectors of Progress: Manyang Redefines Refugees"
      },
      9: {
        //Image: 9,
        link: "https://unfoundation.org/blog/post/key-takeaways-from-act-accelerator-platform-for-sharing-pandemic-countermeasures/",
        title: "Key Takeaways From The ACT- Accelerator: A First-Of-Its-Kind Platform For Sharing Pandemic Countermeasures"
      },
      10: {
        //Image: 10,
        link: "https://unfoundation.org/blog/post/breakdown-or-breakthrough-the-high-stakes-in-our-common-agenda/",
        title: "Breakdown or Breakthrough? The High Stakes in Our Common Agenda"
      },
      11: {
        //Image: 11,
        link: "https://unfoundation.org/blog/post/how-5-community-foundations-in-kansas-are-bringing-the-sdgs-home/",
        title: "How 5 Community Foundations in Kansas are Bringing the SDGs Home"
      },
      12: {
        //Image: 12,
        link: "https://unfoundation.org/blog/post/these-companies-leading-climate-race-against-time/",
        title: "These Companies Leading Climate Race Against Time"
      },
      13: {
        //Image: 13,
        link: "https://unfoundation.org/blog/post/3-recent-diplomatic-wins-for-climate-justice-and-what-comes-next/",
        title: "3 Recent Diplomatic Wins For Climate Justice — And What Comes Next"
      },
      14: {
        //Image: 14,
        link: "https://unfoundation.org/blog/post/climate-energy-and-food-crises-loom-heres-why-the-ocean-could-be-the-solution/",
        title: "Climate Energy And Food Crises Loom. Heres Why The Ocean Could Be The Solution"
      },
      15: {
        //Image: 15,
        link: "https://unfoundation.org/blog/post/meet-3-women-in-brazil-who-are-protecting-the-amazon-rainforest-and-indigenous-rights/",
        title: "Meet 3 Women In Brazil Who Are Protecting The Amazon Rainforest And Indigenous Rights"
      },
      16: {
        //Image: 16,
        link: "https://unfoundation.org/blog/post/reimagining-a-multilateral-future-with-by-and-for-young-people/",
        title: "Reimagining A Multilateral Future With, By, And For Young People"
      },
      17: {
        //Image: 17,
        link: "https://unfoundation.org/blog/post/a-city-rising-how-phoenix-is-harnessing-the-power-of-sdg-17/",
        title: "A City Rising: How Phoenix Is Harnessing The Power Of SDG 17"
      }
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          font-size: var(--un-sdg-font-size, var(--ddd-font-size-s));
        }

        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
          display: flex;
          justify-content: center;
        }

        .calendar-item {
          width: var(--un-sdg-item-width, auto);
          height: var(--un-sdg-item-height, auto);
          overflow: hidden; 
        }

        .calendar-item-img {
          width: 100% !important; /* Full width */
          height: 100% !important; /* Full height */
          background-size: contain !important; 
          background-repeat: no-repeat !important;
          background-position: center !important;
        }

        .calendar-item-img.color-only {
          background-size: 10000% !important; /* Zoom effect */
          background-position: 0 0 !important;
        }

         png {
          width: 100%;
          height: auto;
        }
      `,
    ];
  }


  render() {

     // Set CSS variables for item width and height
    this.style.setProperty('--UN-STG-item-width', this.itemWidth);
    this.style.setProperty('--UN-STG-item-height', this.itemHeight);

    // Check if the goal is "all" to render all calendar items
    if (this.goal === "all") {
      return html`
        <section class="interactive-calendar-block container plain pt-0 pb-5">
          <div class="row no-gutters">
            ${Object.keys(this.goals).map(
              (goalNumber) => html`
                <div class="col-12 col-sm-3 calendar-item px-2">
                  <div
                    class="calendar-item-img ${this.colorOnly ? 'color-only' : ''}"
                    style="background-image: url('/lib/svgs/goal-${goalNumber}.png');"
                  >
                    <a
                      class="d-flex flex-column justify-content-end calendar-item-link"
                      href="${this.goals[goalNumber].link}"
                      target=""
                    >
                      <div class="calendar-item-link-container">
                        <div class="calendar-item-title"></div>
                        <div class="calendar-item-team">
                          ${this.goals[goalNumber].title}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              `
            )}
          </div>
        </section>
        <head>
        <link rel="stylesheet" href="https://unfoundation.org/app/themes/unf/dist/styles/main.css">
      </head>
      <script src="https://unfoundation.org/app/themes/unf/dist/scripts/main.js" async></script>
      `;
    }
    
    // Check for "logo" goal
    if (this.goal === "logo") {
      return html`
        <section class="interactive-calendar-block container plain pt-0 pb-5">
          <div class="row no-gutters">
            <div class="col-12 col-sm-3 calendar-item px-2">
              <div
                class="calendar-item-img ${this.colorOnly ? 'color-only' : ''}"
                style="background-image: url('/lib/svgs/logo.png');"
              >
                <a
                  class="d-flex flex-column justify-content-end calendar-item-link"
                  href="#"
                  target=""
                >
                  <div class="calendar-item-link-container">
                    <div class="calendar-item-title"></div>
                    <div class="calendar-item-team">Logo Image</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <head>
          <link rel="stylesheet" href="https://unfoundation.org/app/themes/unf/dist/styles/main.css">
        </head>
        <script src="https://unfoundation.org/app/themes/unf/dist/scripts/main.js" async></script>
      `;
    }

    // For individual goals
    const goal = this.goals[this.goal]; // Get goal data by key
    if (!goal) {
      console.log("Not a goal");
      return;
    }

    return html`
      <section class="interactive-calendar-block container plain pt-0 pb-5">
        <div class="row no-gutters">
          <div class="col-12 col-sm-3 calendar-item px-2">
            <div
              class="calendar-item-img ${this.colorOnly ? 'color-only' : ''}"
              style="background-image: url('/lib/svgs/goal-${this.goal}.png');"
            >
              <a
                class="d-flex flex-column justify-content-end calendar-item-link"
                href="${goal.link}"
                target=""
              >
                <div class="calendar-item-link-container">
                  <div class="calendar-item-title"></div>
                  <div class="calendar-item-team">${goal.title}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <head>
        <link rel="stylesheet" href="https://unfoundation.org/app/themes/unf/dist/styles/main.css">
      </head>
      <script src="https://unfoundation.org/app/themes/unf/dist/scripts/main.js" async></script>
    `;
  }
  


  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(unSdg.tag, unStg);