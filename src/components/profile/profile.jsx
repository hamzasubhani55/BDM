import { useState } from "react";

const defaultUser = {
  name: "Ameer Khan",
  email: "ameer@example.com",
  bio: "Full Stack Developer | JavaScript Enthusiast",
  avatar: "https://i.pravatar.cc/150?img=3",
};

export default function UserProfile() {
  const [user, setUser] = useState(defaultUser);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Add your API call here
    setUser(formData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setFormData(user);
    setEditMode(false);
  };

  const handleAvatarChange = () => {
    // Mock avatar change
    const randomId = Math.floor(Math.random() * 70);
    setFormData((prev) => ({
      ...prev,
      avatar: `https://i.pravatar.cc/150?img=${randomId}`,
    }));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <div className="flex flex-col items-center">
        <img
          src={formData.avatar}
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        {editMode && (
          <button
            className="text-sm text-blue-600 hover:underline mb-4"
            onClick={handleAvatarChange}
          >
            Change Avatar
          </button>
        )}
        <div className="w-full space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            {editMode ? (
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            ) : (
              <p className="mt-1 text-gray-800">{user.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            {editMode ? (
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            ) : (
              <p className="mt-1 text-gray-800">{user.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            {editMode ? (
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={3}
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            ) : (
              <p className="mt-1 text-gray-800">{user.bio}</p>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-4">
            {editMode ? (
              <>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
