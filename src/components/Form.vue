<template>
  <div v-if="loading" class="h-screen w-full">
    <Loading />
  </div>
  <div
    v-if="!loading"
    class="w-full py-10 md:!px-20 sm:!px-10 px-4 form h-full"
  >
    <Header />
    <main
      class="flex lg:flex-row flex-col-reverse items-center justify-between lg:mb-0 mb-32 mt-10"
    >
      <form
        class="lg:w-8/12 w-full xl:mr-0 lg:mr-8 mr-0"
        @submit.prevent="handleSubmit"
      >
        <h2 class="text-dark sm:!text-4xl text-2xl font-bold">
          One Final Step
        </h2>
        <div class="mt-6">
          <div
            class="flex md:flex-row flex-col items-center md:justify-between justify-center"
          >
            <label class="form-control w-full md:!mr-2 mr-0">
              <div class="label">
                <span
                  :class="!data.first_name && validate && 'text-danger'"
                  class="label-text sm:!text-xl text-sm font-bold pl-4"
                  >First Name</span
                >
              </div>
              <input
                v-model="data.first_name"
                type="text"
                class="input input-bordered w-full h-11 rounded-3xl bg-light"
                :class="!data.first_name && validate && 'input-error'"
              />
            </label>
            <label class="form-control w-full md:!ml-2 ml-0 mt-6 md:!mt-0">
              <div class="label">
                <span
                  :class="!data.last_name && validate && 'text-danger'"
                  class="label-text sm:!text-xl text-sm font-bold pl-4"
                  >Last Name</span
                >
              </div>
              <input
                v-model="data.last_name"
                type="text"
                class="input input-bordered w-full h-11 rounded-3xl bg-light"
                :class="!data.last_name && validate && 'input-error'"
              />
            </label>
          </div>
          <div
            class="flex md:!flex-row flex-col items-center md:!justify-between justify-center mt-6"
          >
            <div class="w-full md:!mr-2 mr-0 mt-2">
              <span
                :class="!data.phone_number && validate && 'text-danger'"
                class="label-text sm:!text-xl text-sm font-bold pl-4"
                >Whatsapp Number</span
              >
              <VueTelInput
                ref="Tel"
                v-model="data.phone_number"
                mode="international"
                class="h-11 mt-2 bg-light"
                :dropdownOptions="dropdownOptions"
              >
                <template v-slot:arrow-icon>
                  <img src="../assets/icons/arrow2.svg" />
                </template>
              </VueTelInput>
            </div>
            <label class="form-control w-full md:!ml-2 ml-0 mt-6 md:!mt-0">
              <div class="label">
                <span
                  :class="!data.email && validate && 'text-danger'"
                  class="label-text sm:!text-xl text-sm font-bold pl-4"
                  >Email Address</span
                >
              </div>
              <input
                v-model="data.email"
                type="email"
                class="input input-bordered w-full h-11 rounded-3xl bg-light"
                :class="!data.email && validate && 'input-error'"
              />
            </label>
          </div>
        </div>
        <div class="mt-12 flex md:flex-row flex-col items-start">
          <button
            :disabled="loadingBtn"
            type="submit"
            :class="loadingBtn ? 'md:w-[300px] w-[100%]' : 'md:w-auto w-[100%]'"
            class="flex justify-center items-center mt-0 btn bg-primary_color border-0 text-light sm:!text-xl text-base rounded-3xl px-8 hover:bg-primary_color hover:opacity-75"
          >
            <span v-if="!loadingBtn">Show your Full resault</span>
            <img
              v-if="!loadingBtn"
              class="ml-0"
              src="../assets/icons/arrow3.svg"
            />
            <span
              v-if="loadingBtn"
              class="loading loading-spinner loading-lg"
            ></span>
          </button>
          <div
            v-if="validate"
            role="alert"
            class="h-12 flex items-center rounded-3xl alert alert-error text-light md:!ml-6 ml-0 md:!mt-0 mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>

            <span>{{ errorMessage }}</span>
          </div>
        </div>
      </form>
      <div class="xl:w-1/2 lg:w-4/12 w-full flex lg:justify-end justify-center">
        <img src="../assets/images/Frame2.svg" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";
import { useRouter } from "vue-router";
import Header from "./Header.vue";
import { FormService } from "../services/FromService";
import Loading from "./Loading.vue";

const router = useRouter();
const loadingBtn = ref(false);
const loading = ref(false);
const validate = ref(false);
const errorMessage = ref("");
const data = ref({
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
});

const handleSubmit = () => {
  if (
    data.value.first_name &&
    data.value.last_name &&
    data.value.email &&
    data.value.phone_number
  ) {
    postData();
  } else {
    validate.value = true;
    errorMessage.value = "Please enter all this fields.";
  }
};

const dropdownOptions = ref({
  showDialCodeInSelection: true,
  showFlags: true,
  showDialCodeInList: true,
  showSearchBox: true,
});

const postData = async () => {
  loadingBtn.value = true;
  try {
    let response = await FormService.post("/submit-form", data.value);
    if (response === 201) {
      loading.value = true;
      data.value.first_name = "";
      data.value.last_name = "";
      data.value.phone_number = "";
      data.value.email = "";
      setTimeout(() => {
        router.push("/result");
      }, 5000);
    }
  } catch (error: any) {
    if (error.response.status === 401 || error.response.status === 422) {
      validate.value = true;
      errorMessage.value =
        "Something went wrong, please contact the website owner";
    }
    if (error.response.status === 400) {
      validate.value = true;
      errorMessage.value = error.response.data.error;
    }
    if (error.response.status === 500) {
      validate.value = true;
      errorMessage.value =
        "This indicates an unexpected error on the server, and the user may need to try again later.";
    }
  } finally {
    loadingBtn.value = false;
  }
};
</script>

<style lang="scss">
.form {
  .vue-tel-input {
    border-radius: 40px;

    &:focus-within {
      box-shadow: none;
      border: none;
    }

    .vti__input {
      background: #fff;
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
      box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25) inset;
    }

    .vti__search_box {
      box-shadow: none;
      width: 99%;
      border-radius: 0px;
    }
  }

  .vti__dropdown {
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    width: 164px;
    border: 2px solid var(--primary);
  }

  .form-control {
    input {
      box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25) inset;
    }
  }

  input::placeholder {
    opacity: 0;
  }

  .vti__country-code {
    font-size: 16px;
    color: #000;
    font-weight: bold;
    padding: 0px 5px;
  }
}
@media only screen and (min-width: 1600px) {
  .form {
    main {
      height: 600px;
    }
  }
}
</style>