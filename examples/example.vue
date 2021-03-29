<template>
  <div>
    <section class="demo">
      <div class="columns">
        <div class="column">
          <div class="card">
            <h1 class="title">Lorem ipsum {{ data }}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <CardAutomotive
              :modelName="car.details.fullName"
              :modelPrice="car.details.price"
              :modelYear="car.details.year"
              :modelMileage="car.details.mileage"
              :modelID="car.id"
            />
            <input type="button" @click="foo(event)" value="Button" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// comment
import { reactive, computed } from "vue";
import getCars from "@/utils/getCars";
import CardAutomotive from "@/components/CardAutomotive";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: { CardAutomotive, Carousel, Slide, Pagination, Navigation },
  setup() {
    const string = "string";
    const cars = getCars();
    let state = reactive({
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,
      items: [
        { name: "Kin Khao", tag: ["Thai"] },
        { name: "Jū-Ni", tag: ["Sushi", "Japanese", "$$$$"] },
        { name: "Delfina", tag: ["Pizza", "Casual"] },
        { name: "San Tung", tag: ["Chinese", "$$"] },
        { name: "Anchor Oyster Bar", tag: ["Seafood", "Cioppino"] },
        { name: "Locanda", tag: ["Italian"] },
        { name: "Garden Creamery", tag: ["Ice cream"] },
      ],
    });

    const r = /((\d{3})(?:\.|-))?(\d{3})(?:\.|-)(\d{4})/g;
    const m = r.exec("Call 1.800.555-1212 for info");
    m.index;
    JSON.stringify(m);

    const atEndOfList = computed(() => {
      return (
        state.currentOffset <=
        state.paginationFactor * -1 * (state.items.length - state.windowSize)
      );
    });

    const atHeadOfList = computed(() => {
      if (state.currentOffset === 0) return true;
      else return false;
    });

    switch (asdf) {
      case "asdf":
        console.log("asdf");
        break;
      default:
        console.log("default");
    }

    const moveCarousel = (direction) => {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !state.atEndOfList) {
        state.currentOffset -= state.paginationFactor;
      } else if (direction === -1 && !state.atHeadOfList) {
        state.currentOffset += state.paginationFactor;
      }
    };

    return { state, atEndOfList, atHeadOfList, moveCarousel, cars, string };
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
    url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}

.carousel {
  position: relative;
  text-align: center;
  box-sizing: border-box;
}
#bob {
  color: blue;
}
.carousel * {
  box-sizing: border-box;
  &::before {
    color: rebeccapurple;
  }
}

.carousel__track {
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
}

.carousel__viewport {
  overflow: hidden;
}
.carousel__prev,
.carousel__next {
  background-color: $primary;
  border-radius: 40px;
  width: 40px;
  height: 40px;
  border: 5px solid white;
  text-align: center;
  font-size: 20px;
  padding: 0;
  color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}

.carousel__prev {
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
}

.carousel__next {
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
}
.carousel__icon {
  width: 1.2em;
  height: 1.2em;
  fill: currentColor;
}
.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 3rem;
}
.carousel__pagination-button {
  margin: 5px;
  width: 15px;
  height: 5px;
  border: 0;
  cursor: pointer;
  background-color: $primary;
  opacity: 0.5;
}

.carousel__pagination-button--active {
  background-color: $primary;
  opacity: 1;
}
</style>
