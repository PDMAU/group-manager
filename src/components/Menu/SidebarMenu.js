import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import GroupModal from "../Modal/AddGroupModal";
import "./Sidebarmenu.css";

const SidebarMenu = ({ onCategoriaChange }) => {
  const context = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Atualiza o componente Example sempre que showModal mudar
  }, [showModal]);

  const handleCategoriaChange = (categoria) => {
    onCategoriaChange(categoria);
  };

  return (
    <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
      <div>
        <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-3">
          <span className="ms-1 fs-4 d-none d-sm-inline">Gerenciador</span>
        </a>
        <hr className="text-secondary d-none d-sm-block" />
        <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
          <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a
              href="#"
              className="nav-link text-white fs-5"
              aria-current="page"
              onClick={() => handleCategoriaChange("Universidade")}
            >
              <i className="bi bi-bank"></i>
              <span className="ms-3 d-none d-sm-inline">Universidade</span>
            </a>
          </li>
          <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a
              href="#"
              className="nav-link text-white fs-5"
              aria-current="page"
              onClick={() => handleCategoriaChange("Esportes")}
            >
              <i className="bi bi-dribbble"></i>
              <span className="ms-3 d-none d-sm-inline">Esportes</span>
            </a>
          </li>
          <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a
              href="#"
              className="nav-link text-white fs-5"
              aria-current="page"
              onClick={() => handleCategoriaChange("Estudos")}
            >
              <i className="bi bi-book"></i>
              <span className="ms-3 d-none d-sm-inline">Estudos</span>
            </a>
          </li>
          <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a
              href="#"
              className="nav-link text-white fs-5"
              aria-current="page"
              onClick={() => handleCategoriaChange("Games")}
            >
              <i className="bi bi-controller"></i>
              <span className="ms-3 d-none d-sm-inline">Games</span>
            </a>
          </li>
          <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a
              href="#"
              className="nav-link text-white fs-5"
              aria-current="page"
              onClick={() => handleCategoriaChange("Festas")}
            >
              <i className="bi bi-music-note-beamed"></i>
              <span className="ms-3 d-none d-sm-inline">Festas</span>
            </a>
          </li>
          <hr className="text-secondary d-none d-sm-block" />

          <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a
              href="#"
              className="nav-link text-white fs-5"
              aria-current="page"
              onClick={handleOpenModal}
            >
              <i className="bi bi-plus-circle"></i>
              <span className="ms-3 d-none d-sm-inline">Novo Grupo</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown open">
        <a
          className="text-decoration-none text-white dropdown-toggle p-3"
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="bi bi-person-circle"></i>
          <span className="ms-2 d-none d-sm-inline">{context.user.name}</span>
        </a>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <a
            className="dropdown-item"
            href="#"
            onClick={() => context.logout()}
          >
            <span className="d-none d-sm-block">
              <i className="bi bi-box-arrow-right"></i> Logout
            </span>
          </a>
        </div>
      </div>
      <GroupModal
        showModal={showModal}
        handleCloseModalPai={handleCloseModal}
      />
    </div>
  );
};

export default SidebarMenu;
