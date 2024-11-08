import React, { useEffect, useState } from 'react';
import api from '../../api/api'; // Custom axios instance

export default function UserHome() {
  const [formData, setFormData] = useState({ name: '', price: '', categories: '' });
  const [updateData, setUpdateData] = useState({ id: '', name: '', price: '', categories: '' });
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    api.get('http://localhost:5000/items')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('http://localhost:5000/items', formData)
      .then(response => {
        console.log('Item created:', response.data);
        fetchItems();
      })
      .catch(error => {
        console.error('Error creating item:', error.response ? error.response.data : error.message);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    api.patch(`http://localhost:5000/items/${updateData.id}`, updateData)
      .then(response => {
        console.log('Item updated:', response.data);
        fetchItems();
      })
      .catch(error => {
        console.error('Error updating item:', error.response ? error.response.data : error.message);
      });
  };

  const handleDelete = (id) => {
    api.delete(`http://localhost:5000/items/${id}`)
      .then(response => {
        console.log('Item deleted:', response.data);
        fetchItems();
      })
      .catch(error => {
        console.error('Error deleting item:', error.response ? error.response.data : error.message);
      });
  };

  return (
    <div>
      <h1>This is a testing Node.js page</h1>
      <form onSubmit={handleSubmit}>
        <h1>Create Item</h1>
        <input placeholder='Name' name='name' value={formData.name} onChange={handleChange} />
        <input placeholder='Price' name='price' value={formData.price} onChange={handleChange} />
        <input placeholder='Categories' name='categories' value={formData.categories} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>

      <form onSubmit={handleUpdate}>
        <h1>Update Item</h1>
        <input placeholder='ID' name='id' value={updateData.id} onChange={handleUpdateChange} />
        <input placeholder='Name' name='name' value={updateData.name} onChange={handleUpdateChange} />
        <input placeholder='Price' name='price' value={updateData.price} onChange={handleUpdateChange} />
        <input placeholder='Categories' name='categories' value={updateData.categories} onChange={handleUpdateChange} />
        <button type='submit'>Update</button>
      </form>

      <div>
        <h2>Items List</h2>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Categories</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>{blog._id}</td>
                <td>{blog.name}</td>
                <td>{blog.price}</td>
                <td>{blog.categories}</td>
                <td>
                  <button onClick={() => handleDelete(blog._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
