import React from "react";
import { Link } from "react-router-dom";
import HomeStyled from "./HomeStyled";
import house from "../../assets/house.png";

const HomeScreen = () => {
  return (
    <HomeStyled>
      <div className="grid-item about">
        <h1>kilka słów o nas</h1>
        <h3>czyli kim jesteśmy i dokąd zmierzamy</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          error, numquam sit consectetur qui sapiente libero cupiditate
          aspernatur modi, ipsam sequi ab blanditiis? Non, quas. Cum, commodi
          libero, inventore deleniti a delectus qui optio cupiditate provident
          ullam reprehenderit quam iure voluptates ab sint non repudiandae ea!
          Repudiandae ut esse voluptas nemo, illum voluptate? Pariatur dolores
          eaque repellendus! Corporis dolore sapiente, beatae temporibus at ab
          blanditiis quam sit delectus laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim
          neque sed unde ut inventore cum molestias delectus quisquam deserunt
          repellat officia, nesciunt eligendi deleniti ad. Illum voluptates
          sapiente hic inventore quibusdam fugiat nulla reiciendis iusto
          consectetur officiis earum maiores consequatur dignissimos, corporis,
          velit ducimus enim quaerat autem illo eos soluta??
        </p>
        <Link to="/houses">zobacz więcej</Link>
      </div>
      <div className="grid-item tiles">
        <div className="tile">
          <img className="house-icon" src={house} alt="house" />
        </div>
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="house-1"
          />
        </div>
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt="house-2"
          />
        </div>
        <div className="tile">
          <img
            src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="house-3"
          />
          <div className="overlay">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              numquam ipsum nam ad. Animi sequi atque, quaerat quae totam ullam!
            </p>
          </div>
        </div>
      </div>
      <div className="grid-item info">
        <img
          src="https://images.unsplash.com/photo-1588557132645-ff567110cafd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <div className="overlay">
          <ul>
            <li>budowa domów z derwna</li>
            <li>budowa bram wjazdowych</li>
            <li>wykończenie wnętrz</li>
            <li>altany ogrodowe</li>
            <li>kamienne elementy architektury</li>
            <li>remonty</li>
          </ul>
        </div>
      </div>
      <div className="grid-item offer">
        <h1>nasza oferta</h1>
        <h3>dowiedz się co możemy tobie zaoferować</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          error, numquam sit consectetur qui sapiente libero cupiditate
          aspernatur modi, ipsam sequi ab blanditiis? Non, quas. Cum, commodi
          libero, inventore deleniti a delectus qui optio cupiditate provident
          ullam reprehenderit quam iure voluptates ab sint non repudiandae ea!
          Repudiandae ut esse voluptas nemo, illum voluptate? Pariatur dolores
          eaque repellendus! Corporis dolore sapiente, beatae temporibus at ab
          blanditiis quam sit delectus laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim
          neque sed unde ut inventore cum molestias delectus quisquam deserunt
          repellat officia, nesciunt eligendi deleniti ad. Illum voluptates
          sapiente hic inventore quibusdam fugiat nulla reiciendis iusto
          consectetur officiis earum maiores consequatur dignissimos, corporis,
          velit ducimus enim quaerat autem illo eos soluta??
        </p>
        <Link to="/houses">zobacz więcej</Link>
      </div>
    </HomeStyled>
  );
};

export default HomeScreen;
