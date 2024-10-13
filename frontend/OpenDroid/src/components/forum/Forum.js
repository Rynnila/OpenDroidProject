import React, { useEffect, useState } from "react";
import "./Forum.css";
import Swal from "sweetalert2";
import { getComments, insertComment, deleteComment, updateComment } from "../../services/comment.service";
import UtilsService from "../../services/utils.service";

// Importe as imagens
import drodroid1 from "../../assets/imgs/drodroid.png";
import drodroid2 from "../../assets/imgs/drodroid_=(.png";
import drodroid3 from "../../assets/imgs/drodroid_s2-s2.png";
import drodroid4 from "../../assets/imgs/drodroid_x-x.png";
import drodroid5 from "../../assets/imgs/drodroid.png";

const Forum = () => {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    comment: "",
    tag: "#",
    date: new Date(),
  });

  const [editingComment, setEditingComment] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;
  const [hoveredCommentId, setHoveredCommentId] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Array de imagens
  const images = [drodroid1, drodroid2, drodroid3, drodroid4, drodroid5];

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    const filtered = comments.filter(comment =>
      comment.comment
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(
          searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
        ) ||
      UtilsService.cutTags(comment.tag).some(tag =>
        tag
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(
            searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
          )
      )
    );
    setFilteredComments(filtered);
    setCurrentPage(1); // Reseta para a primeira página ao buscar
  }, [searchTerm, comments]);

  const fetchComments = async () => {
    try {
      const response = await getComments();
      const commentsWithImages = response.data.reverse().map(comment => ({
        ...comment,
        image: getRandomImage(), // Adiciona uma imagem aleatória a cada comentário
      }));
      setComments(commentsWithImages);
      setFilteredComments(commentsWithImages); // Inicializa também a lista filtrada
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const invalidFields = UtilsService.findInvalidControls(formData);
    if (invalidFields.length === 0) {
      try {
        if (editingComment) {
          await updateComment(editingComment.id, formData);
          Swal.fire({
            icon: "success",
            title: "Comentário atualizado com sucesso!",
            timer: 5000,
          });
        } else {
          await insertComment(formData);
          Swal.fire({
            icon: "success",
            title: "Postagem realizada com sucesso!",
            timer: 5000,
          });
        }
        setFormData({
          title: "",
          comment: "",
          tag: "#",
          date: new Date(),
        });
        fetchComments();
        setIsPopupVisible(false);
        setEditingComment(null); // Reseta após a edição
      } catch (error) {
        Swal.fire({
          icon: "warning",
          title: `Erro ao ${editingComment ? "atualizar" : "postar"} comentário: ${error.message}`,
          timer: 5000,
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: `Os campos ${invalidFields.join(", ")} são inválidos.`,
        timer: 5000,
      });
    }
  };

  const handleDeleteComment = async (commentId) => {
    const confirm = await Swal.fire({
      title: 'Tem certeza que deseja remover este comentário?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, remover!',
      cancelButtonText: 'Cancelar'
    });

    if (confirm.isConfirmed) {
      try {
        await deleteComment(commentId);
        Swal.fire({
          icon: "success",
          title: "Comentário removido com sucesso!",
          timer: 5000,
        });
        fetchComments();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `Erro ao remover comentário: ${error.message}`,
          timer: 5000,
        });
      }
    }
  };

  const renderTags = (tagString) => {
    const tags = UtilsService.cutTags(tagString);
    return tags.map((tag, index) => (
      <span key={index} className="tag">{tag}</span>
    ));
  };

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = filteredComments.slice(indexOfFirstComment, indexOfLastComment);
  const totalPages = Math.ceil(filteredComments.length / commentsPerPage);

  // Função para obter uma imagem aleatória
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <div className="forum-container">
      <nav className="navbar">
        <h1>Opendroid Forum</h1>
        <div className="navbar-links">
          <input
            type="text"
            placeholder="Buscar comentários..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de busca
          />
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>
      <section className="container">
        <button
          className="bt-comment"
          onClick={() => {
            setFormData({
              title: "",
              comment: "",
              tag: "#",
              date: new Date(),
            });
            setEditingComment(null);
            setIsPopupVisible(true);
          }}
        >
          <i className="icon-plus" style={{ fontSize: "30px" }}></i>
        </button>
        <div className="comment-list">
          {currentComments.map((comment) => (
            <div 
              key={comment.id} 
              className="comment-container" 
              onMouseEnter={() => setHoveredCommentId(comment.id)}
              onMouseLeave={() => setHoveredCommentId(null)}
            >
              <img className="comment-img" src={comment.image} alt="User Avatar" />
              <div className="comment-content">
                <span className="comment-username">Drodroid</span>
                <span className="comment-title">{comment.title}</span>
                <p className="comment-text">{comment.comment}</p>
                <div className="tags">{renderTags(comment.tag)}</div>
                <div className="date-container">
                  <span className="comment-date">Publicado em {new Date(comment.date).toLocaleDateString()}</span>
                </div>
                {hoveredCommentId === comment.id && (
                  <div>
                    <button onClick={() => handleDeleteComment(comment.id)} className="delete-button">
                      Remover
                    </button>
                    <button
                      className="edit-button"
                      onClick={() => {
                        setFormData({
                          title: comment.title,
                          comment: comment.comment,
                          tag: comment.tag,
                        });
                        setEditingComment(comment);
                        setIsPopupVisible(true);
                      }}
                    >
                      Editar
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            &laquo; Anterior
          </button>
          <span>{currentPage} de {totalPages}</span>
          <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
            Próximo &raquo;
          </button>
        </div>

        {isPopupVisible && (
          <div className="popup-overlay">
            <div className="comment-pop">
              <form onSubmit={handleSubmit}>
                <div className="post-container">
                  <span className="title-pop">{editingComment ? "Editar comentário" : "Crie seu comentário!"}</span>
                  <input
                    type="text"
                    id="titulo"
                    name="title"
                    placeholder="Insira um título para seu comentário"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="title-pop">Corpo</span>
                  <textarea
                    id="corpo"
                    name="comment"
                    rows="10"
                    placeholder="Descreva seu comentário, pergunta ou dúvida..."
                    value={formData.comment}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <span className="title-pop">Tags</span>
                  <input
                    type="text"
                    id="tags"
                    name="tag"
                    placeholder="Adicione tags à sua postagem"
                    value={formData.tag}
                    onChange={handleInputChange}
                  />
                  <button type="submit" className="submit-btn">{editingComment ? "Atualizar!" : "Postar!"}</button>
                  <button className="cancel-btn" onClick={() => setIsPopupVisible(false)}>Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Forum;