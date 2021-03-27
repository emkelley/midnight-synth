<template>
  <carousel id="carousel" :items-to-show="4.05">
    <slide class="butts" v-for="car in cars" :key="car.id">
      <div style="width: 300px">
        <CardAutomotive
          :modelName="car.details.fullName"
          :modelPrice="car.details.price"
          :modelYear="car.details.year"
          :modelMileage="car.details.mileage"
          :modelSeats="car.details.seats"
          :modelDescription="car.details.descShort"
          :modelID="car.id"
        />
        <h1 class="title">Hello</h1>
        <router-link class="button">Link</router-link>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// comment
import { reactive, computed } from "vue";
import CardAutomotive from "@/components/CardAutomotive";
import getCars from "@/utils/getCars";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: { CardAutomotive, Carousel, Slide, Pagination, Navigation },
  setup() {
    const string = "I AM A STRING";
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
.carousel {
  position: relative;
  text-align: center;
  box-sizing: border-box;
}

.carousel * {
  box-sizing: border-box;
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
