// src/components/AboutPage.js

import React, { useContext, useEffect, useState } from "react";
import { useGetUserQuery, useUpdateUserMutation } from "../../redux/EndPoints/ApiEndpoints";
import { UserAuth } from "../../Context/UserContext";

function AboutPage() {
    const { user,  } = useContext(UserAuth)
    console.log(user);
    const { data: getUser, isLoading } = useGetUserQuery(user?.uid);
    const [formData, setFormData] = useState({}); // Initialize formData with an empty object
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation(); // Use the mutation for updating user data

    // Populate formData with getUser data when it's available
    useEffect(() => {
        if (getUser) {
            setFormData({
                displayName: getUser.displayName || "",
                email: getUser.email || "",
                university: getUser.university || "",
                address: getUser.address || "",
            });
        }
    }, [getUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdateProfile = async () => {
        const body = {
            id: getUser?._id,
            data: formData,
          };
        updateUser(body)
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-100 p-8">
            {!isLoading ?  <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">About Me</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="text-gray-600">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="displayName"
                        value={formData?.displayName}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="text-gray-600">
                        Email:
                    </label>
                    <input
                        readOnly
                        type="email"
                        id="email"
                        name="email"
                        value={formData?.email}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="university" className="text-gray-600">
                        University:
                    </label>
                    <input
                        type="text"
                        id="university"
                        name="university"
                        value={formData?.university}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="text-gray-600">
                        Address:
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData?.address}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleUpdateProfile}
                >
                    Update Profile
                </button>
            </div> : "Loading" }
        </div>
    );
}

export default AboutPage;
