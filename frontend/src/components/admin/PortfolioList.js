import React, { useState } from "react";

import { Table, Button, Image, Modal } from "react-bootstrap";
import styled from "styled-components";
import moment from "moment";

import { useApi } from "../../hooks/useApi";
import Dialog from "../useFul/Dialog";
import PortfolioForm from "./Portfolioform";
import { deleteItem, editItem, addItem } from "../../services/api";

const PortfolioList = () => {
  const handleDel = (slug) => {
    deleteItem(slug);
  };
  const handleAdd = (slug, data) => {
    addPortfolioItem(data);
  };
  const handleEdit = (slug, data) => {
    editPortifolioItem(slug, data);
  };
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [longDescription, setLongDescription] = useState();
  const [image, setImage] = useState();
  const [tech, setTech] = useState();
  const [slug, setSlug] = useState();

  const [action] = useState({
    del: {
      header: "Deseja deletar?",
      btnVariant: "danger",
      btnLabel: "confirme",
      showBody: true,
      body: "Tem certaza que deseja deletar esse portfólio?",
      callback: handleDel,
    },
    edit: {
      header: "Editar portfólio",
      btnVariant: "primary",
      btnLabel: "Save",
      showBody: false,
      callback: handleEdit,
    },
    add: {
      header: "Adicionar novo Portfolio",
      btnVariant: "primary",
      btnLabel: "Save",
      showBody: false,
      callback: handleAdd,
    },
  });
  const [currentAction, setCurrentAction] = useState({
    header: "",
    btnVariant: "",
    btnLabel: "",
    Body: "",
  });
  const [show, setShow] = useState(false);

  const { data } = useApi("/portfolio");

  const handleShow = (portfolio, action) => {
    setCurrentAction(action);
    setShow(true);
    setTitle(portfolio?.title || "");
    setDescription(portfolio?.description || "");
    setLongDescription(portfolio?.longDescription || "");
    setImage(portfolio?.image || "");
    setSlug(portfolio?.slug || "");
    setTech(portfolio?.technologies || []);
  };
  const addPortfolioItem = (data) => {
    const tech = data.tech.map((i) => {
      delete i._id;
      return i;
    });
    const newPortfolioItem = {
      title: data.title,
      description: data.description,
      longDescription: data.longDescription,
      image: data.image,
      technologies: tech,
    };
    addItem(newPortfolioItem);
  };
  const editPortifolioItem = (slug, data) => {
    const tech = data.tech.map((i) => {
      delete i._id;
      return i;
    });
    const newPortfolioItem = {
      title: data.title,
      description: data.description,
      longDescription: data.longDescription,
      image: data.image,
      technologies: data.tech,
    };

    editItem(slug, newPortfolioItem);
  };

  return (
    <div>
      <AddButton
        variant="primary"
        size="lg"
        onClick={() => {
          handleShow(null, action.add);
        }}
      >
        Novo Portfólio
      </AddButton>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Título</th>
            <th>Data</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item) => {
            return (
              <tr key={item.slug}>
                <td>
                  <Logo rounded fluid src={item.image}></Logo>
                </td>
                <td>{item.title}</td>
                <td>{moment(item.createdAt).format("MMM  YYYY")}</td>
                <td>
                  {" "}
                  <Button
                    variant="info"
                    onClick={() => {
                      handleShow(item, action.edit);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleShow(item, action.del);
                    }}
                  >
                    Apagar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Dialog
        show={show}
        setShow={setShow}
        currentAction={currentAction}
        slug={slug}
      >
        {currentAction.showBody && currentAction.body}
        {!currentAction.showBody && (
          <PortfolioForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            longDescription={longDescription}
            setLongDescription={setLongDescription}
            image={image}
            setImage={setImage}
            slug={slug}
            tech={tech}
            setTech={setTech}
          />
        )}
      </Dialog>
    </div>
  );
};

const Logo = styled(Image)`
  height: 100px;
  width: 250px;
  object-fit: cover;
`;
const AddButton = styled(Button)`
  margin-bottom: 1rem;
`;
export default PortfolioList;
