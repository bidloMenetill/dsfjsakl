import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.opendota.com/api/",
});

export const HeroesAPI = {
  getAllHeroes() {
    return instance.get("heroes");
  },
};
