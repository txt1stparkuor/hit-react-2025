import { useState } from "react";
import BaseButton from "../../components/BaseButton/BaseButton";
import logo from "../../assets/Logo (1).png";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

function Profile({ onLogout }) {
  const mockPostsData = [
    {
      id: 1,
      title: "First Post",
      description: "Learning React is fun!",
      tags: "React, JavaScript",
    },
    {
      id: 2,
      title: "Styling Tips",
      description: "SCSS makes styling easier.",
      tags: "SCSS, CSS",
    },
    {
      id: 3,
      title: "API Integration",
      description: "Fetching data with Axios.",
      tags: "API, Axios",
    },
  ];
  const [posts, setPosts] = useState(mockPostsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const navigate=useNavigate()

  const handleAddNew = () => {
    setEditingPost(null);
    setIsModalOpen(true);
  };

  const handleEdit = (postToEdit) => {
    setEditingPost(postToEdit);
    setIsModalOpen(true);
  };

  const handleDelete = (postId) => {
    setPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== postId)
    );
  };

  const handleModalSave = (formData) => {
    if (editingPost) {
      setPosts((currentPosts) =>
        currentPosts.map((post) =>
          post.id === editingPost.id ? { ...post, ...formData } : post
        )
      );
    } else {
      const newPost = {
        id: posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1,
        ...formData,
      };
      setPosts((currentPosts) => [...currentPosts, newPost]);
    }
    setIsModalOpen(false);
    setEditingPost(null);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingPost(null);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="profile">
      <aside className="profile__sidebar">
        <div className="profile__logo-container" onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="Application Logo"
            className="profile__logo-image"
          />
        </div>
        <nav className="profile__nav">
          <ul className="profile__nav-list">
            <li className="profile__nav-item profile__nav-item--active">
              Posts
            </li>
            <li className="profile__nav-item" onClick={onLogout}>
              Logout
            </li>
          </ul>
        </nav>
      </aside>
      <main className="profile__content">
        <div className="profile__header">
          <h2 className="profile__header-title">Profile</h2>
        </div>
        <div className="profile__actions-bar">
          <BaseButton onClick={handleAddNew}>Add new</BaseButton>
          <div className="profile__filter-controls">
            <input
              type="text"
              placeholder="Title"
              className="profile__filter-input profile__filter-input--title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="profile__filter-dropdown profile__filter-dropdown--tags">
              <span>Tags</span>
              <i className="bi bi-chevron-down"></i>
            </div>
          </div>
        </div>

        <div className="profile__table-container">
          <table className="profile__table">
            <thead className="profile__table-head">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="profile__table-body">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="profile__table-row">
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.description}</td>
                  <td>{post.tags}</td>
                  <td className="profile__table-actions">
                    <button
                      className="profile__action-btn profile__action-btn--edit"
                      onClick={() => handleEdit(post)}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="profile__action-btn profile__action-btn--delete"
                      onClick={() => handleDelete(post.id)}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              ))}
              {filteredPosts.length === 0 && (
                <tr className="profile__table-row">
                  <td colSpan="5" className="profile__table-cell--empty">
                    No posts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="profile__pagination-container">
          <button className="profile__pagination-btn">Phân Phân trang</button>
        </div>

        {isModalOpen && (
          <div className="profile__modal-overlay">
            <div className="profile__modal">
              <h3 className="profile__modal-title">
                {editingPost ? "Edit Post" : "Add New Post"}
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = {
                    title: e.target.title.value,
                    description: e.target.description.value,
                    tags: e.target.tags.value,
                  };
                  handleModalSave(formData);
                }}
              >
                <div className="profile__modal-field">
                  <label htmlFor="modalTitle">Title</label>
                  <input
                    type="text"
                    id="modalTitle"
                    name="title"
                    defaultValue={editingPost?.title || ""}
                    required
                  />
                </div>
                <div className="profile__modal-field">
                  <label htmlFor="modalDescription">Description</label>
                  <textarea
                    id="modalDescription"
                    name="description"
                    defaultValue={editingPost?.description || ""}
                    required
                  />
                </div>
                <div className="profile__modal-field">
                  <label htmlFor="modalTags">Tags (comma separated)</label>
                  <input
                    type="text"
                    id="modalTags"
                    name="tags"
                    defaultValue={editingPost?.tags || ""}
                  />
                </div>
                <div className="profile__modal-actions">
                  <BaseButton type="submit">Save</BaseButton>
                  <BaseButton type="button" onClick={handleModalClose}>
                    Cancel
                  </BaseButton>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Profile;
