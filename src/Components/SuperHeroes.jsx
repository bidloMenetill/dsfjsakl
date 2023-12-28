import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSuperHeroes } from "../STORE/SuperHeroSlice";
import SuperHeroesOutput from "./SuperHeroesOutput";
import module from "./SuperHeroesOutput.module.css";
const SuperHeroes = () => {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.heroes.heroes);
  useEffect(() => {
    dispatch(getAllSuperHeroes());
  }, [dispatch]);

  return (
    <div>
      <div className={module.heroesWrapper}>
        {heroes?.map((el, index) => (
          <div key={index}>
            <SuperHeroesOutput hero={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperHeroes;
